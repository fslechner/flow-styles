# Responsive Custom

You can set custom styles depending on Viewport-Width.

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Custom Circle Lower Breakpoint XS: **cu-circle--xsl**

Lower breakpoint xs custom style is circle. Upper breakpoint xs custom style is none.

```html
<div class="cu-circle--xsl">Item</div>
```

### Custom Circle Between Breakpoints XS and MD: **cu-circle--xs**

Between breakpoints xs and sm custom style is circle. Outside breakpoints xs and sm custom style is none.

```html
<div class="cu-circle--xs">Item</div>
```

### Custom Circle Upper Breakpoint XS: **cu-circle--xsu**

Upper breakpoint xs custom style is circle. Lower breakpoint xs custom style is none.

```html
<div class="cu-circle--xsu">Item</div>
```

### Combined Media Queries: **cu-circle--xsl cu-triangle--xsu**

Lower breakpoint xs custom style is circle. Upper breakpoint xs custom style is triangle.

```html
<div class="cu-circle--xsl cu-triangle--xsu">Item</div>
```
