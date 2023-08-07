# xEditable

### Text:

```
{!! Lte3::xEditable('name', 'Space Odyssey 2001', [
    'type' => 'text',
    'pk' => 1,
    'url_save' => route('lte3.data.save'),
]) !!}
```

### Textarea:

```
{!! Lte3::xEditable('comment', 'Interstellar', [
    'type' => 'textarea',
    'field_name' => 'data[comment]',
    'pk' => 2,
    'url_save' => route('lte3.data.save'),
]) !!}
```

### Showed:

```
{!! Lte3::xEditable('visible', 0, [
    'value_title' => 'Hide',
    'type' => 'select',
    'field_name' => 'data[is_show]',
    'source' => [["value" => "1", "text" => "Show"], ["value" => "0", "text" => "Hide"]],
    'pk' => 3,
    'url_save' => route('lte3.data.save'),
]) !!}
```
