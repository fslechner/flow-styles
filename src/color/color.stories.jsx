import React from "react";
import { storiesOf } from "@storybook/react";
import color from "./color.md";

storiesOf("Color (co)", module).add(
  "Color Color",
  () => (
    <div>
      <div>
        <div className="co-dark sp-p-2">
          <b>co-dark</b>
        </div>
        <div className="co-blue sp-p-2">
          <b>co-blue</b>
        </div>
        <div className="co-petrol sp-p-2">
          <b>co-petrol</b>
        </div>
        <div className="co-petrol60 sp-p-2">
          <b>co-petrol60</b>
        </div>
        <div className="co-petrol20 sp-p-2">
          <b>co-petrol20</b>
        </div>
        <div className="co-silver sp-p-2">
          <b>co-silver</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: color }
  }
);

storiesOf("Color (co)", module).add(
  "Color Responsive",
  () => (
    <div>
      <div className="co-dark xs:co-blue sm:co-petrol md:co-petrol60 lg:co-petrol20 xl:co-silver sp-p-2">
        <b>Color by Viewports</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: color }
  }
);
