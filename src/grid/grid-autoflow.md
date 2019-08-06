# Grid Autoflow

Set a CSS-Grid-Autoflow within a CSS-Grid. Ensure that **display: grid** is set to use CSS-Grid-Autoflow.

## Autoflow Options

- column
- row

### Column Autoflow: **gr gr-ha**

```html
<div class="gr gr-ha">Item</div>
```

```css
.gr {
  display: grid;
}
.gr-ha {
  grid-auto-flow: column;
}
```

### Row Autoflow: **gr gr-va**

```html
<div class="gr gr-va">Item</div>
```

```css
.gr {
  display: grid;
}
.gr-va {
  grid-auto-flow: row;
}
```
