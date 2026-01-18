# Поле: range

Компонент: `lte3::components.range` (викликається через `Lte3::range()`)

Опис

HTML input type="range" з вбудованим `output`, відображенням поточного значення поруч та підтримкою `min`, `max`, `step`.

Props (з blade):
- `name` (string)
- `value` (numeric)
- `attrs` (array)
- `min`, `max`, `step` (numeric)
- `label`, `help`, `disabled`, `readonly`

Приклад (з examples):

```blade
{!! Lte3::range('age', 18, ['min' => 12, 'max' => 100, 'step' => 1]) !!}
```

Поради

- Вбудований `oninput` оновлює сусідній `<output>` для реального відображення значення.
