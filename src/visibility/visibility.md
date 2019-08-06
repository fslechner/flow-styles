# Visibility

Set the visibility state of an element. You can use it for toggling visibility e.g. via JavaScript.

## Options

### States

- show as inline-block (s)
- show as inline (si)
- show as block (sb)
- hide (h)

### Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Static Examples

### Visibility hide: **vi-h**

```html
<div class="vi-h">Item</div>
```

### Visibility show (default inline-block): **vi-s**

```html
<div class="vi-s">Item</div>
```

### Visibility show as inline: **vi-si**

```html
<div class="vi-si">Item</div>
```

### Visibility show as block: **vi-sb**

```html
<div class="vi-sb">Item</div>
```

## Responsive Examples

### Visibility hide between breakpoints sm and md: **sm:vi-h**

```html
<div class="sm:vi-h">Item</div>
```

### Visibility hide lower and show upper breakpoints sm: **sml:vi-h**

```html
<div class="sml:vi-h">Item</div>
```
