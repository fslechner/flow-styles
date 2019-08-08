# Align Horizontal

Set justify-content to a Flexbox-Container.

## Options

### Alignments

- left (l)
- center (c)
- right (r)
- space-around (sa)
- space-between (sb)
- space-evenly (se)

### Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Static Examples

### Align Horizontal Left: **al-h-l**

```html
<div class="al-h-l">Item</div>
```

```css
.al-h-l {
  display: flex;
  justify-content: flex-start;
}
```

### Align Horizontal Center: **al-h-c**

```html
<div class="al-h-c">Item</div>
```

```css
.al-h-c {
  display: flex;
  justify-content: center;
}
```

## Align Horizontal Right: **al-h-r**

```html
<div class="al-h-r">Item</div>
```

```css
.al-h-r {
  display: flex;
  justify-content: flex-end;
}
```

## Align Horizontal Space-Around: **al-h-sa**

```html
<div class="al-h-sa">Item</div>
```

```css
.al-h-sa {
  display: flex;
  justify-content: space-around;
}
```

## Align Horizontal Space-Between: **al-h-sb**

```html
<div class="al-h-sb">Item</div>
```

```css
.al-h-sb {
  display: flex;
  justify-content: space-between;
}
```

## Align Horizontal Space-Evenly: **al-h-se**

```html
<div class="al-h-se">Item</div>
```

```css
.al-h-se {
  display: flex;
  justify-content: space-evenly;
}
```

## Responsive Examples

### Align horizontal center between breakpoint sm and md: **sm:al-h-c**

```html
<div class="sm:al-h-c">Item</div>
```

### Align horizontal center lower and right upper breakpoint sm: **sml:al-h-c smu:al-h-r**

```html
<div class="sml:al-h-c smu:al-h-r">Item</div>
```
