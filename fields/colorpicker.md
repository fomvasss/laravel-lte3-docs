# Поле: colorpicker

Компонент: `lte3::components.colorpicker` (викликається через `Lte3::colorpicker()`)

Опис

Колорпікер з підтримкою `transparent`, відображенням квадратика поточного кольору та можливістю autosave (через `data-url-save`).

Props:
- `name` (string)
- `value` (string) — колір у форматі `#RRGGBB` або `transparent`
- `attrs` (array)
- `label`, `help`
- `transparent` (bool)
- `url_save` (string)

Приклад:

```blade
{!! Lte3::colorpicker('colorpicker', null, ['label' => 'Color', 'default' => '#FFFFFF']) !!}

{!! Lte3::colorpicker('colorpicker2', null, ['label' => 'Color2', 'transparent' => true]) !!}
```

Поради

- JS обробник `initColorpicker()` обробляє подію `colorpickerChange` та може відправляти delay-таймаутом AJAX-запит на `url_save`.
