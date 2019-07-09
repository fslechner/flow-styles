# Rotation

Rotates an element.

### Degrees (mandantory)

Every \$degrees entry is possible to use.

#### Rotation 90 Degrees (**ro-90**)

```html
<div class="ro-90">Item</div>
```

```css
.ro-90 {
  transform: rotate(90deg);
}
```

### Media-Queries (optional)

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

#### Rotation 90 Degrees between Breakpoints SM and MD (**ro-90--sm**)

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
