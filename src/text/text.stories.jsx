import React from "react";
import { storiesOf } from "@storybook/react";
import textStyle from "./text-style.md";
import textSize from "./text-size.md";
import textDecoration from "./text-decoration.md";
import textResponsive from "./text-responsive.md";

storiesOf("Text", module).add(
  "Text Style",
  () => (
    <div>
      <div className="te-p sp-m2">
        <b>te-p</b>: Text style primary with inherit size
      </div>
      <div className="te-s sp-m2">
        <b>te-s</b>: Text style secondary with inherit size
      </div>
      <div className="te-t sp-m2">
        <b>te-t</b>: Text style tertiary with inherit size
      </div>
      <div className="te-q sp-m2">
        <b>te-q</b>: Text style quaternary with inherit size
      </div>
    </div>
  ),
  {
    notes: { markdown: textStyle }
  }
);

storiesOf("Text", module).add(
  "Text Size",
  () => (
    <div>
      <div className="te-p-xxl">te-p-h1: Text style primary size xxl</div>
      <div className="te-p-xl">te-p-h2: Text style primary size xl</div>
      <div className="te-p-lg">te-p-h3: Text style primary size lg</div>
      <div className="te-p-md">te-p-h4: Text style primary size md</div>
      <div className="te-p-sm">te-p-h5: Text style primary size sm</div>
      <div className="te-p-xs">te-p-h6: Text style primary size xs</div>
    </div>
  ),
  {
    notes: { markdown: textSize }
  }
);

storiesOf("Text", module).add(
  "Text Decoration",
  () => (
    <div>
      <div className="te-p-md-b sp-m2">
        te-p-md-b: Text style primary size medium bold
      </div>
      <div className="te-p-md-u sp-m2">
        te-p-md-u: Text style primary size medium underlined
      </div>
      <div className="te-p-md-i sp-m2">
        te-p-md-i: Text style primary size medium italic
      </div>
      <div className="te-p-md-lt sp-m2">
        te-p-md-lt: Text style primary size medium line-through
      </div>
    </div>
  ),
  {
    notes: { markdown: textDecoration }
  }
);

storiesOf("Text", module).add(
  "Text Responsive",
  () => (
    <div>
      <div className="te-p-xl--sml te-p-md--md te-p-sm--lgu sp-m2">
        Text by Viewports
      </div>
    </div>
  ),
  {
    notes: { markdown: textResponsive }
  }
);
