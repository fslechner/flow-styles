# Flex Wrap

Set Flexbox to an element to change Flex-Direction or setting Flex-Wrap. Therefore you have to set **display: flex** to use Flexbox.

```html
<div class="fl">Item</div>
```

```css
.fl {
  display: flex;
}
```

## Wrap Options

- wrap (w)
- wrap reverse (wr)

### Flex Direction Horizontal Wrap **fl fl-hw**

```html
<div class="fl fl-hw">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-hw {
  flex-direction: row;
  flex-wrap: wrap;
}
```

### Flex Direction Horizontal Wrap reverse**fl fl-hwr**

```html
<div class="fl fl-hwr">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-hwr {
  flex-direction: row;
  flex-wrap: wrap-reverse;
}
```

### Flex Direction Vertical Wrap **fl fl-vw**

```html
<div class="fl fl-vw">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-vw {
  flex-direction: column;
  flex-wrap: wrap;
}
```

### Flex Direction Vertical Wrap Reverse**fl fl-vwr**

```html
<div class="fl fl-vwr">Item</div>
```

```css
.fl {
  display: flex;
}
.fl-vwr {
  flex-direction: column;
  flex-wrap: wrap-reverse;
}
```
