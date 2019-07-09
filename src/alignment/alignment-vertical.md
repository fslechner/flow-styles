# Alignment Vertical

Because Alignment uses CSS-Flexbox you have to set **display: flex;** like shown below to use Alignment.

```html
<div class="al">Item</div>
```

```css
.al {
  display: flex;
}
```

## Vertical Alignment Options

- top (t)
- center (c)
- bottom (b)

### Align Vertical Top (**al al-vt**)

```html
<div class="al al-vt">Item</div>
```

```css
.al {
  display: flex;
}
.al-vt {
  align-items: flex-start;
}
```

### Align Vertical Center (**al al-vc**)

```html
<div class="al al-vc">Item</div>
```

```css
.al {
  display: flex;
}
.al-vc {
  align-items: center;
}
```

### Align Vertical Bottom (**al al-vb**)

```html
<div class="al al-vb">Item</div>
```

```css
.al {
  display: flex;
}
.al-vb {
  align-items: flex-start;
}
```
