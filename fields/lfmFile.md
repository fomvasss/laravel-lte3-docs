# Поле: lfmFile

Компонент: `lte3::components.lfmFile` (викликається через `Lte3::lfmFile()` / `Lte3::lfmImage()`)

Опис

Інпут для інтеграції з Laravel File Manager (LFM). Дозволяє вибирати файли через stand-alone filemanager (відкривається у вікні) та показувати превʼю (зображення або посилання).

Props:
- `name` (string)
- `path` (string|array)
- `attrs` (array)
- `lfm_category` (string) — за замовчуванням `file` або `image`
- `is_image` (bool)
- `multiple` (bool)
- `trim_host` (bool)

Приклади (з examples):

```blade
{!! Lte3::lfmFile('poster', '/vendor/lte3/img/favicons/favicon-32x32.png', [
    'is_image' => true,
    'lfm_category' => 'image',
]) !!}

{!! Lte3::lfmFile('instruction', null, [
      'label' => 'Instruction',
      'is_image' => false,
      'lfm_category' => 'file',
      'trim_host' => true,
      'multiple' => 1,
  ]) !!}
```

Поради

- Ініціалізація LFM відбувається у `options.blade.php` (function `initLfmBtn`). Переконайтеся, що `public/vendor/laravel-filemanager` опублікований.
