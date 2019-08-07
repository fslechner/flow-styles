# Griditem Position

Define an element as a CSS-Grid-Item and set positions inside a defined FlowStyle-Grid or FlowStyle-Layout.

## Options

- Horizontal & vertical same position: **gri-3**
- Horizontal & vertical different position: **gri-h3 gri-v-2**
- All horizontal grid-cells: **gri-h**
- All vertical grid-cells: **gri-v**
- Horizontal individual: **gri-hs-1 gri-he-3**
- Vertical individual: **gri-vs-1 gri-ve-3**

### Horizontal & vertical position with same value: **gri-3**

It is like a coordinate system with **same x and y values**. The griditem will set into one **single grid-cell**.

```html
<div class="gri-3">Item</div>
```

```css
.gri-3 {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
}
```

### Horizontal & vertical position with different value: **gri-h-3 gri-v-1**

It is like a coordinate system with **different x and y values**. The Griditem will set into one **single grid-cell**.

```html
<div class="gri-h-3 gri-v-1">Item</div>
```

### All horizontal grid-cells: **gri-h**

Set an element to all horizontal grids of a defined row. If row is not defined it will applied to the first row.

```html
<div class="gri-h">Item</div>
```

```css
.gri-h {
  grid-column: 1 / -1;
}
```

## All vertical grid-cells: **gri-v**

Set an element to all vertical grids of a defined column. If column is not defined it will applied to the first column.

```html
<div class="gri-v">Item</div>
```

```css
.gri-v {
  grid-row: 1 / -1;
}
```

## Horizontal individual: **gri-hs-1 gri-he-3**

Set an element to a defined horizontal start (hs) and horizontal end (he) grid-cell.

```html
<div class="gri-hs-1 gri-he-3">Item</div>
```

```css
.gri-hs-1 {
  grid-column-start: 1;
}
.gri-he-3 {
  grid-column-end: 3;
}
```

## Vertical individual: **gri-vs-1 gri-ve-3**

Set an element to a defined vertical start (vs) and vertical end (ve) grid-cell.

```html
<div class="gri-vs-1 gri-ve-3">Item</div>
```

```css
.gri-vs-1 {
  grid-row-start: 1;
}
.gri-vs-3 {
  grid-row-start: 3;
}
```
