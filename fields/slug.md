# Поле: slug

Компонент: `lte3::components.slug` (викликається через `Lte3::slug()`)

Опис

Поле для slug з механізмом дозволу редагування: початково readonly, і чекбокс дозволяє переключити в editable режим.

Props:
- `name` (string)
- `value` (string)
- `attrs` (array)
- `label`, `help`
- `field_id_prefix`, `hidden_wrap`

Приклад (з examples):

```blade
{!! Lte3::slug('slug', 'qwerty', ['label' => 'Slug']) !!}
```

Поради

- JS ініціалізатор `initJsVerificationSlugField()` відповідає за переключення в/з readonly режиму в залежності від чекбоксу.
