# Поле: xEditable

Компонент: `lte3::components.xEditable` (викликається через `Lte3::xEditable()`)

Опис

Інлайновий редагований компонент, що використовує x-editable бібліотеку для редагування полів на місці з ajax-підтримкою.

Props (з blade):
- `name` (string) — ім'я поля
- `value` (mixed)
- `attrs` (array)
- `data-type` / `type` — тип поля (`text`, `textarea`, `select`)
- `data-name` — ім'я поля
- `data-url` / `url_save` — URL для збереження
- `data-source` / `source` — масив опцій для select
- `pk` — primary key
- `disabled` / `readonly`

Приклад (з examples):

```blade
{!! Lte3::xEditable('name', 'Space Odyssey 2001', [
    'type' => 'text',
    'pk' => 1,
    'url_save' => route('lte3.data.save'),
]) !!}
```
