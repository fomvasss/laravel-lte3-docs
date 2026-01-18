# JS API (public/main.js)

Файл: `public/main.js`

Огляд

Файл містить ініціалізації та допоміжні функції для фронтенд-частини пакету: ініціалізація tooltip, select2, datetimepicker, treeview, select2-tree, colorpicker, modal-ajax, sortable, LFM/EditorJS інтеграції та інші.

Публічні ініціалізації (функції доступні на глобальному window):

- `initJsVerificationSlugField()` — ініціалізація перевірки slug поля (зробити input editable при чекбоксі)
- `initColorpicker()` — ініціалізація colorpicker (підтримує autosave через data-url-save)
- `initSortableY()` — ініціалізація jQuery UI sortable по вертикалі
- `initSelect2()` — ініціалізація Select2 з опціями autosave, tags, ajax suggest/tags
- `initCheckbox()` — ініціалізація AJAX-збереження чекбоксів (`.f-checkbox-ajax`)
- `initSelect2Tree()` — ініціалізація Select2Tree (отримує дерево по AJAX)
- `initTreeview()` — ініціалізація bootstrap-treeview
- `initInputCalc()` — обробка полів калькулятора (обчислення виразу на Enter/blur)
- `initTooltip()` — ініціалізація bootstrap tooltip

Короткі приклади

- Select2 autosave:
  - Додати `data-url-save="/save-url" data-name="field_name"` до елементу `.f-select2`

- AJAX send через кнопки з `.js-ajax-send`:
  - data-url, data-method, data-confirm, data-data (може бути JSON)

Залежності

- jQuery
- Bootstrap (tooltip, modal)
- Select2
- jQuery UI (sortable)
- Colorpicker plugin
- MagnificPopup (для попап зображень)
- Toastr (повідомлення)

Edges / Notes

- Функції на глобальному scope викликаються за іменем з `data-fn-inits` після вставки HTML (наприклад у модальному вікні)
- Існують захисні механізми (confirm, CSRF token, обробка помилок)
- Файл містить багато helper-функцій (numberWithSpaces, humanFileSize, generateRandomPassword)

Для повного опису кожної функції рекомендую скопіювати потрібні фрагменти із `public/main.js` до окремої сторінки компоненту (або додати приклади виклику).

Детальні обробники подій та допоміжні функції

Нижче наведені часто використовувані обробники jQuery / допоміжні функції, визначені в `public/main.js`, з описом та прикладами використання (багато з них використовуються в `examples/components.blade.php`).

1) `.js-ajax-send` — універсальна кнопка/посилання AJAX

- Селектор: будь-який клікабельний елемент з класом `.js-ajax-send`.
- Підтримувані атрибути даних:
  - `data-url` — URL для запиту (резервний варіант: атрибут href)
  - `data-method` — HTTP метод (за замовчуванням `POST`)
  - `data-confirm` — текст підтвердження, що відображається через `confirm()` перед виконанням дії
  - `data-submit` — якщо true, створить і надішле форму замість виконання AJAX
  - `data-data` — JSON або об'єкт з даними для AJAX або відправки форми
  - `data-csrf` — значення користувацького токена CSRF (резервне копіювання до meta[name="csrf-token"]) 
  - `data-toggle="tooltip"` — підказка буде прихована перед виконанням дії
  - `data-fn-inits` — імена функцій ініціалізації JS, розділені комами, які потрібно викликати після завершення AJAX

