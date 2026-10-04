# Поле: mediaFile

Компонент: `lte3::components.mediaFile` (викликається через `Lte3::mediaFile()` / `Lte3::mediaImage()`)

Опис

Поле файлів [Spatie MediaLibrary](https://spatie.be/docs/laravel-medialibrary): зона перетягування, прев'ю обраних файлів ще до збереження, мініатюри картинок, видалення з відновленням, сортування перетягуванням, властивості файлу (alt, title…) у вікні. Зберігає [laravel-medialibrary-extension](https://github.com/fomvasss/laravel-medialibrary-extension) — `$model->mediaManage($request)` у контролері.

`Lte3::mediaImage()` — те саме з `is_image => true` і `accept => image/*`: картинки сіткою мініатюр замість списку.

Props:
- `name` (string) — ім'я поля і за замовчуванням колекції
- `model` (Eloquent model) — модель з `Spatie\MediaLibrary\HasMedia`; `null` — форма створення
- `collection` (string) — колекція, якщо відрізняється від `name`
- `multiple` (bool) — кілька файлів; без нього одиночне поле: новий файл замінює наявний
- `is_image` (bool) — сітка мініатюр
- `thumb_size` (int) — мінімальна ширина плитки сітки в px; за замовчуванням `lte3.view.media.thumb_size` (110). Мініатюра `imagepreset` генерується вдвічі більшою
- `accept` (string) — як у `<input type=file>`; під зоною виводиться людською мовою: `image/*,.pdf` → «Allowed: Images, PDF». Файли інших типів у поле не додаються (і при перетягуванні)
- `custom_properties` (array) — властивості файлу, див. нижче
- `format` (string) — `legacy` | `expand`, див. нижче. За замовчуванням `lte3.view.media.format` (`legacy`)
- `main` (bool) — зірочка «головний файл» (лише `expand` і `multiple`)
- `label`, `help`, `disabled`, `class`, `class_wrap`
- `name_deleted`, `name_weight`, `name_custom` — імена службових полів `legacy`

## Властивості файлу

`custom_properties` приймає формат [`Lte3::field`](field.md): список, `[назва => підпис]` або масиви з `type`:

```blade
'custom_properties' => ['alt', 'title'],
'custom_properties' => ['alt' => 'Alt text', 'title' => 'Title'],
'custom_properties' => [
    ['name' => 'alt', 'label' => 'Alt text'],
    ['name' => 'caption', 'label' => 'Caption', 'type' => 'textarea', 'rows' => 3],
],
```

На файлі з'являється кнопка ✏: вікно з прев'ю і полями (будь-який тип, який вміє `Lte3::field`). Значення пишуться в приховані поля рядка файлу й зберігаються разом з формою. Під назвою файлу видно першу заповнену властивість; на картинці без `alt` — мітка «No alt».

Властивості пишуться в `custom_properties` медіа (`$media->getCustomProperty('alt')`).

## Формат: legacy і expand

| | `legacy` (за замовчуванням) | `expand` |
|---|---|---|
| Поля форми | `name[]` / `name`, `name_deleted[]`, `name_weight[id]`, `name_custom[id][prop]` | рядок на файл: `name[N][id]` або `name[N][file]`, `[weight]`, `[delete]`, `[is_main]`, `[<властивість>]` |
| Порядок | збережених файлів; нові — в кінець | усіх, разом з новими |
| Властивості нового файлу | лише в одиночному полі (`name_custom[new][prop]`) | так |
| Головний файл (`main`) | — | так |
| Які властивості пишуться | будь-які | лише з `media-library-extension.expand.allowed_custom_properties` (поле попереджає про інші) |
| Вимоги | будь-яка версія medialibrary-extension | medialibrary-extension ≥ 6.4.1 (для колекції `files`) |

`legacy` — той самий контракт, що й у старого поля, тож оновлення пакета нічого не ламає. `expand` вмикається там, де потрібні властивості нових файлів або головний файл:

```blade
{!! Lte3::mediaFile('files', $model, [
    'multiple' => true,
    'format' => 'expand',
    'main' => true,
    'custom_properties' => ['alt', 'title'],
]) !!}
```

Для проєкту цілком — `config/lte3.php`:

```php
'view' => [
    'media' => [
        'format' => 'expand',
    ],
],
```

### Валідація в expand

Елемент `name.*` у `expand` — масив, а не файл. Правило `'files.*' => 'file|mimes:…'` відхилить усю форму. Файл рядка лежить у `name.*.file`; правило, що приймає обидва формати:

```php
use Illuminate\Validation\Rule;

'files' => 'nullable|array',
'files.*' => Rule::forEach(fn ($value) => is_array($value) ? ['array'] : ['file', 'max:51200', 'mimes:jpg,png,pdf']),
'files.*.file' => 'nullable|file|max:51200|mimes:jpg,png,pdf',
```

## Мініатюри

Резолвер прев'ю — `lte3.view.media.thumb` (`conversion` | `imagepreset` | callable `fn (Media $media, ?int $size): string`), див. [configuration](../configuration.md). З `conversion`, поки конверсію не згенеровано (черга), показується оригінал. З `imagepreset` розмір мініатюри — 2× `thumb_size`, тож її не треба вирівнювати з розміром плитки. З драйвером `imagepreset` (пакет `fomvasss/laravel-imagepresets`) розмір 100×100 має бути дозволений: увімкніть `imagepresets.trusted_bypass` (підписаний `_t`, HMAC з `APP_KEY`) або додайте `[100, 100]` в `allowed_sizes` — інакше мініатюри віддають 404.

## JS

Поведінка — `initMediaFile()` у `public/main.js`, стилі — `public/main.css`. Обробники делеговані, тож кліки працюють і в підвантаженій формі; сортування для форми в AJAX-модалці — `data-fn-inits="initMediaFile"`.

Кожен обраний файл переноситься у власний `<input type=file>` рядка (`DataTransfer`), форма відправляється звичайним submit — для поля потрібна `multipart/form-data` (`Lte3::formOpen(['files' => true])`).

## Переклади

Тексти англійською через `__()`. Для перекладу додайте ключі в `lang/<locale>.json` проєкту:

```json
{
    "Choose file": "Оберіть файл",
    "Choose files": "Оберіть файли",
    "or drag them here": "або перетягніть сюди",
    "Images only": "Лише зображення",
    "Allowed: :types": "Дозволено: :types",
    "Not allowed: :files.": "Не підходить: :files.",
    "Images": "Зображення",
    "Video": "Відео",
    "Audio": "Аудіо",
    "New": "Новий",
    "Remove": "Прибрати",
    "Delete": "Видалити",
    "Restore": "Відновити",
    "Replace": "Замінити",
    "Download": "Завантажити",
    "Edit": "Редагувати",
    "Main": "Головне",
    "Drag to reorder": "Перетягніть, щоб змінити порядок",
    "Will be deleted": "Буде видалено",
    "No alt": "Немає alt",
    "Cancel": "Скасувати",
    "Done": "Готово"
}
```

Підписи властивостей без `label` теж ідуть через `__()` (`Alt`, `Title`).

## Приклад (з examples)

```blade
{!! Lte3::formOpen(['action' => route('lte3.data.save'), 'files' => true]) !!}

{!! Lte3::mediaImage('images', $model, [
    'label' => 'Images',
    'multiple' => true,
    'custom_properties' => ['alt', 'title'],
]) !!}

{!! Lte3::mediaImage('image', $model, [
    'label' => 'Image',
    'custom_properties' => ['alt' => 'Alt text'],
]) !!}

{!! Lte3::mediaFile('files', $model, [
    'label' => 'Files (expand)',
    'multiple' => true,
    'format' => 'expand',
    'main' => true,
    'accept' => 'image/*,.pdf,.doc,.docx,.xlsx',
    'custom_properties' => [
        'title' => 'Title',
        ['name' => 'alt', 'label' => 'Description', 'type' => 'textarea', 'rows' => 2],
    ],
]) !!}

{!! Lte3::formClose() !!}
```

```php
public function update(Request $request, Article $article)
{
    // ...
    $article->mediaManage($request);
}
```

Поради

- Модель повинна імплементувати `Spatie\MediaLibrary\HasMedia` і мати колекцію в `$mediaMultipleCollections` / `$mediaSingleCollections` (medialibrary-extension), інакше `mediaManage()` її не обробить.
- Якщо асети lte3 скопійовані через `vendor:publish`, а не симлінком, після оновлення опублікуйте їх заново — новий шаблон потребує нових `main.js` і `main.css`.
