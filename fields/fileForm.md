# Поле: fileForm

Компонент: `lte3::components.fileForm` (викликається через `Lte3::fileForm()`)

Опис

Проста обгортка для завантаження файлу: створює форму із `input[type=file]` і дозволяє кастомізувати HTML-кнопку.

Props:
- `name` (string)
- `attrs` (array) — може містити `url_save`, `method`, `class`, `multiple`
- `label`, `html` — кастомний HTML (картинка/превʼю) для кнопки

Приклад (з examples):

```blade
{!! Lte3::fileForm('avatar', [
    'html' => '<div><a href="/vendor/lte3/img/favicons/apple-touch-icon.png" class="js-popup-image"><img src="/vendor/lte3/img/favicons/apple-touch-icon.png" style="width: 100px;"></a></div>',
    'url_save' => route('lte3.data.save'),
]) !!}
```

Поради

- Потрібно мати route/ендпоінт для збереження (`url_save`) якщо ви хочете робити миттєве завантаження.