Поведение:
- Якщо `data-submit` дорівнює true → обробник створює форму (додає приховані поля, _method якщо потрібно, токен CSRF) і надсилає сторінку (корисно для не-AJAX видалення/перенаправлення).
- В іншому випадку виконує `$.ajax` з `url`, `method`, `data`.
- У разі успіху:
  - Показує повідомлення `toastr`, якщо існує `response.message`.
  - Вставляє `response.html` на сторінку (підтримує відображення об'єктів селекторів -> html або рядкове вставлення в найближчий `.js-html-container`).
  - Виконує дії на основі `response.action` (`reload`, `redirect`, `remove`).
  - Викликає необов'язкові глобальні зворотні виклики `window.onAjaxSuccess(response, $btn)` та `window.onHtmlUpdated(response.html)`.
- Після завершення: знову активує кнопку та виконує функції з `data-fn-inits` (якщо присутні).

Приклад використання (з прикладів):

```blade
<a href="{{ route('lte3.data.save') }}" class="btn btn-danger js-ajax-send" data-confirm="Delete?">Delete</a>

<a class="dropdown-item js-ajax-send" data-method="delete" data-confirm="Remove?" href="{{ route('lte3.data.save') }}">Remove</a>
```

js-ajax-send — приклади використання і очікувані відповіді

Нижче наведені практичні приклади використання `.js-ajax-send` (нативні приклади із `examples/components.blade.php`) і приклади JSON-відповідей, які підтримує фронтенд.

1) Просте видалення (AJAX)

Blade (посилання в списку/кнопка):

```blade
<a href="{{ route('lte3.data.save') }}" class="dropdown-item js-ajax-send" data-method="delete" data-confirm="Remove?">Remove</a>
```

Пояснення:
- `data-method="delete"` — HTTP метод.
- `data-confirm` — запит підтвердження через `confirm()` перед виконанням.
- Якщо бекенд повертає JSON з `action: 'remove'` або `selector`, JS видалить відповідний DOM-елемент.

Приклад відповіді (успіх):

```json
{
  "status": "success",
  "message": "Item removed",
  "action": "remove",
  "selector": "#item-123"
}
```

- Відповідь без `selector` призведе до видалення найближчого `tr`/`.item`/`.card` поруч з кнопкою.

2) Використання `data-submit` — створити й відправити форму (не AJAX)

Blade (інструментальна кнопка, хочемо POST-перехід):

```blade
<a href="/some/endpoint" class="btn js-ajax-send" data-submit="true" data-method="POST" data-data='{"id":123, "force":1}' data-csrf="{{ csrf_token() }}">Submit</a>
```

Пояснення:
- Якщо `data-submit="true"` — скрипт динамічно створює `<form>` з прихованими полями, додає `_method` для PUT/PATCH/DELETE та `_token` при POST/PUT тощо і виконує submit; це корисно для забезпечення стандартного поведінки форми (редиректів) без AJAX.

3) Передача додаткових параметрів через `data-data`

Blade:

```blade
<a href="/admin/action" class="js-ajax-send" data-data='{"id": 55, "flag": true}' data-method="POST">Action</a>
```

Пояснення:
- `data-data` може бути рядком JSON або JS-обʼєктом (якщо елемент створювався скриптом). Скріпт намагається парсити рядок, якщо починається з `{`.

4) Оновлення HTML: `response.html` як об'єкт або рядок

- Якщо бекенд повертає `response.html` як об'єкт, ключі трактуються як селектори (якщо ключ починається з `.` або `#`) — скрипт робить `$('<selector>').html(value)` або `.append()` якщо `response.htmlAppends` містить селектор.

Приклад відповіді (обʼєкт):

```json
{
  "message": "Updated",
  "html": {
    ".items-list": "<li>New item</li>",
    "#summary": "<strong>Summary updated</strong>"
  },
  "htmlAppends": [".items-list"]
}
```

- Якщо `response.html` — рядок, то JS шукає найближчий контейнер з селектором `.js-html-container` поруч з кнопкою і замінює або додає вміст.

5) Використання `data-fn-inits` для повторної ініціалізації

Blade:

```blade
<a href="/some/ajax" class="js-ajax-send" data-fn-inits="initSelect2,initColorpicker">Load</a>
```

Пояснення:
- Після `complete` обробник викликає вказані глобальні функції, якщо вони існують. Це зручно, щоб перезапустити Select2, colorpickers, tooltips тощо після вставки HTML.

6) Дії на основі `response.action`

