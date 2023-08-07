# form

- formOpen
- formClose

```
{!! Lte3::formOpen([
    'action' => route('lte3.data.save'),
    'files' => true,
    'method' => 'POST',
    'class' => 'js-form-submit-file-changed',
    'style' => 'display: inline-flex',
]) !!}

{!! Lte3::formClose() !!}
```

### Example

```
{!! Lte3::formOpen([
    'action' => route('lte3.data.save'),
    'model' => null,
    'files' => true,
    'method' => 'POST'
]) !!}
    {!! Lte3::text('firstname', 'Thomas') !!}
{!! Lte3::formClose() !!}
```
