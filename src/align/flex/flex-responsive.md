# Flex Responsive

Set Flexbox to an element to change Flex-Direction or setting Flex-Wrap. Therefore you have to set **display: flex** to use Flexbox.

```html
<div class="fl">Item</div>
```

```css
.fl {
  display: flex;
}
```

## Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu

## Examples

### Change Flex Direction at Breakpoint SM: **fl fl-h--smu fl-v--sml**

```html
<div class="fl fl-h--smu fl-v--sml">Item</div>
```

```css
.fl {
  display: flex;
}
@media screen and (min-width: 768px) {
  .fl-h--smu {
    flex-direction: row;
  }
}
@media screen and (max-width: 767px) {
  .fl-v--sml {
    flex-direction: column;
  }
}
```
