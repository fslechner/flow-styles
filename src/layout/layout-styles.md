# Layout Styles

Layout is same like Grid based on CSS-Grid. Therefore you have to set **display: grid** to use CSS-Grid.

```html
<div class="la">Item</div>
```

```css
.la {
  display: grid;
}
```

In contrast to grid, with layout you can define individual grids whereas with grid you can only define numbers of 1fr-Grid-Cells.

## Options

Every \$layout-types entry is possible to use.

## Directions

- horizontal (h)
- vertical (v)
- horizontal & vertical ()

### Layout horizontal type one: **la la-h-one**

```html
<div class="la la-h-one">Layout</div>
```

### Layout vertical type one: **la la-v-one**

```html
<div class="la la-h-one">Layout</div>
```

### Layout horizontal and vertical type one: **la la-one**

```html
<div class="la la-one">Layout</div>
```

### Layout horizontal type one and vertical type two: **la la-h-one la-v-two**

```html
<div class="la la-h-one la-v-two">Layout</div>
```
