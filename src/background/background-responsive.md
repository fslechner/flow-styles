# Background Responsive

Set the color of your background depending on Viewport-Width.

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Background Petrol Lower Breakpoint MD: **ba-petrol--mdl**

Lower breakpoint md background color is petrol. Upper breakpoint md background color is inherit.

```html
<div class="ba-petrol--mdl">Item</div>
```

```css
@media screen and (max-width: 991px) {
  .ba-petrol--mdl {
    background-color: #00979e;
  }
}
```

### Background Petrol Between Breakpoints MD and LG: **ba-petrol--md**

Between breakpoints md and lg background color is petrol. Outside breakpoints md and lg background color is inherit.

```html
<div class="ba-petrol--md">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 1239px) {
  .ba-petrol--md {
    background-color: #00979e;
  }
}
```

### Background Petrol Upper Breakpoint MD: **ba-petrol--mdu**

Upper breakpoint md background color is petrol. Lower breakpoint md background color is inherit.

```html
<div class="ba-petrol--mdu">Item</div>
```

```css
@media screen and (min-width: 992px) {
  .ba-petrol--mdu {
    background-color: #00979e;
  }
}
```

### Combined Media Queries: **ba-silver--mdl ba-petrol--mdu**

Lower breakpoint md background color is silver. Upper breakpoint md background color is petrol.

```html
<div class="ba-silver--mdl ba-petrol--mdu">Item</div>
```

```css
@media screen and (max-width: 991px) {
  .ba-silver--mdl {
    background-color: #d7d7d7;
  }
}

@media screen and (min-width: 992px) {
  .ba-petrol--mdu {
    background-color: #00979e;
  }
}
```
