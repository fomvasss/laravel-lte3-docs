# Installation

Run:

```bash
composer require fomvasss/laravel-lte3

composer require almasaeed2010/adminlte

php artisan vendor:publish --tag=lte3-config

php artisan lte3:install
```

That's all. You can usage LTE3 in your project :)


All examples of fields and components can be viewed: `http://site.test/lte3/exsmples` (`.../examples/components.vlade.php`)

# Configuration

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

## Structure

    configs
        lte3.php
    public/
        vendor/
            lte3/       # assets for laravel-lte3
            adminlte/   # assets for https://adminlte.io
    resources/
        views/
            admin/
                auth/
                examples/
                layouts/
