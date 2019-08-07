# Cell Position

Define an element as a CSS-Grid-Cell and set positions inside a defined FlowStyle-Grid or FlowStyle-Layout.

## Options

- Horizontal & vertical same position: **ce-3**
- Horizontal & vertical different position: **ce-h3 ce-v2**
- All horizontal grid-cells: **ce-h**
- All vertical grid-cells: **ce-v**
- Horizontal individual: **ce-hs1 ce-he3**
- Vertical individual: **ce-vs1 ce-ve3**

### Horizontal & vertical position with same value: **ce-3**

It is like a coordinate system with **same x and y values**. The cell will set into one **single grid-cell**.

```html
<div class="ce-3">Item</div>
```

```css
.ce-3 {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
}
```

### Horizontal & vertical position with different value: **ce-h3 ce-v1**

It is like a coordinate system with **different x and y values**. The cell will set into one **single grid-cell**.

```html
<div class="ce-h3 ce-v1">Item</div>
```

### All horizontal grid-cells: **ce-h**

Set an element to all horizontal grids of a defined row. If row is not defined it will applied to the first row.

```html
<div class="ce-h">Item</div>
```

```css
.ce-h {
  grid-column: 1 / -1;
}
```

## All vertical grid-cells: **ce-v**

Set an element to all vertical grids of a defined column. If column is not defined it will applied to the first column.

```html
<div class="ce-v">Item</div>
```

```css
.ce-h {
  grid-row: 1 / -1;
}
```

## Horizontal individual: **ce-hs1 ce-he3**

Set an element to a defined horizontal start (hs) and horizontal end (he) grid-cell.

```html
<div class="ce-hs1 ce-he3">Item</div>
```

```css
.ce-hs1 {
  grid-column-start: 1;
}
.ce-he3 {
  grid-column-end: 3;
}
```

## Vertical individual: **ce-vs1 ce-ve3**

Set an element to a defined vertical start (vs) and vertical end (ve) grid-cell.

```html
<div class="ce-vs1 ce-ve3">Item</div>
```

```css
.ce-vs1 {
  grid-row-start: 1;
}
.ce-vs3 {
  grid-row-start: 3;
}
```
