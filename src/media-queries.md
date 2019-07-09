# Media Queries

Every \$media-queries entry is possible to use. Predefined breakpoints are xsl, xs, xsu, sml, sm, smu, mdl, md, mdu, lgl, lg, lgu, xll, xl, xlu, xxll, xxlu. You can use media queries for upper, lower and between breakpoints.

### Examples for every Media Query

#### xsl = Lower Breakpoint XS (**al al-hc--xsl**)

```html
<div class="al al-hc--xsl">Item</div>
```

```css
@media screen and (max-width: 479px) {
  .al-hc--xsl {
    justify-content: center;
  }
}
```

#### xs = Between Breakpoint XS and SM (**al al-hc--xs**)

```html
<div class="al al-hc--xs">Item</div>
```

```css
@media screen and (min-width: 480px) and (max-width: 767px) {
  .al-hc--xs {
    justify-content: center;
  }
}
```

#### xsu = Upper Breakpoint XS (**al al-hc--xsu**)

```html
<div class="al al-hc--xsu">Item</div>
```

```css
@media screen and (min-width: 480px) {
  .al-hc--xsu {
    justify-content: center;
  }
}
```

#### sml = Lower Breakpoint SM (**al al-hc--sml**)

```html
<div class="al al-hc--sml">Item</div>
```

```css
@media screen and (max-width: 767px) {
  .al-hc--sml {
    justify-content: center;
  }
}
```

#### sm = Between Breakpoint SM and MD (**al al-hc--sm**)

```html
<div class="al al-hc--sm">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 991px) {
  .al-hc--sm {
    justify-content: center;
  }
}
```

#### smu = Upper Breakpoint SM (**al al-hc--smu**)

```html
<div class="al al-hc--smu">Item</div>
```

```css
@media screen and (min-width: 768px) {
  .al-hc--smu {
    justify-content: center;
  }
}
```

#### mdl = Lower Breakpoint MD (**al al-hc--mdl**)

```html
<div class="al al-hc--mdl">Item</div>
```

```css
@media screen and (max-width: 991px) {
  .al-hc--mdl {
    justify-content: center;
  }
}
```

#### md = Between Breakpoint MD and LG (**al al-hc--md**)

```html
<div class="al al-hc--md">Item</div>
```

```css
@media screen and (min-width: 768px) and (max-width: 1239px) {
  .al-hc--md {
    justify-content: center;
  }
}
```

#### mdu = Upper Breakpoint MD (**al al-hc--mdu**)

```html
<div class="al al-hc--mdu">Item</div>
```

```css
@media screen and (min-width: 992px) {
  .al-hc--mdu {
    justify-content: center;
  }
}
```

#### lgl = Lower Breakpoint LG (**al al-hc--lgl**)

```html
<div class="al al-hc--lgl">Item</div>
```

```css
@media screen and (max-width: 1239px) {
  .al-hc--lgl {
    justify-content: center;
  }
}
```

#### lg = Between Breakpoint LG and XL (**al al-hc--lg**)

```html
<div class="al al-hc--lg">Item</div>
```

```css
@media screen and (min-width: 1240px) and (max-width: 1439px) {
  .al-hc--lg {
    justify-content: center;
  }
}
```

#### lgu = Upper Breakpoint LG (**al al-hc--lgu**)

```html
<div class="al al-hc--lgu">Item</div>
```

```css
@media screen and (min-width: 1240px) {
  .al-hc--lgu {
    justify-content: center;
  }
}
```

#### xll = Lower Breakpoint XL(**al al-hc--xll**)

```html
<div class="al al-hc--xll">Item</div>
```

```css
@media screen and (max-width: 1439px) {
  .al-hc--xll {
    justify-content: center;
  }
}
```

#### xl = Between Breakpoint XL and XXL (**al al-hc--xl**)

```html
<div class="al al-hc--xl">Item</div>
```

```css
@media screen and (min-width: 1440px) and (max-width: 1919px) {
  .al-hc--xl {
    justify-content: center;
  }
}
```

#### xlu = Upper Breakpoint XL (**al al-hc--xlu**)

```html
<div class="al al-hc--xlu">Item</div>
```

```css
@media screen and (min-width: 1440px) {
  .al-hc--xlu {
    justify-content: center;
  }
}
```

#### xxll = Lower Breakpoint XXL (**al al-hc--xxll**)

```html
<div class="al al-hc--xxll">Item</div>
```

```css
@media screen and (max-width: 1919px) {
  .al-xxll-hc {
    justify-content: center;
  }
}
```

#### xxlu = Upper Breakpoint XXL (**al al-hc--xxlu**)

```html
<div class="al al-hc--xxlu">Item</div>
```

```css
@media screen and (min-width: 1920px) {
  .al-hc--xxlu {
    justify-content: center;
  }
}
```
