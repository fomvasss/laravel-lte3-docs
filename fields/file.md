# Поле: file

Компонент: `lte3::components.file` (викликається через `Lte3::file()`)

Опис

Файл-інпут з переліком поточних шляхів, підтримкою multiple, видаленням та ваговим порядком для сортування.

Props:
- `name` (string)
- `path` (string|array) — існуючі шляхи/файли
- `attrs` (array)
- `multiple` (bool)
- `label`, `help`
- `name_deleted`, `name_weight` — кастомні імена полів для видалення/ваги

Приклад (з examples):

```blade
{!! Lte3::file('document', '/vendor/lte3/img/favicons/favicon-32x32.png', [
    'label' => 'Document',
    'help' => 'Single File',
]) !!}

{!! Lte3::file('varfavicons', [
    '/vendor/lte3/img/favicons/android-chrome-512x512.png',
    '/vendor/lte3/img/favicons/android-chrome-192x192.png',
], ['label' => '']) !!}
```

Поради

- JS логіка для сортування та видалення реалізована у `public/main.js` (ініціалізація `initSortableY`, обробники `js-btn-delete`).
- Для автоматичної відправки при виборі файлу використовуйте wrapping form з `js-form-submit-file-changed`.
