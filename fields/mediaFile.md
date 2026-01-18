# Поле: mediaFile

Компонент: `lte3::components.mediaFile` (викликається через `Lte3::mediaFile()` / `Lte3::mediaImage()`)

Опис

Інтеграція зі Spatie MediaLibrary: показує медіафайли прив'язані до моделі, дає можливість завантажувати нові та видаляти наявні.

Props:
- `name` (string)
- `model` (Eloquent model) — модель, що використовує Spatie MediaLibrary
- `collection` (string) — назва collection (за замовчуванням ім'я поля)
- `multiple` (bool)
- `is_image` (bool)
- `custom_properties` (array)
- `attrs` (array)

Приклад (з examples):

```blade
{!! Lte3::mediaFile('images', $model, [
    'label' => 'Images',
    'multiple' => true,
    'is_image' => true,
]) !!}

{!! Lte3::mediaFile('image', $model, [
    'is_image' => true,
    'custom_properties' => ['alt']
]) !!}
```

Поради

- Модель повинна імплементувати `Spatie\MediaLibrary\HasMedia`.
- Поле виводить кнопки для завантаження і перелік існуючих медіа з можливістю видалення та введення custom properties.
