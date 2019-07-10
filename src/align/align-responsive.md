# Alignment Responsive

Set horizontal and vertical alignment depending on Viewport-Width. Because Alignment uses CSS-Flexbox you have to set **display: flex;** like shown below to use Alignment.

```html
<div class="al">Item</div>
```

```css
.al {
  display: flex;
}
```

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Align Horizontal Center Lower Breakpoint SM: **al al-hc--sml**

Lower breakpoint sm horizontal alignment is center. Upper breakpoint sm horizontal alignment is inherit.

```html
<div class="al al-hc--sml">Item</div>
```

```css
.al {
  display: flex;
}
@media screen and (max-width: 767px) {
  .al-hc--sml {
    justify-content: center;
  }
}
```

### Align Vertical Center Between Breakpoints SM and MD: **al al-hc--sm**

Between breakpoints sm and md vertical alignment is center. Outside breakpoints sm and md vertical alignment is inherit.

```html
<div class="al al-vc--sm">Item</div>
```

```css
.al {
  display: flex;
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .al-vc--sm {
    align-items: center;
  }
}
```

### Align Vertical Center and Horizontal Center Upper Breakpoint SM: **al al-hc--smu**

Upper breakpoint sm horizontal and vertical alignment is center. Lower breakpoint sm horizontal and vertical alignment is inherit.

```html
<div class="al al-hc--smu al-vc--smu">Item</div>
```

```css
.al {
  display: flex;
}
@media screen and (min-width: 768px) {
  .al-hc--smu {
    justify-content: center;
  }
}
@media screen and (min-width: 768px) {
  .al-vc--smu {
    align-items: center;
  }
}
```

### Combined Media Queries: **al al-hr--sml al-hc--smu**

Lower Breakpoint SM horizontal alignment is right. Upper Breakpoint SM horizontal alignment is center.

```html
<div class="al al-hr--sml al-hc--smu">Item</div>
```

```css
.al {
  display: flex;
}
@media screen and (max-width: 767px) {
  .al-hr--sml {
    justify-content: flex-end;
  }
}
@media screen and (min-width: 768px) {
  .al-hc--smu {
    justify-content: center;
  }
}
```
