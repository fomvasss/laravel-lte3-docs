# Поле: tableOptions

Компонент: `lte3::components.tableOptions` (викликається через `Lte3::tableOptions()`)

Опис

UI для вибору колонок таблиці з можливістю сортування їх порядку та вмикання/вимикання видимості. Виводиться у модальному вікні.

Props:
- `columns` (array) — масив колонок з key/name
- `options` (array) — поточні опції з активністю та weight
- `attrs.action` (string) — URL для сабміту
- `attrs.method` (string)
- `attrs.btn_modal_title`, `attrs.btn_save_title`

Приклад використання (генерується автоматично у шаблоні таблиці):

В прикладі `examples` використовується `Lte3::tableOptions([...], $options, [...])` щоб відбудувати інтерфейс вибору колонок.

Поради

- Кнопка відкриває модальне вікно; при сабміті відправляється форма (через `Lte3::formOpen`).
- Використовує `js-input-weight` та `sortable-y` для порядкування.
