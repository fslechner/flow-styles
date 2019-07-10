# Alignment Horizontal

Because Alignment uses CSS-Flexbox you have to set **display: flex;** like shown below to use Alignment.

```html
<div class="al">Item</div>
```

```css
.al {
  display: flex;
}
```

## Horizontal Aligment Options

- left (l)
- center (c)
- right (r)
- around (a)
- between (b)
- evenly (e)

### Align Horizontal Left: **al al-hl**

```html
<div class="al al-hl">Item</div>
```

```css
.al {
  display: flex;
}
.al-hl {
  justify-content: flex-start;
}
```

### Align Horizontal Center: **al al-hc**

```html
<div class="al al-hc">Item</div>
```

```css
.al {
  display: flex;
}
.al-hc {
  justify-content: center;
}
```

## Align Horizontal Right: **al al-hr**

```html
<div class="al al-hr">Item</div>
```

```css
.al {
  display: flex;
}
.al-hr {
  justify-content: flex-end;
}
```

## Align Horizontal Around: **al al-ha**

```html
<div class="al al-ha">Item</div>
```

```css
.al {
  display: flex;
}
.al-ha {
  justify-content: space-around;
}
```

## Align Horizontal Between: **al al-hb**

```html
<div class="al al-hb">Item</div>
```

```css
.al {
  display: flex;
}
.al-hb {
  justify-content: space-between;
}
```

## Align Horizontal Evenly: **al al-he**

```html
<div class="al al-he">Item</div>
```

```css
.al {
  display: flex;
}
.al-he {
  justify-content: space-evenly;
}
```
