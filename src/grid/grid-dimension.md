# Grid Dimension

Set a CSS-Grid to an element. Therefore you have to set **display: grid** to use CSS-Grid.

```html
<div class="gr">Item</div>
```

```css
.gr {
  display: grid;
}
```

## Options

- Every \$grids entry is possible to use. Predefined grids are 1-20. The higher the number the more granular the grid.

## Directions

- horizontal (h)
- vertical (v)
- horizontal & vertical ()

### Columns & rows same number: **gr gr-3**

```html
<div class="gr gr-3">Item</div>
```

```css
.gr {
  display: grid;
}
.gr-3 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
```

### Columns & rows different number: **gr gr-h3 gr-v2**

```html
<div class="gr gr-h3 gr-v2">Item</div>
```

```css
.gr {
  display: grid;
}
.gr-h3 {
  grid-template-columns: repeat(3, 1fr);
}
.gr-v2 {
  grid-template-rows: repeat(2, 1fr);
}
```
