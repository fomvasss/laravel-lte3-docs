# Поле: text

Компонент: `lte3::components.text` (викликається через `Lte3::text()` / `Lte3::password()` / `Lte3::number()` у хелпері)

Опис

Універсальний інпут для текстових значень. Використовується також як основа для полів типів `number`, `email`, `url`, `password` шляхом установки `type` у attrs/config.

Props (витягнуто з `resources/views/vendor/lte3/components/text.blade.php`):
- `name` (string) — ім'я поля (обов'язково)
- `value` (mixed) — значення поля
- `attrs` (array) — додаткові атрибути; зокрема використовуються ключі з `field_attrs`
- `attrs.type` (string) — тип інпуту (`text`, `password`, `email`, `url`, `number`)
- `default` — значення за замовчуванням (передається у виклик хелпера)
- `prepend` / `append` (string|array) — вставки перед/після інпута (HTML)
- `secret` (bool) — приховати значення (перетворить у password + додасть кнопку-показ)
- `checkbox` (array) — опціональний чекбокс у гріді (`name`, `title`, `value`, `readonly`, `disabled`)
- `hidden_wrap` (bool) — приховати wrapper
- `help` (string) — допоміжний текст
- `tokens` (array) — список замінників для dropdown копіювання

Приклади використання (з `resources/views/admin/examples/components.blade.php`):

```blade
{!! Lte3::text('firstname', 'Thomas') !!}

{!! Lte3::text('lastname', 'Mann', ['readonly' => 1]) !!}

{!! Lte3::text('default', null, [
    'default' => 'Default value',
    'append' => ['<i class="fas fa-fingerprint"></i>', '<a href="#"><i class="fas fa-qrcode"></i></a>']
]) !!}
```

Поради

- Для полів типу `password` значення у шаблоні обрізається (поле порожнє за замовчуванням) й додається плейсхолдер.
- Додаткові HTML-атрибути передаються через `attrs` (наприклад `attrs => ['placeholder' => '...']`).

NOTE: Типи й значення інферовані з шаблону — при потребі додаткових валідацій в документації додайте приклади `rules` у контролері.
