# Alignitem Align-Self

Set align-self to a Flexbox-Item. You have to wrap this with an al-class for setting display: flex

## Options

### Alignments

- top (t)
- center (c)
- bottom (b)
- stretch (s)
- baseline (bl)

### Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Static Examples

### Alignitem align top: **ali-as-t**

```html
<div class="ali-as-t">Alignitem</div>
```

```css
.ali-as-t {
  align-self: flex-start;
}
```

### Alignitem align center: **ali-as-c**

```html
<div class="ali-as-c">Alignitem</div>
```

```css
.ali-as-c {
  align-self: center;
}
```

### Alignitem align bottom: **ali-as-b**

```html
<div class="ali-as-b">Alignitem</div>
```

```css
.ali-as-b {
  align-self: flex-end;
}
```

### Alignitem align stretch: **ali-as-s**

```html
<div class="ali-as-s">Alignitem</div>
```

```css
.ali-as-s {
  align-self: stretch;
}
```

### Alignitem align-self baseline: **ali-as-bl**

```html
<div class="ali-as-bl">Alignitem</div>
```

```css
.ali-as-bl {
  align-self: baseline;
}
```

## Responsive Examples

### Alignitem align-self top between breakpoint sm and md: **sm:ali-as-t**

```html
<div class="sm:ali-as-t">Item</div>
```

### Alignitem align-self top lower and bottom upper breakpoint sm: **sml:ali-as-t smu:ali-as-b**

```html
<div class="sml:ali-as-t smu:ali-as-b">Item</div>
```
