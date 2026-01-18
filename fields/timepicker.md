# Поле: timepicker

Компонент: `lte3::components.timepicker` (викликається через `Lte3::timepicker()`)

Опис

Поле для вибору часу. Підтримує формат і timezone через `attrs`.

Props:
- `name` (string)
- `value` (DateTime|string)
- `attrs.format` (string) — наприклад `H:i:s`
- `attrs.timezone` (string)
- `label`, `help`, `disabled`, `readonly`

Приклад:

```blade
{!! Lte3::timepicker('time', now(), [
    'label' => 'Time',
    'format' => 'H:i:s',
]) !!}
```

Поради

- Ініціалізація на клієнті через `initDatetimepicker()`; використовує `xdsoft` datetimepicker.