Підтримувані `action` в JS:
- `reload` — перезавантажити сторінку (з невеликою затримкою)
- `redirect` — виконати `window.location.href = response.redirect_url` (якщо задано)
- `remove` — видалити `response.selector` або найближчий `.item, tr, .card`

Приклад:

```json
{ "action": "redirect", "redirect_url": "/admin/list" }
```

7) CSRF, _method і захист

- Якщо виконується відправка форми (`data-submit`) — скрипт додає `_method` для методів PUT/PATCH/DELETE і `_token` з `data-csrf` або `meta[name="csrf-token"]` для автентифікації Laravel.
- Для AJAX викликів ви можете також передати `X-CSRF-TOKEN` в заголовку на боці сервера або включити токен у `data-data`.

8) Повідомлення та помилки

- При успіху JS показує `toastr[response.type || 'success'](response.message)`.
- При помилці AJAX показує `toastr.error()` з повідомленням з `xhr.responseJSON.message`.

9) Приклад повного потоку: кнопка + бекенд

Blade (кнопка видалення рядка):

```blade
<a href="{{ route('items.delete', $item->id) }}" class="btn btn-danger js-ajax-send"
   data-method="delete"
   data-confirm="Delete item?"
   data-fn-inits="initSortableY,initSelect2"
   data-data='{"keep_logs":1}'>Delete</a>
```

Server (Laravel controller) — приклад повернення JSON:

```php
return response()->json([
  'status' => 'success',
  'message' => 'Item deleted',
  'action' => 'remove',
  'selector' => '#item-'. $id
]);
```

10) Кастомні callback'и

- Ви можете визначити `window.onAjaxSuccess = function(response, $btn) { /* custom */ }` щоб централізовано опрацьовувати додаткову логіку при успішному AJAX.
- Також `window.onHtmlUpdated(html)` викликається, коли HTML був отриманий і вставлений — зручно для логування/статистики або додаткових ініціалізацій.

Коротке резюме рекомендацій
- Використовуйте `data-confirm` для важливих дій (видалення).
- Передавайте додаткові дані через `data-data` як JSON; перевіряйте коректність JSON.
- Якщо сервер робить редирект — поверніть `action: 'redirect'` з `redirect_url`.
- Для оновлень DOM повертайте `response.html` як об'єкт селектор->html або рядок для вставки у `.js-html-container`.
- Використовуйте `data-fn-inits` для забезпечення повторної ініціалізації віджетів після вставки HTML.

Other useful helpers (not specific to fields)

This section documents additional generic utilities and UI helpers defined in `public/main.js` that are handy across the admin UI.

1) `lteAlert(status, msg)` — unified toast helper

- Usage: call from other scripts to show a toastr notification. `status` is e.g. `success`, `info`, `warning`, `error`.

Example:

```js
lteAlert('success', 'Saved successfully');
```

2) Number & size formatters

- `numberWithSpaces(x)` — formats integer/float with thousands separators (space): 10000 -> "10 000".
- `humanFileSize(bytes, si = false, dp = 1)` — human-readable file sizes (supports SI and binary units): 2048 -> "2.0 KiB".

Examples:

```js
$('.js-num-format').each(function(){
  this.textContent = numberWithSpaces(parseFloat(this.textContent));
});

console.log(humanFileSize(3456789)); // "3.3 MiB" (by default binary units)
```

3) Sidebar & active-links helpers

- `setSidebarActiveable($nav, $item)` and `setActiveableUrl($wrap, $item, tag, activeClass)` are used to mark sidebar/menu items as active based on current URL or `data-pat` regex on links.
- You don't normally call these manually — they run on page load for elements with `.nav-sidebar.js-activeable` or `.js-activeable-url`.

4) `toggleSelectableBlocks(value, map)` — show/hide blocks by map

- Used by `select2` and `radiogroup` to show dependent blocks. `map` is an object { value => [selectors] }.
- Example usage is documented in the `select2`/`radiogroup` pages (see `map` section).

