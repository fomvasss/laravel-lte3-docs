# Поле: select2Tree

Компонент: `lte3::components.select2Tree` (викликається через `Lte3::select2Tree()`)

Опис

Select2-to-tree інтеграція: відображає дерево у вигляді select з підтримкою multiple і ajax-завантаженням дерева.

Props:
- `name` (string)
- `attrs.url_tree` (string)
- `attrs.method_get` (string)
- `attrs.multiple` (bool)
- `attrs.expand_all` (bool)
- `label`, `help`

Приклад:

```blade
{!! Lte3::select2Tree('category_id', [
    'label' => 'Tree Categories',
    'multiple' => 1,
    'required' => 1,
    'help' => '* Some text',
    'method_get' => 'POST',
    'expand_all' => true,
    'url_tree' => route('lte3.data.treeselect', ['vocabulary' => 'products', 'selected' => [1,3]]),
]) !!}
```

Поради

- JS-логіка в `initSelect2Tree()` викликає ajax і ініціалізує tree-select плагін.
