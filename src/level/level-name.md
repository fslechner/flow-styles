# Level

Set a level (z-index) to an element.

### Level Type (mandantory)

Every \$levels entry is possible to use.

#### Level Content (**le-content**)

```html
<div class="le-content">Item</div>
```

```css
.le-content {
  z-index: 200;
}
```

### Media-Queries (optional)

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

#### Level Content between Breakpoints SM and MD (**le-content--sm**)

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