5) `initTooltip()` — initialize Bootstrap tooltips

- Called on load and after HTML updates. To mark element use `data-toggle="tooltip"`.

6) Sortables

- `initSortableY()` — initializes vertical jQuery UI sortable lists for `.sortable-y` elements. If the wrapper has `data-url`, the updated order will be POSTed as `{data: order}` to the server.
- `sortableNested` — used for nested sortable trees (`.js-sortable-nested`) and supports `onDrop` where the plugin serializes the nested order and optionally POSTs it to `data-url`.

Example: a table body with `class="sortable-y" data-url="/save/order"` will send new order after drag.

7) Preloader

- `#table-preloader` overlay is hidden during bootstrap by `$('#table-preloader').fadeOut(250)`; components can show/hide their own `.overlay` elements while AJAX is running.

8) Blurred/secret text toggles

- `.js-blur-text` toggles a temporary reveal of sensitive text (removes `.revealed` after 10s).
- `.js-secret-value-btn` toggles an input between `password` and original `data-origin-type`. Use in input groups to reveal/hide secret values.

9) File & Media helpers

- File delete in lists: `.f-file .f-file-item .js-btn-delete` or `.f-media-file .f-file-item .js-btn-delete` — marks file as deleted by setting a hidden input `.js-input-delete` and hides the row.
- File selection info: `.js-files-input` change handler writes file names & sizes (through `humanFileSize`) into `.js-files-info`.
- LFM helpers: `.f-lfm` has handlers to clear, delete, and add new LFM fields. Use `Lte3::lfmFile()` / `Lte3::lfmImage()` to render appropriate markup; the JS connects `.f-lfm` buttons to filemanager.

10) Dynamic multi-block handlers

- `.f-multyblocks` + template `.f-item-template` pattern:
  - Template contains field names with `$i` placeholder; the JS clones and replaces `$i` with current index, fixes ids and `data-field-name`, and re-initializes any embedded widgets by calling functions from `data-fn-inits` on the wrapper.
- Buttons: `.js-btn-add` and `.js-btn-delete` inside `.f-multyblocks` control items adding/removing.

Example template snippet (Blade):

```blade
<template class="f-item-template">
  {!! Lte3::text('block[items][$i][question]', null, ['label' => 'Question']) !!}
</template>
```

11) Input calculator

- Class `.js-input-calc` allows entering simple math expressions (e.g., `2+2*3`). On blur or Enter the expression is evaluated using `eval()` and the result is set back into the input. The input is sanitized to allow digits/operators only.

Caveat: `eval()` is used — ensure inputs are trusted or sanitized in your application context.

12) Password generator helpers

- `generateRandomPassword(length, complexity)` and `getRandomLength(min,max)` with button `.js-passgen` fill found input with a generated password. Use `data-length-from`, `data-length-to`, `data-complexity`, `data-input-recipient` to configure.

13) Table options & column reordering

- The script reads `.js-options-columns` and `data-options` to reorder `<th>` and corresponding `<td>` cells according to `weight` and `active` flags saved in options, hiding inactive columns.
- Use `Lte3::tableOptions()` to render the modal and the options structure (see docs/fields/tableOptions.md).

14) Global callbacks hooks

- `window.onAjaxSuccess(response, $btn)` — optional, called after successful `.js-ajax-send` response.
- `window.onHtmlUpdated(html)` — optional, called after HTML was inserted (useful to re-run custom initialization).

Where to find code

- Implementation lives in `vendor/fomvasss/laravel-lte3/public/main.js` — open it to view exact behavior or to extend it.

Testing & usage tips

- For dynamic content inserted by `.js-ajax-send`, always return `response.html` and/or use `data-fn-inits` to reinitialize widgets like Select2 and tooltips.
- For file upload flows, verify `js-form-submit-file-changed` is present on the form so uploading auto-submits.
- When using `.js-input-calc`, validate/sanitize values on server side as well.
