# Компонент: treeview

Компонент: `lte3::components.treeview` (викликається через `Lte3::treeview()`)

Опис

Bootstrap treeview інтеграція для відображення дерева з чекбоксами або без, з можливістю отримувати checked ids у приховані інпути.

Props:
- `name` (string)
- `attrs.url_tree` (string) — URL для отримання даних (ajax)
- `attrs.data` (array) — статичні дані дерева
- `attrs.method_get` (string)
- `attrs.showCheckbox`, `attrs.showIcon`
- `label`, `help`

Приклади (з examples):

```blade
{!! Lte3::treeview('models', [
    'label' => 'Ajax data',
    'method_get' => 'GET',
    'url_tree' => route('lte3.data.treeview', ['selected' => [2,4]]),
]) !!}

{!! Lte3::treeview('models', [
    'label' => 'Static data',
    'data' => $treeviewArray,
]) !!}
```

Поради

- Ініціалізація на стороні клієнта через `initTreeview()` (public/main.js).
