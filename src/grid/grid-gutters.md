# Grid Gutters

Set a CSS-Grid-Gutter within a CSS-Grid.

## Directions

- horizontal (h)
- vertical (v)

## Sizes

Every \$size-multipliers are possible to use. Predefined sizes are: 0, 1, 2, 3, 4, 5, 6, 8, 16, 30

### Horizontal & vertical gutter size 2: **gr-g-2**

```html
<div class="gr-g-2">Item</div>
```

```css
.gr-g-2 {
  display: grid;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
}
```

### Gutter horizontal size 3 & gutter vertical size 2: **gr-gh-3 gr-gv-2**

```html
<div class="gr-gh-3 gr-gv-2">Item</div>
```

### Gutter horizontal size 2: **gr-gh-2**

```html
<div class="gr-gh-2">Item</div>
```

### Gutter vertical size 2: **gr-gv-2**

```html
<div class="gr-gv-2">Item</div>
```
