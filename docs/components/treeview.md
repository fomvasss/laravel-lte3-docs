# treeview

```
{!! Lte3::treeview('models', [
    'label' => 'Ajax data',
    'method_get' => 'GET',
    'url_tree' => route('lte3.data.treeview', ['selected' => [2,4]]),
]) !!}
```

```
{!! Lte3::treeview('models', [
    'label' => 'Static data',
    'data' => $treeviewArray,
]) !!}
```

Visit <a href="https://github.com/fomvasss/laravel-simple-taxonomy" target="_blank">documentation</a>
for more examples and information about the plugin.
