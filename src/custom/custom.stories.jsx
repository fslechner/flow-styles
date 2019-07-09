import React from "react";
import { storiesOf } from "@storybook/react";
import customStyle from "./custom-style.md";
import customResponsive from "./custom-responsive.md";

storiesOf("Custom", module).add(
  "Custom Styles",
  () => (
    <div>
      <div className="cu-circle">cu-circle</div>
      <div className="cu-trapezoid">cu-trapezoid</div>
      <div className="cu-triangle">cu-triangle</div>
    </div>
  ),
  {
    notes: { markdown: customStyle }
  }
);

storiesOf("Custom", module).add(
  "Custom Responsive",
  () => (
    <div>
      <div className="cu-triangle--sml cu-trapezoid--md cu-circle--lgu" />
    </div>
  ),
  {
    notes: { markdown: customResponsive }
  }
);
