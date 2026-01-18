# Поле: datepicker

Компонент: `lte3::components.datepicker` (викликається через `Lte3::datepicker()`)

Опис

Поле для вибору дати. Підтримує форматування DateTime-об'єктів і встановлення timezone/format у `attrs`.

Props:
- `name` (string)
- `value` (DateTime|string)
- `attrs.format` (string) — формат виводу (наприклад `Y-m-d`)
- `attrs.timezone` (string)
- `label`, `help`, `disabled`, `readonly`

Приклад (з examples):

```blade
{!! Lte3::datepicker('date', now(), [
    'label' => 'Date',
    'format' => 'Y-m-d',
]) !!}
```

Поради

- Ініціалізація клієнтського datetimepicker виконується в `options.blade.php` (функція `initDatetimepicker()`).
- Для timepicker/datetimepicker див. відповідні поля.
