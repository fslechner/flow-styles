# Align Vertical

Set align-items to a Flexbox-Container.

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

### Align vertical top: **al-v-t**

```html
<div class="al-v-t">Item</div>
```

```css
.al-v-t {
  display: flex;
  align-items: flex-start;
}
```

### Align vertical center: **al-v-c**

```html
<div class="al-v-c">Item</div>
```

```css
.al-v-c {
  display: flex;
  align-items: center;
}
```

### Align vertical bottom: **al-v-b**

```html
<div class="al-v-b">Item</div>
```

```css
.al-v-b {
  display: flex;
  align-items: flex-end;
}
```

### Align vertical stretch: **al-v-s**

```html
<div class="al-v-s">Item</div>
```

```css
.al-v-s {
  display: flex;
  align-items: stretch;
}
```

### Align vertical baseline: **al-v-bl**

```html
<div class="al-v-bl">Item</div>
```

```css
.al-v-bl {
  display: flex;
  align-items: baseline;
}
```

## Responsive Examples

### Align vertical center between breakpoint sm and md: **sm:al-v-c**

```html
<div class="sm:al-v-c">Item</div>
```

### Align vertical center lower and bottom upper breakpoint sm: **sml:al-v-c smu:al-v-b**

```html
<div class="sml:al-v-c smu:al-v-b">Item</div>
```
