# Поле: textarea

Компонент: `lte3::components.textarea` (викликається через `Lte3::textarea()`)

Опис

Багаторядкове текстове поле з підтримкою токенів, класів (для інтеграції з редакторами) і допоміжного тексту.

Props (з blade):
- `name` (string)
- `value` (string)
- `attrs` (array)
- `rows` (int)
- `label` (string)
- `class` (string) — CSS-клас для textarea (наприклад `f-tinymce`, `f-summernote`, `f-codeMirror`)
- `hidden_wrap`, `disabled`, `readonly`
- `tokens` (array)
- `help` (string)

Приклади (з `examples/components.blade.php`):

```blade
{!! Lte3::textarea('message', 'Hello World!', [
    'label' => 'Message',
    'rows' => 3,
]) !!}

{!! Lte3::textarea('message_tinymce', 'f-tinymce - add class to textarea', [
    'label' => 'Message',
    'class' => 'f-tinymce',
]) !!}
```

Поради

- Для підключення редакторів додавайте клас (наприклад `f-tinymce`, `f-summernote`, `f-codeMirror`).  Ініціалізації робляться в `options.blade.php`/`public/main.js`.
