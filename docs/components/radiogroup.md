# radiogroup

```
{!! Lte3::radiogroup('size', 'm', ['s' => 'Small', 'm' => 'Medium', 'l' => 'Large',], ['label' => 'Size:']) !!}
```

```
 {!! Lte3::radiogroup('chanel', 'tg', ['tg' => 'Telegram', 'email' => 'Email', 'sms' => 'SMS',], [
    'label' => 'Toggle Block:',
    'map' => [
        'tg' => ['.js-block-tg'],
        'email' => ['.js-block-email'],
        'sms' => ['.js-block-sms'],
    ],
]) !!}
<h3 class="js-block-tg">Telegram!</h3>
<h3 class="js-block-email">Email!</h3>
<h3 class="js-block-sms">SMS!</h3>
```

```
{!! Lte3::radiogroup('brand', 'samsung', [
        'apple' => ['label' => 'Apple', 'url' => route('lte3.data.save', ['brand' => 'apple'])],
        'samsung' => ['label' => 'Samsung', 'url' => route('lte3.data.save', ['brand' => 'samsung'])],
        'xiaomi' => ['label' => 'Xiaomi', 'url' => route('lte3.data.save', ['brand' => 'xiaomi'])],
    ], ['label' => 'Submit to URL:', 'submit_methor' => 'POST'])
!!}
```
