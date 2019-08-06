# Align Direction

Set flex-direction to a Flexbox-Container.

## Options

### Directions

- horizontal (h)
- horizontal reverse (hr)
- vertical (v)
- vertical reverse (vr)

### Wrap

- wrap (w)
- wrap reverse (wr)

### Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Static Examples

### Align Direction Horizontal: **al-d-h**

```html
<div class="al-d-h">Item</div>
```

```css
.al-d-h {
  display: flex;
  flex-direction: row;
}
```

### Align Direction Horizontal Reverse: **al-d-hr**

```html
<div class="al-d-hr">Item</div>
```

```css
.al-d-hr {
  display: flex;
  flex-direction: row-reverse;
}
```

## Align Direction Vertical: **al-d-v**

```html
<div class="al-d-v">Item</div>
```

```css
.al-d-v {
  display: flex;
  flex-direction: column;
}
```

## Align Direction Vertical Reverse: **al-d-vr**

```html
<div class="al-d-vr">Item</div>
```

```css
.al-d-vr {
  display: flex;
  flex-direction: column-reverse;
}
```

## Align Direction Horizontal Wrap: **al-d-hw**

```html
<div class="al-d-hw">Item</div>
```

```css
.al-d-hw {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

## Align Direction Horizontal Wrap Reverse: **al-d-hwr**

```html
<div class="al-d-hwr">Item</div>
```

```css
.al-d-hwr {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}
```

## Align Direction Horizontal Reverse Wrap : **al-d-hrw**

```html
<div class="al-d-hrw">Item</div>
```

```css
.al-d-hrw {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}
```

## Align Direction Horizontal Reverse Wrap Reverse: **al-d-hrwr**

```html
<div class="al-d-hrwr">Item</div>
```

```css
.al-d-hrwr {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
}
```

## Align Direction Vertical Wrap: **al-d-vw**

```html
<div class="al-d-vw">Item</div>
```

```css
.al-d-vw {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
```

## Align Direction Vertical Wrap Reverse: **al-d-vwr**

```html
<div class="al-d-vwr">Item</div>
```

```css
.al-d-vwr {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
}
```

## Align Direction Vertical Reverse Wrap: **al-d-vrw**

```html
<div class="al-d-vrw">Item</div>
```

```css
.al-d-vrw {
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
}
```

## Align Direction Vertical Reverse Wrap Reverse: **al-d-vrwr**

```html
<div class="al-d-vrwr">Item</div>
```

```css
.al-d-vrwr {
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap-reverse;
}
```

## Responsive Examples

### Align direction vertical between breakpoint sm and md: **sm:al-vc**

```html
<div class="sm:al-dv">Item</div>
```

### Align direction vertical lower and horizontal upper breakpoint sm: **sml:al-d-v smu:al-d-h**

```html
<div class="sml:al-d-v smu:al-d-h">Item</div>
```
