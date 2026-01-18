# Компонент: btnSubmit

Компонент: `lte3::components.btnSubmit` (викликається через `Lte3::btnSubmit()`)

Опис

Кнопка сабміту з підтримкою `before_title` / `after_title`, додаткового `add` атрибуту (наприклад `fixed`), і confirm-повідомлення.

Props:
- `title` (string)
- `name`, `value`
- `attrs.class`, `attrs.disabled`, `attrs.confirm`
- `attrs.before_title`, `attrs.after_title`, `attrs.add`

Приклад (з examples):

```blade
{!! Lte3::btnSubmit('Submit', 'action', 'save', ['add' => 'fixed']) !!}
```

Поради

- Якщо `attrs.add === 'fixed'`, кнопка також рендерить фіксовану кнопку з іконкою та текстом.
