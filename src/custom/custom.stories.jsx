import React from "react";
import { storiesOf } from "@storybook/react";
import custom from "./custom.md";

storiesOf("Custom (cu)", module).add(
  "Custom Styles",
  () => (
    <div>
      <div className="cu-circle sp-m4">cu-circle</div>
      <div className="cu-trapezoid sp-m4">cu-trapezoid</div>
      <div className="cu-triangle sp-m4 ">cu-triangle</div>
    </div>
  ),
  {
    notes: { markdown: custom }
  }
);

storiesOf("Custom (cu)", module).add(
  "Custom Responsive",
  () => (
    <div>
      <div className="sml:cu-triangle md:cu-trapezoid lgu:cu-circle" />
    </div>
  ),
  {
    notes: { markdown: custom }
  }
);
