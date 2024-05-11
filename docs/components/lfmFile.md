# lfmFile


```
{!! Lte3::lfmFile('document', null, [
      'label' => 'Docoment',
]) !!}
```

```
{!! Lte3::lfmFile('films', null, [
      'label' => 'Film',
      'lfm_category' => 'file', // see configs/lfm.php folder_categories
      'trim_host' => true,
      'multiple' => 1,
]) !!}
```