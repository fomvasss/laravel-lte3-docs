# Поле: url

Компонент: `lte3::components.text` з `type="url"` (викликається через `Lte3::url()`)

Опис

Інпут для URL: `type="url"`, з іконкою посилання в `input-group-prepend` і можливістю відкривати поточне значення в новій вкладці.

Props / attrs
- `name` (string)
- `value` (string) — URL
- `label`, `help`, `placeholder`, `readonly`, `disabled`
- `prepend`, `append` — html вставки

Приклад (з `examples/components.blade.php`):

```blade
{!! Lte3::url('url', null, [
        'default' => 'https://stackoverflow.com/',
]) !!}
```

Поведінка шаблону

- Якщо `value` заданий, шаблон виводить іконку з посиланням на цей URL у `input-group-prepend`.

Поради

- Перевіряйте коректність URL на сервері; для UI зручності можна додати `pattern` чи `placeholder`.
