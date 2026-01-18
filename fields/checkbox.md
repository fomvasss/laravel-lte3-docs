# Поле: checkbox

Компонент: `lte3::components.checkbox` (викликається через `Lte3::checkbox()`)

Опис

Один чекбокс з підтримкою hidden-значення (unchecked), ajax-save, кастомних значень checked/unchecked і декоративних варіантів (`is_simple`, `class_control`).

Props:
- `name` (string)
- `value` (mixed)
- `attrs` (array)
- `checked_value` (mixed) — дефолт 1
- `unchecked_value` (mixed) — дефолт 0
- `raw_name` (string) — сире ім'я для AJAX-запитів
- `is_simple` (bool) — використовує прості стилі `form-check` замість `custom-control`
- `url_save` (string) — якщо вказано, додається клас `f-checkbox-ajax` і відбувається AJAX збереження (налаштовано у `public/main.js`)
- `method_save` (string)
- `label`, `help`, `disabled`, `readonly`

Приклади (з examples):

```blade
{!! Lte3::checkbox('publish', null, ['label' => 'Publish']) !!}

{!! Lte3::checkbox('allowed', 1, [
    'label' => 'Allowed',
    'url_save' => route('lte3.data.save'),
    'method_save' => 'POST',
]) !!}
```

Поради

- Для AJAX-збереження вказуйте `url_save` і (опціонально) `method_save` — JS обробляє подію change і відправляє запит.
