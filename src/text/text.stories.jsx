import React from "react";
import { storiesOf } from "@storybook/react";
import textStyle from "./text-style.md";
import textSize from "./text-size.md";
import textDecoration from "./text-decoration.md";
import textResponsive from "./text-responsive.md";

storiesOf("Text (te)", module).add(
  "Text Style",
  () => (
    <div>
      <div className="te-md-p sp-m-2">
        <b>te-p</b>: Text size medium style primary
      </div>
      <div className="te-md-s sp-m-2">
        <b>te-s</b>: Text size medium style secondary
      </div>
      <div className="te-md-t sp-m-2">
        <b>te-t</b>: Text size medium style tertiary
      </div>
      <div className="te-md-q sp-m-2">
        <b>te-q</b>: Text size medium style quaternary
      </div>
    </div>
  ),
  {
    notes: { markdown: textStyle }
  }
);

storiesOf("Text (te)", module).add(
  "Text Size",
  () => (
    <div>
      <div className="te-xxl-p">te-xxl-p: Text size xxl style primary</div>
      <div className="te-xl-p">te-xl-p: Text size xl style primary</div>
      <div className="te-lg-p">te-lg-p: Text size lg style primary</div>
      <div className="te-md-p">te-md-p: Text size md style primary</div>
      <div className="te-sm-p">te-sm-p: Text size sm style primary</div>
      <div className="te-xs-p">te-xs-p: Text size xs style primary</div>
    </div>
  ),
  {
    notes: { markdown: textSize }
  }
);

storiesOf("Text (te)", module).add(
  "Text Decoration",
  () => (
    <div>
      <div className="te-md-p-b sp-m-2">
        te-p-md-b: Text size medium style primary decoration bold
      </div>
      <div className="te-md-p-u sp-m-2">
        te-p-md-u: Text size medium style primary decoration underlined
      </div>
      <div className="te-md-p-i sp-m-2">
        te-p-md-i: Text size medium style primary decoration italic
      </div>
      <div className="te-md-p-lt sp-m-2">
        te-p-md-lt: Text size medium style primary decoration line-through
      </div>
    </div>
  ),
  {
    notes: { markdown: textDecoration }
  }
);

storiesOf("Text (te)", module).add(
  "Text Responsive",
  () => (
    <div>
      <div className="sml:te-xl-p md:te-md-p lgu:te-sm-p sp-m-2">
        Text by Viewports
      </div>
    </div>
  ),
  {
    notes: { markdown: textResponsive }
  }
);
