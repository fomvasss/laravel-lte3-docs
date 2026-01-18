# Компонент: nestedset

Компонент: `lte3::components.nestedset` (викликається через `Lte3::nestedset()`)

Опис

Інтерфейс для відображення та сортування вкладених наборів (nested sets), з підтримкою маршрутів для CRUD операцій та order.

Props:
- `terms` (collection)
- `attrs.routes` — масив маршрутів (`edit`, `create`, `delete`, `order`, `show`)
- `label`, `has_nested`, `root_btn_create`

Приклад (з examples):

```blade
@isset($terms)
    {!! Lte3::nestedset($terms, [
            'label' => 'Models',
            'has_nested' => true,
            'routes' => [
                'edit' => 'lte3.data.save',
                'create' => 'lte3.data.save',
                'delete' => 'lte3.data.save',
                'order' => 'lte3.data.save',
                'show' => 'lte3.data.save',
                'params' => [],
            ],
    ]) !!}
@endisset
```

Поради

- Для сортування використовується JS-плагін sortableNested (ініціалізований у public/main.js).
