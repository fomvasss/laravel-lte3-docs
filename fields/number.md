# Поле: number

Компонент: `lte3::components.text` з `type="number"` (викликається через `Lte3::number()`)

Опис

Інпут для числових значень. Вбудований у `text` шаблон, але за замовчуванням встановлює `type="number"` та може мати `min`, `max`, `step`.

Props / attrs
- `name` (string)
- `value` (number)
- `default` (number) — значення за замовчуванням при рендерингу
- `min`, `max`, `step` — HTML-атрибути контролю числа
- `label`, `help`, `class`, `class_wrap`, `hidden_wrap`, `readonly`, `disabled`
- `attrs` (array) — додаткові полi, будуть додані до input

Приклад (з `examples/components.blade.php`):

```blade
{!! Lte3::number('Age', null, ['default' => 18, 'max' => '100', 'min' => 1]) !!}
```

Поради

- Використовуйте `min` / `max` / `step` для клієнтської підказки; додаткову валідацію робіть на сервері.
- Значення форматується/виводиться як звичайний number input, але можна застосувати JS-форматери для відображення в інших місцях.
