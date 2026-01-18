# Поле: search

Компонент: `lte3::components.text` з `type="search"` (викликається через `Lte3::search()`)

Опис

Поле пошуку — звичний `input type="search"` з можливістю додавання вбудованих елементів `prepend`/`append` і автозаповнення. Використовується як спеціалізований текстовий інпут.

Props/attrs
- `name`, `value`, `label`, `help`
- `placeholder`, `required`, `readonly`, `disabled`
- `attrs` (array) — додаткові атрибути

Приклад (з `examples/components.blade.php`):

```blade
{!! Lte3::search('q', null, ['placeholder' => 'Search...']) !!}
```

Поради

- Часто комбінується з Select2/AJAX або іншими UI для показу результатів; в JS можна підписатися на `input` події для live-search.
