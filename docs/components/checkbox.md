# checkbox

### Static:

```
 {!! Lte3::checkbox('publish', null, ['label' => 'Publish']) !!}
```

### AJAX save:

```
{!! Lte3::checkbox('allowed', 1, [
    'label' => 'Allowed',
    'url_save' => route('lte3.data.save'),
    'method_save' => 'POST',
]) !!}
```

### Custom values:

```
{!! Lte3::checkbox('accept', 0, [
        'label' => 'Accept <a href="#">Terms</a>',
        'checked_value' => 2,
        'unchecked_value' => 0,
        'wrap_class' => 'custom-switch'
]) !!}
```
