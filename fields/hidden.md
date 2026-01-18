# Поле: hidden

Компонент: `lte3::components.hidden` (викликається через `Lte3::hidden()`)

Опис

Прихований інпут. Може показувати опціональний label/пояснення поруч у формі.

Props:
- `name` (string)
- `value` (mixed)
- `attrs` (array)
- `label` (string) — може відобразитися над hidden полем

Приклад:

```blade
{!! Lte3::hidden('__tmp', '666', ['label' => 'Hidden field']) !!}
```

Поради

- Використовується для передачі служби/ключів (наприклад `_modal`).
