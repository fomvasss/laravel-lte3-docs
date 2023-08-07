# select2

### Static:

```
{!! Lte3::select2('status', 'canceled', [
    'new' => 'New',
    'canceled' => 'Canceled',
    'delivered' => 'Delivered'
], [
    'label' => 'Status',
]) !!}
```

### Static with empty value:

```
{!! Lte3::select2('color', 'green', ['Green', 'Red', 'White'], [
    'label' => 'Color',
    'empty_value' => '--',
]) !!}
```

### With AJAX save

```
{!! Lte3::select2('tag', 'auto', ['auto' => 'Auto', 'news' => 'News'], [
    'label' => 'Tag',
    'url_save' => route('lte3.data.save'),
    'help' => '* AJAX save'
]) !!}
```

### With AJAX save & AJAX suggest

```
{!! Lte3::select2('categories', 3, [3 => 'Sport'], [
    'label' => 'Categories',
    'multiple' => 1,
    'url_save' => route('lte3.data.save'),
    'url_suggest' => route('lte3.data.tags'),
]) !!}
```

### For save/create tags

```
{!! Lte3::select2('domain', 'canceled', ['canceled' => 'Canceled'], [
    'label' => 'Domain',
    'multiple' => true,
    'max' => 1,
    'url_tags' => route('lte.data.tags'),
    'help' => '* Select one or create ;'
]) !!}
```

```
{!! Lte3::select2('tags', '4', ['4' => 'Auto'], [
    'label' => 'Tags',
    'multiple' => 1,
    'max' => 4,
    'url_tags' => route('lte3.data.tags'),
    'separators' => "[';']",
    'new_tag_label' => ' [NEW]',
    'help' => '* Enter new end ;'
]) !!}
```

### With show/hide blocks

```
{!! Lte3::select2('driver', 'smtp', ['log' => 'Log', 'smtp' => 'SMTP', 'sendmail' => 'Mail'], [
    'label' => 'Mail Driver',
    'empty_value' => '--',
    'map' => [
        'smtp' => ['.block-smtp'],
        'log' => ['.block-log'],
        'sendmail' => ['.block-sendmail'],
    ],
    'help' => '* Change for show block'
]) !!}

<div class="block-smtp" style="display:none"><h2>SMTP Block</h2></div>
<div class="block-sendmail" style="display: none;"><h2>SENDMAIL Block</h2></div>
<div class="block-log" style="display: none;"><h2>LOG Block</h2></div>
```
