# Компонент: btnReset

Компонент: `lte3::components.btnReset` (викликається через `Lte3::btnReset()`)

Опис

Кнопка для скидання стану фільтрів/форм із можливістю вказати URL (що імітує reset) або зберегти деякі параметри в `ignores`.

Props:
- `url` (string) — куди вести при натисканні
- `attrs.ignores` (array) — список параметрів, які залишаються у URL
- `attrs.class`, `attrs.disabled`, `attrs.confirm`

Приклад:

```blade
{!! Lte3::btnReset('Reset', ['url' => '']) !!}
```

Поради

- Якщо `disabled` — кнопка відрендериться без хрефу.
