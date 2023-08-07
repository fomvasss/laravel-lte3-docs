# fileForm

```
{!! Lte3::fileForm('avatar', [
    'html' => '<div><a href="/icon.png" class="js-popup-image"><img src="/icon.png"></a></div>',
    'url_save' => route('lte3.data.save'),
]) !!}
```

```
{!! Lte3::formOpen(['action' => route('lte3.data.save'), 'files' => true]) !!}
```
