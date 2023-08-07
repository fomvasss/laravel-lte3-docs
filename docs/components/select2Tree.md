# select2Tree

```
 {!! Lte3::select2Tree('category_id', [
    'label' => 'Tree Categories',
    'multiple' => 1,
    'required' => 1,
    'help' => '* Some text',
    'method_get' => 'POST',
    'url_tree' => route('lte3.data.treeselect', ['vocabulary' => 'products', 'selected' => [1,3]]),
]) !!}
```
