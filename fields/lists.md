# Поле: lists

Компонент: `lte3::components.lists` (викликається через `Lte3::lists()`)

Опис

Динамічний список текстових полів (масив) з підтримкою додавання/видалення елементів і сортування (drag & drop).

Props:
- `name` (string)
- `items` (array)
- `attrs` (array)
- `placeholder_value` (string)
- `label`, `help`

Приклад (з examples):

```blade
{!! Lte3::lists('countries', ['Ukraine', 'Poland', 'France', 'England', 'USA', 'Spanish'], [
    'label' => 'Countries:',
    'field_name' => 'countries',
    'placeholder_value' => 'Title',
]) !!}
```

Поради

- JS обробники `.js-btn-add` та `.js-btn-delete` керують динамічністю; сортування підтримується класом `sortable-y`.
