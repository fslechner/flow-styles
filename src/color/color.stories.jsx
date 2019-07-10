import React from "react";
import { storiesOf } from "@storybook/react";
import color from "./color.md";

storiesOf("Color", module).add(
  "Color Color",
  () => (
    <div>
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
    </div>
  ),
  {
    notes: { markdown: color }
  }
);

storiesOf("Color", module).add(
  "Color Responsive",
  () => (
    <div>
      <div className="co-dark co-blue--xs co-petrol--sm co-petrol60--md co-petrol20--lg co-silver--xl sp-p2">
        <b>Color by Viewports</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: color }
  }
);
