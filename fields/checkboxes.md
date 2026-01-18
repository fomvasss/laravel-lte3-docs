# Поле: checkboxes

Компонент: `lte3::components.checkboxes` (викликається через `Lte3::checkboxes()`)

Опис

Група чекбоксів (масив значень) з опціями у вигляді простого масиву або масиву асоціативних елементів (детально див. шаблон).

Props:
- `name` (string)
- `selected` (array)
- `options` (array) — list of options; кожен елемент може бути string або array: `{id,label,disabled,readonly}`
- `attrs` (array)
  - `is_simple`, `field_id_prefix`, `url_save`, `method_save`
  - `help`, `label`

Приклад (з examples):

```blade
{!! Lte3::checkboxes('rd', ['morning', 'day'], [
    ['id' => 'night', 'name' => 'Night', 'disabled' => true],
    ['id' => 'morning', 'name' => 'Morning'],
    'day' => 'Day',
    'evening',
], [
    'help' => '* Some text',
    'label' => 'Time of day',
    'field_id_prefix' => 'qq',
]) !!}
```

Поради

- Для ajax-збереження опцій додайте `url_save` у attrs; для кожного чекбоксу може бути додатковий `data-...` атрибут.
