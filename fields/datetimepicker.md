# Поле: datetimepicker

Компонент: `lte3::components.datetimepicker` (викликається через `Lte3::datetimepicker()`)

Опис

Поле для вибору дати та часу з підтримкою форматів та timezone.

Props:
- `name` (string)
- `value` (DateTime|string)
- `attrs.format` (string) — приклад `Y-m-d H:i:s`
- `attrs.timezone` (string)
- `label`, `help`, `disabled`, `readonly`

Приклад:

```blade
{!! Lte3::datetimepicker('datetime', now(), [
    'label' => 'Datetime',
    'format' => 'Y-m-d H:i:s',
    'help' => 'Now datetime',
]) !!}
```

Поради

- Ініціалізація клієнтського datetimepicker здійснюється у `options.blade.php`.
