# Компонент: form

Компонент: `lte3::components.form` (викликається через `Lte3::formOpen()` / `Lte3::formClose()`)

Опис

Генерує HTML-форму з CSRF, методом та опціями (files, class, style).  Хелпер `Lte3::formOpen()` створює початок форми, `Lte3::formClose()` — закриває її.

Props/attrs:
- `action` (string)
- `method` (string) — `POST`/`GET`/`PUT`/`PATCH`/`DELETE`
- `files` (bool) — встановлює `enctype="multipart/form-data"`
- `class`, `style`
- `data-*` — кастомні data-атрибути

Приклад:

```blade
{!! Lte3::formOpen(['action' => route('lte3.data.save'), 'model' => null, 'files' => true, 'method' => 'POST']) !!}
    {!! Lte3::text('firstname', 'Thomas') !!}
{!! Lte3::formClose() !!}
```

Поради

- Для полів файлів використовуйте форму з `files => true` та клас `js-form-submit-file-changed` для автосабміту при виборі файлу.
