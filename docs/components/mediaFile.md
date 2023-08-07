# mediaFile

#### Single file

```
{!! Lte3::mediaFile('image', $modelHasMedia, [
    'label' => 'Image',
    'is_image' => true,
]) !!}

```

#### Multiple files

```
{!! Lte3::mediaFile('images', $modelHasMedia, [
    'label' => 'Images',
    'multiple' => true,
    'is_image' => true,
]) !!}
```

Visit <a href="https://github.com/fomvasss/laravel-medialibrary-extension"
                                 target="_blank"> documentation</a> for more examples and information about the
plugin.
