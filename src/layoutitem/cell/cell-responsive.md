# Cell Responsive

Set cell positions of an element depending on Viewport-Width.

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Cell Lower Breakpoint XS: **ce-3--xsl**

Lower breakpoint xs border cell is at position 3x3. Upper breakpoint xs cell position is inherit.

```html
<div class="ce-3--xsl">Item</div>
```

### Border One Between Breakpoints XS and MD: **ce-3--xs**

Between breakpoints xs and sm cell is at position 3x3. Outside breakpoints xs and sm cell position is inherit.

```html
<div class="ce-3--xs">Item</div>
```

### Border One Upper Breakpoint XS: **ce-3--xsu**

Upper breakpoint xs cell is at position 3x3. Lower breakpoint xs cell position is inherit.

```html
<div class="ce-3--xsu">Item</div>
```

### Combined Media Queries: **ce-3--xsl ce-2--xsu**

Lower breakpoint xs cell is at position 3x3. Upper breakpoint xs cell is at position 2x2.

```html
<div class="ce-3--xsl ce-2--xsu">Item</div>
```
