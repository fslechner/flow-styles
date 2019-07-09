# Rotation Responsive

Set a rotation to an element depending on Viewport-Width.

## Options

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

### Rotation 90 degrees between breakpoints sm and md: **ro-90--sm**

```html
<div class="ro-90--sm">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 991px) {
  .ro-90--sm {
    transform: rotate(90deg);
  }
}
```
