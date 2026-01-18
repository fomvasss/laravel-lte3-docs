# Поле: email

Компонент: `lte3::components.text` з `type="email"` (викликається через `Lte3::email()`)

Опис

Email input: стандартний HTML5 `type="email"` з додатковими можливостями (prepend/append, help, checkbox в input-group).

Props / attrs
- `name` (string)
- `value` (string)
- `label`, `help`, `prepend`, `append`
- `placeholder`, `required`, `readonly`, `disabled`
- `checkbox` — параметр для відображення чекбоксу в input-group (масив з `name`, `title`, `value`, `readonly`, `disabled`)

Приклад (з `examples/components.blade.php`):

```blade
{!! Lte3::email('email', 'fom@app.com', [
    'label' => 'Your Email',
    'help' => '* Enter Email',
    'prepend' => '<i class="fas fa-envelope"></i>',
    'append' => '<i class="fas fa-check"></i>',
    'checkbox' => ['name' => 'verify', 'title' => 'Verify', 'value' => 0, 'readonly' => 1,]
]) !!}
```

Поради

- Для додаткової валідації застосуйте `pattern` або серверні правила `email` у контроллері.
