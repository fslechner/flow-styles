# Color Responsive

Set the color of an element depending on Viewport-Width.

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Color Petrol Lower Breakpoint MD: **co-petrol--mdl**

Lower breakpoint md color is petrol. Upper breakpoint md color is inherit.

```html
<div class="co-petrol--mdl">Item</div>
```

```css
@media screen and (max-width: 991px) {
  .co-petrol--mdl {
    background-color: #00979e;
  }
}
```

### Color Petrol Between Breakpoints MD and LG: **co-petrol--md**

Between breakpoints md and lg color is petrol. Outside breakpoints md and lg color is inherit.

```html
<div class="co-petrol--md">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 1239px) {
  .co-petrol--md {
    background-color: #00979e;
  }
}
```

### Color Petrol Upper Breakpoint MD: **co-petrol--mdu**

Upper breakpoint md color is petrol. Lower breakpoint md color is inherit.

```html
<div class="co-petrol--mdu">Item</div>
```

```css
@media screen and (min-width: 992px) {
  .co-petrol--mdu {
    background-color: #00979e;
  }
}
```

### Combined Media Queries: **co-silver--mdl co-petrol--mdu**

Lower breakpoint md color is silver. Upper breakpoint md color is petrol.

```html
<div class="co-silver--mdl co-petrol--mdu">Item</div>
```

```css
@media screen and (max-width: 991px) {
  .co-silver--mdl {
    background-color: #d7d7d7;
  }
}

@media screen and (min-width: 992px) {
  .co-petrol--mdu {
    background-color: #00979e;
  }
}
```
