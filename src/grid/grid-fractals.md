# Grid Fractals

Set a CSS-Grid to an element.

## Options

- Every \$grids entry is possible to use. Predefined grids are 1-20. The higher the number the more granular the grid.

## Directions

- horizontal (h)
- vertical (v)
- horizontal & vertical ()

### horizontal & vertical same count: **gr gr-3**

```html
<div class="gr-3">Item</div>
```

```css
.gr-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
```

### horizontal & vertical different count: **gr-h-3 gr-v-2**

```html
<div class="gr gr-h-3 gr-v-2">Item</div>
```

```css
.gr-h3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.gr-v2 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
```
