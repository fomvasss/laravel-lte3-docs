# Поле: links

Компонент: `lte3::components.links` (викликається через `Lte3::links()`)

Опис

Динамічний список пар (ключ => значення), використовується для збереження списку посилань або пар ключ-значення.

Props:
- `name` (string)
- `items` (array of arrays)
- `attrs` (array)
- `key_key` (string) — ключ для імені поля ключа (default: `key`)
- `key_value` (string) — ключ для імені поля значення (default: `value`)
- `placeholder_key`, `placeholder_value` (string)
- `label`, `help`

Приклад (з examples):

```blade
{!! Lte3::links('links', [['key' => 'liqpay', 'value' => 'LiqPay', 'safe' => 1], ['key' => 'paypal', 'value' => 'PayPal']], [
    'label' => 'Payment methods:',
    'field_name' => 'pay_methods',
    'key_key' => 'key',
    'key_value' => 'value',
    'placeholder_key' => 'Key',
    'placeholder_value' => 'Title',
]) !!}
```

Поради

- Кнопки додавання/видалення керуються через JS обробники у `public/main.js`.
