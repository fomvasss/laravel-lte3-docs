# Installation

## Install the package

Run:

```bash
composer require fomvasss/laravel-lte3

composer require almasaeed2010/adminlte --dev

php artisan vendor:publish --tag=lte3-config

php artisan lte3:install
```

That's all. You can usage LTE3 in your project :)


All examples of fields and components can be viewed: `http://site.test/lte3/exsmples` (`.../examples/components.vlade.php`)


## Configuration

Configuration file: `config/lte3.php`

For correct work navigation in dashboard, apply middleware. Add this to `App\Http\Kernel.php`:

```
$middlewareGroups = [
  'web' => [
    //...
    \Fomvasss\Lte3\Http\Middleware\LteRequestOptions::class,
  ],
];
```


## Publishing (optional)

This package require dev `almasaeed2010/adminlte` package.
If you chose the option to create a symbolic link (when installing) to `adminlte` resources,
then the `almasaeed2010/adminlte` dependency must be included in your composer:

```bash
composer require almasaeed2010/adminlte
```
If you publish all `almasaeed2010/adminlte` resources to the public,
then the unused packages (`public/vendor/adminlte/plugins/...`) can be
manually cleaned so as not to take up disk space.


Of course, you can published partial for customize:

- views:
`lte-view-components`, `lte-view-examples`, `lte-view-auth`, `lte-view-parts`, `lte-view-layouts`

- other:
`lte-config`, `lte-assets`, `lte-lang`

For Example:

```bash
php artisan vendor:publish --tag=lte-view-components
```


## Structure

    configs
        lte3.php
    public/
        vendor/
            lte3/       # laravel-lte3 assets (you can change this)
            adminlte/   # original AdminLte assets (css, js, plugins) [ColorlibHQ/AdminLTE3](https://adminlte.io/themes/v3/)
    resources/
        views/
            admin/
                auth/
                examples/
                layouts/
                parts/

## Usage & Development

See [examples.blade.php](https://github.com/fomvasss/laravel-lte3/blob/master/resources/views/examples/components.blade.php)