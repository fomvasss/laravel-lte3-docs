# Поле: select2

Компонент: `lte3::components.select2` (викликається через `Lte3::select2()`)

Опис

Select2 інтеграція з підтримкою autosave, tags, ajax suggest, multiple та кастомних параметрів.

Props (з blade):
- `name` (string)
- `selected` (mixed|array)
- `options` (array) — локальні опції
- `attrs` (array)
- `label` (string)
- `multiple` (bool)
- `empty_value` (string) — текст для пустого значення
- `url_save` (string) — URL для автозбереження (додає data-url-save)
- `url_suggest` / `url_tags` (string) — ajax-пошук / ajax-теги
- `max`, `separators`, `new_tag_label`
- `map` (array) — для відображення блоків залежно від вибору (data-map, використовується в JS)

JS-інтеграція

Ініціалізація через `initSelect2()` у `public/main.js`. Для autosave додавайте `data-url-save` і `data-name` (хелпер встановлює їх автоматично з attrs).

Приклади (з `examples/components.blade.php`):

```blade
{!! Lte3::select2('status', 'canceled', ['new' => 'New', 'canceled' => 'Canceled', 'delivered' => 'Delivered'], ['label' => 'Status']) !!}

{!! Lte3::select2('categories', 3, [3 => 'Sport'], [
    'label' => 'Categories',
    'multiple' => 1,
    'url_save' => route('lte3.data.save'),
    'url_suggest' => route('lte3.data.tags'),
]) !!}

{!! Lte3::select2('tags', '4', ['4' => 'Auto'], [
    'label' => 'Tags',
    'multiple' => 1,
    'url_tags' => route('lte3.data.tags'),
    'separators' => "[';']",
    'new_tag_label' => ' [NEW]',
    'max' => 4,
]) !!}
```

Map parameter — показ / приховування блоків по вибору

Компонент підтримує `map` — словник, де ключі відповідають значенням опцій, а значення — масив селекторів, які потрібно показати коли ця опція вибрана. Шаблон додає `data-map` у select (JSON) і клас `js-map-blocks`, а клієнтський JS (`initSelect2` / `toggleSelectableBlocks`) управляє видимістю блоків.

Приклад (з examples):

```blade
{!! Lte3::select2('driver', 'smtp', ['log' => 'Log', 'smtp' => 'SMTP', 'sendmail' => 'Mail'], [
    'label' => 'Mail Driver',
    'empty_value' => '--',
    'map' => [
        'smtp' => ['.block-smtp'],
        'log' => ['.block-log'],
        'sendmail' => ['.block-sendmail'],
    ],
    'help' => '* Change for show block'
]) !!}

<div class="block-smtp" style="display:none"><h2>SMTP Block</h2></div>
<div class="block-sendmail" style="display: none;"><h2>SENDMAIL Block</h2></div>
<div class="block-log" style="display: none;"><h2>LOG Block</h2></div>
```

Пояснення роботи

- Коли значення select змінюється, JS читає `data-map` і викликає `toggleSelectableBlocks`, яка ховає всі блоки, не пов'язані з поточним значенням, і показує ті, що відповідають ключу.
- `map` корисний для умовного відображення секцій форми в залежності від вибору (наприклад, показати додаткові налаштування для певного драйвера).

Поради

- Якщо опцій більше 6, компонент додає пошук; для ajax suggest використовуйте `url_suggest`.
- `data-fn-inits` у модальних викликах може містити `initSelect2` щоб ініціалізувати плагін після вставки HTML.
