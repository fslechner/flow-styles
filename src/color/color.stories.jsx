import React from "react";
import { storiesOf } from "@storybook/react";
import colorColor from "./color-color.md";
import colorResponsive from "./color-responsive.md";

storiesOf("Color", module).add(
  "Color Color",
  () => (
    <div>
      <div className="co-dark sp-p2">
        <b>co-dark</b>
      </div>
      <div className="co-blue sp-p2">
        <b>co-blue</b>
      </div>
      <div className="co-petrol sp-p2">
        <b>co-petrol</b>
      </div>
      <div className="co-petrol60 sp-p2">
        <b>co-petrol60</b>
      </div>
      <div className="co-petrol20 sp-p2">
        <b>co-petrol20</b>
      </div>
      <div className="co-silver sp-p2">
        <b>co-silver</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: colorColor }
  }
);

storiesOf("Color", module).add(
  "Color Responsive",
  () => (
    <div className="co-dark co-blue--xs co-petrol--sm co-petrol60--md co-petrol20--lg co-silver--xl sp-p2">
      <b>Color by Viewports</b>
    </div>
  ),
  {
    notes: { markdown: colorResponsive }
  }
);
