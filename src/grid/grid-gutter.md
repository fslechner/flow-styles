# Grid Gutter

Set a CSS-Grid-Gutter within a CSS-Grid. Therefore you have to set **display: grid** to use CSS-Grid.

```html
<div class="gr">Item</div>
```

## Directions

- horizontal (h)
- vertical (v)

## Sizes

Every \$size-multipliers are possible to use. Predefined sizes are: 0, 1, 2, 3, 4, 5, 6, 8, 16, 30

### Horizontal & vertical gutter size 2: **gr gr-g2**

```html
<div class="gr gr-g2">Item</div>
```

```css
.gr {
  display: grid;
}
.gr-g2 {
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
}
```

### Horizontal gutter size 3 & vertical gutter size 2: **gr gr-h3 gr-v2**

```html
<div class="gr gr-hg3 gr-vg2">Item</div>
```

### Horizontal gutter size 2: **gr gr-hg2**

```html
<div class="gr gr-hg2">Item</div>
```

### Vertical gutter size 2: **gr gr-vg2**

```html
<div class="gr gr-vg2">Item</div>
```
