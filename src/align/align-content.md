# Align Content

## Options

### Alignments

- top (t)
- center (c)
- bottom (b)
- stretch (s)
- space-between (sb)
- space-around (sa)

### Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Static Examples

### Align Content Top: **al-c-t**

```html
<div class="al-c-t">Item</div>
```

```css
.al-c-t {
  display: flex;
  align-content: flex-start;
}
```

### Align Content Center: **al-c-c**

```html
<div class="al-c-c">Item</div>
```

```css
.al-c-c {
  display: flex;
  align-content: center;
}
```

## Align Content Bottom: **al-c-b**

```html
<div class="al-c-b">Item</div>
```

```css
.al-c-b {
  display: flex;
  align-content: flex-end;
}
```

## Align Content Space-Around: **al-c-sa**

```html
<div class="al-c-sa">Item</div>
```

```css
.al-c-sa {
  display: flex;
  align-content: space-around;
}
```

## Align Content Space-Between: **al-c-sb**

```html
<div class="al-c-sb">Item</div>
```

```css
.al-c-sb {
  display: flex;
  align-content: space-between;
}
```

## Align Content Stretch: **al-c-s**

```html
<div class="al-c-s">Item</div>
```

```css
.al-c-s {
  display: flex;
  align-content: stretch;
}
```

## Responsive Examples

### Align Content center between breakpoint sm and md: **sm:al-c-c**

```html
<div class="sm:al-c-c">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 991px) {
  .sm:al-c-c {
    display: flex;
    align-content: center;
  }
}
```

### Align Content center lower and bottom upper breakpoint sm: **sml:al-c-c smu:al-c-b**

```html
<div class="sml:al-c-c smu:al-c-b">Item</div>
```

```css
@media screen and (max-width: 767px) {
  .sml:al-c-c {
    display: flex;
    align-content: center;
  }
}
@media screen and (min-width: 768px) {
  .smu:al-c-b {
    display: flex;
    align-content: flex-end;
  }
}
```
