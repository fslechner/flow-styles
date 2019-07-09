# Border Responsive

Set borders of an element depending on Viewport-Width.

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Border One Lower Breakpoint XS: **bo-one--xsl**

Lower breakpoint xs border style is one. Upper breakpoint xs border style is inherit.

```html
<div class="bo-one--xsl">Item</div>
```

### Border One Between Breakpoints XS and MD: **bo-one--xs**

Between breakpoints xs and sm border style is one. Outside breakpoints xs and sm border style is inherit.

```html
<div class="bo-one--xs">Item</div>
```

### Border One Upper Breakpoint XS: **bo-one--xsu**

Upper breakpoint xs border style is one. Lower breakpoint xs border style is inherit.

```html
<div class="bo-one--xsu">Item</div>
```

### Combined Media Queries: **bo-one--xsl bo-two--xsu**

Lower breakpoint xs border style is one. Upper breakpoint xs border style is two.

```html
<div class="bo-one--xsl bo-two--xsu">Item</div>
```
