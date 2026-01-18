# Поле: radiogroup

Компонент: `lte3::components.radiogroup` (викликається через `Lte3::radiogroup()`)

Опис

Група радіокнопок з підтримкою кастомних url для submit, map (для показу/приховування блоків), та оформлення (`class_wrap`).

Props:
- `name` (string)
- `options` (array) — {value => label} або масив елементів як у шаблоні
- `selected` (mixed)
- `attrs` (array)
- `label` (string)
- `default` (mixed)
- `field_id_prefix`, `submit_method`, `map` (array)

Приклади (з examples):

```blade
{!! Lte3::radiogroup('payment', null, ['paypal' => 'PayPal', 'fondy' => 'Fondy', 'liqpay' => 'LiqPay'], [
    'default' => 'liqpay',
    'class_wrap' => 'row',
]) !!}

{!! Lte3::radiogroup('brand', 'samsung', [
    'apple' => ['label' => 'Apple', 'url' => route('lte3.data.save', ['brand' => 'apple'])],
    'samsung' => ['label' => 'Samsung', 'url' => route('lte3.data.save', ['brand' => 'samsung'])],
], ['label' => 'Submit to URL:', 'submit_methor' => 'POST']) !!}
```

Map parameter — показ блоків за вибором

Компонент підтримує `map` — асоціативний масив, де ключі відповідають значенням опції, а значення — масив селекторів (CSS), які потрібно показувати при виборі тієї опції. Шаблон додає `data-map` у атрибути input (JSON) і клас `js-map-blocks`, а клієнтський JS (`initTreeview`/`initSelect2`/`initRadio` логіка) відповідає за показ/приховування.

Приклад (з examples):

```blade
{!! Lte3::radiogroup('chanel', 'sms', ['push' => 'Push', 'email' => 'Email', 'sms' => 'SMS'], [
    'label' => 'Toggle Block:',
    'map' => [
        'push' => ['.js-block-push'],
        'email' => ['.js-block-email'],
        'sms' => ['.js-block-sms'],
    ],
]) !!}

<h3 class="js-block-push">Push!</h3>
<h3 class="js-block-email">Email!</h3>
<h3 class="js-block-sms">SMS!</h3>
```

Пояснення

- При зміні вибору радіо-браузер читає `data-map` і показує/ховає відповідні блоки (функція `toggleSelectableBlocks` в `public/main.js`).

Поради

- Щоб при зміні вибору виконувалась відправка на сервер — використайте `url` у опції або `submit_method` у attrs; JS обробник `js-radio-submit` підхоплює зміни.
