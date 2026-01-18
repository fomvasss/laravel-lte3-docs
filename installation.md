# Встановлення та публікація

Ця сторінка містить технічні інструкції зі встановлення та публікації ресурcів пакета `fomvasss/laravel-lte3` (витягнуто з README пакета).

## Встановлення

Виконайте в корені проекту:

```bash
composer require fomvasss/laravel-lte3

# (опціонально) dev-залежність AdminLTE для локальної розробки
composer require almasaeed2010/adminlte --dev

# опублікувати конфіг пакета
php artisan vendor:publish --tag=lte3-config

# встановити скелет/ресурси пакета
php artisan lte3:install
```

Після виконання цих команд пакет має бути доступним у вашому застосунку.

Примітки:
- Пакет очікує наявності ресурсів AdminLTE; ви можете встановити `almasaeed2010/adminlte` або опублікувати потрібні assets у `public/`.
- При ввімкнених маршрутах приклади доступні за адресою `/lte3/examples` (залежно від конфігурації маршрутизації).

## Публікація ресурсів (опціонально)

Пакет надає набір tag'ів для `vendor:publish`. Ви можете публікувати їх частково або всі відразу.

- Views (шаблони, компоненти, приклади):
  - `lte3-view-components`
  - `lte3-view-examples`
  - `lte3-view-auth`
  - `lte3-view-parts`
  - `lte3-view-layouts`

- Інші ресурси:
  - `lte-config` (конфігурація)
  - `lte-assets` (assets пакета)
  - `lte-lang` (локалізація)

Приклад публікації лише компонентів:

```bash
php artisan vendor:publish --tag=lte3-view-components
```

### Ресурси AdminLTE

Пакет використовує ресурси AdminLTE. Якщо ви хочете підключити їх локально у `public/`, переконайтеся, що `almasaeed2010/adminlte` присутній у `composer.json`. Після публікації ресурсів можна вручну видалити зайві плагіни у `public/vendor/adminlte/plugins` щоб зекономити місце.

## Middleware

Для коректної роботи навігації і деяких опцій додайте middleware пакета у `App\Http\Kernel.php` у групу `web`:

```php
protected $middlewareGroups = [
    'web' => [
        // ...
        \Fomvasss\Lte3\Http\Middleware\LteRequestOptions::class,
    ],
];
```

## Структура (коротко)

- `config/lte3.php` — конфігураційний файл пакета
- `public/vendor/adminlte` — оригінальні AdminLTE assets
- `public/vendor/lte3` — кастомні assets пакета
- `resources/views/vendor/lte3` — опубліковані view (за потреби)

## Посилання

- Репозиторій на GitHub: https://github.com/fomvasss/laravel-lte3/
- README пакета: `vendor/fomvasss/laravel-lte3/README.md`
- Приклади: `resources/views/vendor/lte3/examples/components.blade.php`

Якщо бажаєте, можу додати невеликий чекліст розв'язання типових проблем (відсутні AdminLTE assets, права на файли, або необхідність npm/yarn build для деяких JS-плагінів).
