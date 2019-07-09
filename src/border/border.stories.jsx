import React from "react";
import { storiesOf } from "@storybook/react";
import borderStyle from "./border-style.md";
import borderResponsive from "./border-responsive.md";

storiesOf("Border", module).add(
  "Border Style",
  () => (
    <div>
      <div className="bo-one sp-m4">
        <b>bo-one</b>
      </div>
      <div className="bo-two sp-m4">
        <b>bo-two</b>
      </div>
      <div className="bo-three sp-m4">
        <b>bo-three</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: borderStyle }
  }
);

storiesOf("Border", module).add(
  "Border Responsive",
  () => (
    <div>
      <div className="bo-one--sml bo-two--md bo-three--lgu sp-m2">
        <b>Border by Viewports</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: borderResponsive }
  }
);
