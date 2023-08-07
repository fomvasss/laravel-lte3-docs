# textarea

### Simple textarea

```
{!! Lte3::textarea('message', 'Hello World!', [
    'label' => 'Message',
    'rows' => 3,
]) !!}
```

### Summernote

```
{!! Lte3::textarea('message', 'Hello Summernote!', [
    'label' => 'Message',
    'class' => 'f-summernote',
]) !!}
```

or

```html
<label>Message</label>
<textarea class="f-summernote" rows="3">Hello Summernote!</textarea>
```

Visit <a href="https://github.com/summernote/summernote/" target="_blank">Summernote</a>
documentation for more examples and information about the plugin.

### Codemirror

```
{!! Lte3::textarea('message', 'Hello Codemirror!', [
    'label' => 'Message',
    'class' => 'f-codeMirror',
]) !!}
```

or

```html
<label>Message</label>
<textarea class="f-codeMirror" rows="3">Hello Codemirror!</textarea>
```

Visit <a href="https://codemirror.net/" target="_blank">CodeMirror</a> documentation for
more examples and information about the plugin.

### CKEditor 4

```
{!! Lte3::textarea('message', 'Hello CKE Mini!', [
    'label' => 'Message',
    'class' => 'f-cke-mini',
]) !!}
```

```
{!! Lte3::textarea('message', 'Hello CKE Small!', [
    'label' => 'Message',
    'class' => 'f-cke-small',
]) !!}
```

```
{!! Lte3::textarea('message', 'Hello CKE Full!', [
    'label' => 'Message',
    'class' => 'f-cke-full',
]) !!}
```

or

```html
<label for="">CKE Full</label>
<textarea class="form-control f-cke-full"></textarea>
```

Visit <a href="https://ckeditor.com/docs/ckeditor4/latest/index.html" target="_blank">CKEditor
4</a> documentation for more examples and information about the plugin.
