# Поле: lfmFile

Компонент: `lte3::components.lfmFile` (викликається через `Lte3::lfmFile()` / `Lte3::lfmImage()`)

Опис

Поле файлу [Laravel File Manager](https://unisharp.github.io/laravel-filemanager/) (LFM): значення — рядок з URL файлу. Порожнє поле — зона «Choose file / or drag it here»: клік відкриває File Manager у модалці, перетягнутий з комп'ютера файл заливається в File Manager і його URL стає значенням. Обраний файл — картка: картинка плиткою з мініатюрою, документ рядком з іконкою типу; кнопки «Replace», «Open», «Clear».

`Lte3::lfmImage()` — те саме з `lfm_category => image` і `is_image => 1`.

Один файл. Режим `multiple` (кілька шляхів) прибрано в 1.122: якщо передати масив, береться перший.

Props:
- `name` (string)
- `path` (string|null) — URL файлу. `null` — значення береться з `old()` чи моделі форми (`Lte3::formOpen(['model' => ...])`), як у `text` та інших полів
- `label`, `help`, `disabled`, `class`, `class_wrap`, `hidden_wrap`
- `lfm_category` (string) — категорія LFM (`config/lfm.php` → `folder_categories`), за замовчуванням `image` для `is_image`, інакше `file`
- `is_image` (bool) — плитка з мініатюрою; перетягнути можна лише картинку
- `thumb_size` (int) — ширина плитки в px, за замовчуванням `lte3.view.media.thumb_size` (110)
- `trim_host` (bool) — зберігати URL без домену (`/storage/...`)
- `url_save` (string) — AJAX-збереження одразу після вибору чи очищення: `POST {name, value}`
- `editable` (bool) — під полем звичайний інпут для ручного URL (зовнішнє посилання); `placeholder` — для нього
- `lfm_prefix` (string) — префікс маршрутів LFM, за замовчуванням `/filemanager`
- `lfm_folder` (string) — тека для перетягнутих файлів (`working_dir` LFM), за замовчуванням корінь категорії

## File Manager у модалці

Модалка з iframe `{lfm_prefix}?type={lfm_category}&callback=lteLfmPicked`; LFM викликає `parent.lteLfmPicked(items)`, поле бере `items[0].url`. Потрібен LFM 2.x з підтримкою `callback` і `public/vendor/laravel-filemanager`.

## Перетягування

Файл відправляється на `{lfm_prefix}/upload` (`upload`, `type`, `working_dir`, CSRF з `<meta name="csrf-token">`), відповідь LFM `{url}` стає значенням поля, помилка `{error: {message}}` — під зоною.

## Мініатюра

`lte3.view.lfm.thumb`:
- `null` — сама картинка за URL (повний розмір);
- `'imagepreset'` — як `lte3.view.media.thumb` (пакет `fomvasss/laravel-imagepresets`, розмір 2× `thumb_size`; увімкніть `imagepresets.trusted_bypass`);
- клас з `__invoke(string $url, ?int $size): string`. Не замикання — `config:cache` їх не серіалізує.

Одразу після вибору у File Manager плитка показує мініатюру LFM (`thumb_url`).

## JS

Поведінка — `public/main.js` (делеговані обробники, працюють і в блоках, доданих динамічно); `initLfmFile()` — для `data-fn-inits` за аналогією з іншими полями. Стилі — `public/main.css`, спільні з полем `mediaFile`.

`stand-alone-button.js` і `initLfmBtn()` з `options.blade.php` лишаються для копій layout у проєктах; новим полем вони не використовуються.

## Переклади

```json
{
    "Choose image": "Оберіть зображення",
    "Choose file": "Оберіть файл",
    "or drag it here": "або перетягніть сюди",
    "Replace": "Замінити",
    "Open": "Відкрити",
    "Clear": "Очистити",
    "File manager": "Файловий менеджер",
    "Uploading…": "Завантаження…",
    "Upload failed": "Не вдалося завантажити",
    "Images only": "Лише зображення"
}
```

## Приклади (з examples)

```blade
{!! Lte3::lfmImage('poster', $model->poster ?? null, [
    'label' => 'Poster',
    'thumb_size' => 150,
]) !!}

{!! Lte3::lfmImage('poster_ajax', null, [
    'label' => 'Poster (AJAX save)',
    'url_save' => route('lte3.data.save'),
]) !!}

{!! Lte3::lfmFile('instruction', null, [
    'label' => 'Instruction',
    'lfm_category' => 'file',
    'trim_host' => true,
]) !!}

{!! Lte3::lfmFile('instruction_url', null, [
    'label' => 'Instruction (URL)',
    'editable' => true,
    'placeholder' => 'https://…',
]) !!}
```
