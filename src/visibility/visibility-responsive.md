# Visibiliy Responsive

Set the visibility of an element depending on Viewport-Width.

## Options

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

### Visibility hide between breakpoints sm and md: (**vi-h--sm**)

```html
<div class="vi-h--sm">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 991px) {
  .vi-h--sm {
    display: none;
  }
}
```

#### Visibility show between breakpoints sm and md (**vi-s--sm**)

```html
<div class="vi-s--sm">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 991px) {
  .vi-s--sm {
    display: inline-block;
  }
}
```
