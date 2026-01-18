# Хелпер: Lte3::field

Опис

`Lte3::field()` — універсальний хелпер для побудови полів через асоціативний масив конфігурації. Він дозволяє створювати будь-які поля (`text`, `select2`, `checkboxes`, `file` тощо) в єдиному форматі, передаючи `type` та інші параметри.

Контракт (поширені ключі)

- `type` (string) — тип поля ('text', 'select2', 'checkboxes', 'textarea', ...)
- `name` (string) — ім'я поля
- `value` — початкове значення
- `label` (string) — підпис/лейбл
- `class` (string) — css-класи для input
- `class_wrap` (string) — css-клас обгортки
- `data` (array) — довільні data-* атрибути; будуть додані як `data-key="value"`
- `attrs` (array) — додаткові HTML-атрибути для input/select (альтернатива `data`)
- `options` (array) — список опцій для select/checkboxes/radiogroup (може бути асоціативним або масивом асоціативних записів)
- `multiple` (bool) — для select/lfm/media поля
- `selected` — вибране значення/масив для multiple
- `help` (string) — допоміжний текст під полем
- `hidden_wrap`, `disabled`, `readonly` — поведінкові прапорці

Приклади (витягнуто з `examples/components.blade.php` / скомпільованих view):

- Text field

```blade
{!! Lte3::field([
    'type' => 'text',
    'name' => 'nickname',
    'value' => 'Nik',
    'label' => 'Nickname',
    'class' => 'some-class',
    'data' => ['rr' => 'qq'],
]) !!}
```

- Select2 (multiple) — приклад вбудованого `options` та `multiple`

```blade
{!! Lte3::field([
    'type' => 'select2',
    'name' => 'rd2',
    'multiple' => true,
    'selected' => 'male',
    'label' => 'Time of day',
    'data' => ['tt' => 'yy'],
    'options' => [
        ['id' => 'night', 'name' => 'Night'],
        ['id' => 'morning', 'name' => 'Morning'],
        'day' => 'Day',
        'evening',
    ],
]) !!}
```

- Checkboxes (multiple options)

```blade
{!! Lte3::field([
    'type' => 'checkboxes',
    'name' => 'rd',
    'label' => 'Time of day',
    'selected' => ['morning', 'day'],
    'help' => '* Some help text',
    'options' => [
        ['id' => 'night', 'name' => 'Night'],
        ['id' => 'morning', 'name' => 'Morning'],
        'day' => 'Day',
        'evening',
    ],
]) !!}
```

Пояснення

- `Lte3::field` зручно використовувати коли поля генеруються програмно або коли потрібно мати єдиний підхід для конфігурування різних типів полів.
- Ключ `options` допускає як прості списки (`['a','b']`) так і масиви з метаданими (`['id' => 'night', 'name' => 'Night']`).
- `data` — простий спосіб передати будь-які data-* атрибути, які будуть перетворені на `data-key="value"`.

Map support via `Lte3::field`

`Lte3::field` також підтримує передачу `map` для тих `type`, які його підтримують (наприклад `select2` або `radiogroup`). Додайте ключ `map` у attrs або в корінь масиву, і він буде переданий в компонент як `data-map`.

Приклад (select2 через field з map):

```blade
{!! Lte3::field([
    'type' => 'select2',
    'name' => 'driver',
    'value' => 'smtp',
    'options' => ['log' => 'Log', 'smtp' => 'SMTP', 'sendmail' => 'Mail'],
    'map' => [
        'smtp' => ['.block-smtp'],
        'log' => ['.block-log'],
        'sendmail' => ['.block-sendmail'],
    ],
    'label' => 'Mail Driver'
]) !!}

<div class="block-smtp" style="display:none">SMTP block</div>
<div class="block-log" style="display:none">Log block</div>
```

Пояснення

- Той же синтаксис можна застосувати для `radiogroup` через `Lte3::field(['type' => 'radiogroup', ...])` — `map` буде коректно передане та оброблене JS (виклик `toggleSelectableBlocks`).

Додатково

Якщо потрібно — можна комбінувати `Lte3::field` з `Lte3::formOpen()` / `Lte3::formClose()` для створення повних форм. `Lte3::field` рендерить відповідні internal-компоненти (наприклад `select2`, `checkboxes`) згідно `type`.
