# Griditem Responsive

Set griditem positions of an element depending on Viewport-Width.

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Griditem Lower Breakpoint XS: **xsl:gri-3**

Lower breakpoint xs border griditem is at position 3x3. Upper breakpoint xs grititem position is inherit.

```html
<div class="xsl:gri-3">Item</div>
```

### Border One Between Breakpoints XS and MD: **xs:gri-3**

Between breakpoints xs and sm griditem is at position 3x3. Outside breakpoints xs and sm griditem position is inherit.

```html
<div class="xs:gri-3">Item</div>
```

### Border One Upper Breakpoint XS: **xsu:gri-3**

Upper breakpoint xs griditem is at position 3x3. Lower breakpoint xs griditem position is inherit.

```html
<div class="xsu:gri-3">Item</div>
```

### Combined Media Queries: **xsl:gri-3 xsu:gri-2**

Lower breakpoint xs griditem is at position 3x3. Upper breakpoint xs griditem is at position 2x2.

```html
<div class="xsl:gri-3 xsu:gri-2">Item</div>
```
