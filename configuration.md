# Конфігурація (config/lte3.php)

Файл конфігурації: `config/lte3.php`

Опис: містить налаштування view, компоненти за замовчуванням, middleware, ключі для modal/pagination та інші опції.

Поля (витягнуто з файлу):

- `logo` (string) — HTML рядок логотипу. Default: `<b>Admin</b>LTE`
- `dashboard_slug` (string) — slug сторінки dashboard. Default: `lte3`
- `routes` (bool) — вмикати маршрути пакету. Default: `true`
- `middleware` (array) — middleware для групи web, за замовчуванням включає `LteRequestOptions` middleware

View (array):
- `dark_mode` (bool) — темна тема. Default: `false`
- `preloader` (bool) — показувати прелоадер. Default: `false`
- `alerts` (array) — перелік типів alert'ів (наприклад `toastr`).
- `sidebar.search` (bool) — показувати пошук у сайдбарі. Default: `true`
- `sidebar.auth` (bool) — показувати auth-блок у сайдбарі. Default: `false`

Components (array):

Надається великий перелік компонентів з їх Blade-шляхами, параметрами (vars) та опціями за замовчуванням (default). Повний перелік взято з `config/lte3.php`:

- `form` — blade: `lte3::components.form`
  - vars: (none — це оболонка форми)
  - default: `['files' => true]`

- `btnSubmit` — blade: `lte3::components.btnSubmit`
  - vars: `['title','name','value','attrs']`
  - default: none

- `btnReset` — blade: `lte3::components.btnReset`
  - vars: `['title','attrs']`
  - default: none

- `btnModalClose` — blade: `lte3::components.btnModalClose`
  - vars: `['title','attrs']`
  - default: none

- `hidden` — blade: `lte3::components.hidden`
  - vars: `['name','value','attrs']`
  - default: none

- `text` — blade: `lte3::components.text`
  - vars: `['name','value','attrs']`
  - default: `['type' => 'text']`

- `number` — blade: `lte3::components.text` (реалізовано через текстовий шаблон)
  - vars: `['name','value','attrs']`
  - default: `['type' => 'number', 'default' => 0]`

- `email` — blade: `lte3::components.text`
  - vars: `['name','value','attrs']`
  - default: `['type' => 'email']`

- `url` — blade: `lte3::components.text`
  - vars: `['name','value','attrs']`
  - default: `['type' => 'url']`

- `search` — blade: `lte3::components.text`
  - vars: `['name','value','attrs']`
  - default: `['type' => 'search']`

- `secret` — blade: `lte3::components.text`
  - vars: `['name','value','attrs']`
  - default: `['type' => 'text','secret' => true]` (режим прихованого значення)

- `password` — blade: `lte3::components.text`
  - vars: `['name','value','attrs']`
  - default: `['type' => 'password']`

- `slug` — blade: `lte3::components.slug`
  - vars: `['name','value','attrs']`
  - default: none

- `textarea` — blade: `lte3::components.textarea`
  - vars: `['name','value','attrs']`
  - default: none

- `checkbox` — blade: `lte3::components.checkbox`
  - vars: `['name','value','attrs']`
  - default: none

- `checkboxes` — blade: `lte3::components.checkboxes`
  - vars: `['name','selected','options','attrs']`
  - default: none

- `radiogroup` — blade: `lte3::components.radiogroup`
  - vars: `['name','selected','options','attrs']`
  - default: none

- `links` — blade: `lte3::components.links`
  - vars: `['name','items','attrs']`
  - default: none

- `lists` — blade: `lte3::components.lists`
  - vars: `['name','items','attrs']`
  - default: none

- `colorpicker` — blade: `lte3::components.colorpicker`
  - vars: `['name','value','attrs']`
  - default: none

- `select2` — blade: `lte3::components.select2`
  - vars: `['name','selected','options','attrs']`
  - default: none

- `range` — blade: `lte3::components.range`
  - vars: `['name','value','attrs']`
  - default: none

- `select2Tree` — blade: `lte3::components.select2Tree`
  - vars: `['name','attrs']`
  - default: none

- `treeview` — blade: `lte3::components.treeview`
  - vars: `['name','attrs']`
  - default: none

- `nestedset` — blade: `lte3::components.nestedset.tree`
  - vars: `['terms','attrs']`
  - default: `['item' => 'lte3::components.nestedset.item']` (шаблон для елемента)

- `xEditable` — blade: `lte3::components.xEditable`
  - vars: `['name','value','attrs']`
  - default: none

- `datepicker` — blade: `lte3::components.datepicker`
  - vars: `['name','value','attrs']`
  - default: `['default' => now()->startOfDay()]`

- `timepicker` — blade: `lte3::components.timepicker`
  - vars: `['name','value','attrs']`
  - default: `['timezone' => env('APP_TIMEZONE_CLIENT', 'Europe/Kiev'), 'default' => now()->startOfHour()]`

- `datetimepicker` — blade: `lte3::components.datetimepicker`
  - vars: `['name','value','attrs']`
  - default: `['timezone' => env('APP_TIMEZONE_CLIENT', 'Europe/Kiev'), 'default' => now()->startOfHour()]`

- `file` — blade: `lte3::components.file`
  - vars: `['name','path','attrs']`
  - default: none

- `fileForm` — blade: `lte3::components.fileForm`
  - vars: `['name','attrs']`
  - default: none

- `lfmFile` — blade: `lte3::components.lfmFile`
  - vars: `['name','path','attrs']`
  - default: none

- `lfmImage` — blade: `lte3::components.lfmFile` (спеціалізація для image)
  - vars: `['name','path','attrs']`
  - default: `['lfm_category' => 'image', 'is_image' => 1]`

- `mediaFile` — blade: `lte3::components.mediaFile`
  - vars: `['name','model','attrs']`
  - default: none

- `mediaImage` — blade: `lte3::components.mediaFile` (спеціалізація для image)
  - vars: `['name','model','attrs']`
  - default: `['is_image' => true, 'accept' => 'image/*']`

- `tableOptions` — blade: `lte3::components.tableOptions`
  - vars: `['columns','options','attrs']`
  - default: none

Field attributes:

- `field_attrs` — список дозволених HTML-атрибутів для полів, примірні: `autocomplete`, `autofocus`, `accept`, `placeholder`, `required`, `maxlength`, `minlength`, `pattern`, `max`, `min`, `step`, `rows`, `title`, `alt`, `style`, `id`, `data-name`, `x-model`.

Ключі:

- `next_destination_key` (string) — `_destination` за замовчуванням
- `modal_key` (string) — `_modal` за замовчуванням
- `pagination` — масив з `simple_view` та `view` для пагінації

Приклади використання:

- Отримати конфіг: `config('lte3.view.dark_mode')`
- Використання компонента: `Lte3::text('name', 'value', ['default' => '...'])`

NOTE: Значення типів і описів частково інферовані з масиву; для повної точності дивіться `config/lte3.php`.
