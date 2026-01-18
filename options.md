# Options (layouts/inc/options.blade.php)

Файл: `resources/views/layouts/inc/options.blade.php`

Призначення

Цей partial відповідає за глобальний JavaScript ініціалізатор компонентів, модальні вікна і загальні скрипти (CKEditor, TinyMCE, EditorJS, LFM, Highlight.js і т.д.). Також тут визначено HTML модалів (`#modal-sm`, `#modal-lg`, `#modal-xl`) і форма `#js-action-form` для виконання дій через JS.

Змінні та конфіг:

- `config('lte3.view.next_destination_key', '_destination')` — ключ для redirect-параметра у прихованому інпуті форми `#js-action-form`
- `config('lte3.view.modal_key', '_modal')` — ключ для відкриття модального вікна після запиту (перевіряється old/request/session)

JS ініціалізації (частина коду):

- `initSummernote()` — ініціалізація Summernote
- `initCodeMirror()` — ініціалізація CodeMirror
- `initDatetimepicker()` — ініціалізація datetimepicker для `.f-datetimepicker`, `.f-datepicker`, `.f-timepicker`
- `initPopupImage()` — ініціалізація MagnificPopup для зображень
- `initEasyMdEditor()` — ініціалізація EasyMDE
- CKEditor/TinyMCE initializations — завантажуються лише коли відповідні vendor-папки присутні
- LFM init: `initLfmBtn()` — інтеграція зі stand-alone file manager
- EditorJS init: `initEditorJS()` — ініціалізація EditorJS та кастомний плагін `Lfm` (для вибору файлів)

Приклади виклику

- Відкрити модал за значенням у session/old/request:
  - Blade перевіряє `old($modalKey) ?: request($modalKey) ?: session()->get($modalKey)` і вмикає `$('{{$modal}}').modal()`

- Виклик init-функцій після вставки HTML у modal: елементи з `data-fn-inits="initSelect2"` будуть викликати ці функції.

Примітки

- Вбудована логіка перевіряє наявність директорій у public (`vendor/ckeditor`, `vendor/tinymce`, `vendor/laravel-filemanager`, `vendor/editorjs`) і підключає відповідні скрипти лише якщо вони опубліковані.
- Усі ініціалізації виконуються синхронно при завантаженні та частково повторюються при вставці AJAX-контенту (через `data-fn-inits`).
