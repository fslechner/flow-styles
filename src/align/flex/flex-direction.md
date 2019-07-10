# Flex Directions

Set Flexbox to an element to change Flex-Direction or setting Flex-Wrap. Therefore you have to set **display: flex** to use Flexbox.

```html
<div class="fl">Item</div>
```

```css
.fl {
  display: flex;
}
```

## Directions

- horizontal (h)
- horizontal reverse (hr)
- vertical (v)
- vertical reverse (vr)

### Flex Direction Horizontal: **fl fl-h**

```html
<div class="fl fl-h">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-h {
  flex-direction: row;
}
```

### Flex Direction Horizontal Reverse: **fl fl-hr**

```html
<div class="fl fl-hr">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-hr {
  flex-direction: row-reverse;
}
```

### Flex Direction Vertical: **fl fl-v**

```html
<div class="fl fl-v">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-v {
  flex-direction: column;
}
```

### Flex Direction Vertical Reverse: **fl fl-vr**

```html
<div class="fl fl-vr">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-hr {
  flex-direction: row-reverse;
}
```
