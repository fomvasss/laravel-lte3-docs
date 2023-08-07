# text

```
{!! Lte3::text('firstname', 'Thomas') !!}
```

```
{!! Lte3::text('lastname', 'Mann', [
    'readonly' => 1,
]) !!}
```

```
{!! Lte3::text('email', 'f@app.com', [
    'type' => 'email',
    'max' => '30',
    'label' => 'Your Email',
    'help' => '* Enter Email',
    'prepend' => '<i class="fas fa-envelope"></i>',
    'append' => '<i class="fas fa-check"></i>',
    'checkbox' => ['name' => 'verify', 'title' => 'Verify', 'value' => 0, 'readonly' => 1,]
]) !!}
```

```
{!! Lte3::text('Password', null, ['type' => 'password']) !!}
```

```
{!! Lte3::text('url', null, [
        'type' => 'url',
]) !!}
```
