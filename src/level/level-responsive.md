# Level Responsive

Set a level (z-index) to an element depending on Viewport-Width.

## Options

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

### Level content between breakpoints sm and md: **le-content--sm**

```html
<div class="le-content--sm">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 991px) {
  .le-content--sm {
    z-index: 200;
  }
}
```
