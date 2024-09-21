# field


```
$fieldUserEmail = ['type' => 'email', 'name' => 'email', 'label' => 'Enter Email', 'value' => 'bob@appp.com'];

{!! Lte3::field($fieldUserEmail) !!}
```

### Example

```
{!! Lte3::field([
    'type' => 'text',
    'name' => 'nickname',
    'value' => 'Nik',
    'label' => 'Nickname',
    'class' => 'some-class',
    'data' => ['rr' => 'qq']
]) !!}

{!! Lte3::field([
    'type' => 'select2',
    'name' => 'gender',
    'multiple' => true,
    'selected' => 'male',
    'options' => ['male' => 'Male', 'female' => 'Female'],
    'label' => 'Gender',
    'data' => ['tt' => 'yy']
]) !!}
```
