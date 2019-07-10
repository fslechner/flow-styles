import React from "react";
import { storiesOf } from "@storybook/react";
import visibility from "./visibility.md";

storiesOf("Visibility", module).add(
  "Visibility State",
  () => (
    <div>
      <b>Item 1 and Item 3 are hidden. Only Item 2 is visible.</b>
      <br />
      <div className="vi-h sp-m2 ba-petrol">Item 1</div>
      <div className="vi-s sp-m2 ba-silver">Item 2</div>
      <div className="vi-h sp-m2 ba-petrol20">Item 3</div>
    </div>
  ),
  {
    notes: { markdown: visibility }
  }
);

storiesOf("Visibility", module).add(
  "Visibility Responsive",
  () => (
    <div>
      <div className="vi-h--sml sp-m2 ba-petrol">Item 1</div>
      <div className="vi-h--sm sp-m2 ba-silver">Item 2</div>
      <div className="vi-h--lgu sp-m2 ba-petrol20">Item 3</div>
    </div>
  ),
  {
    notes: { markdown: visibility }
  }
);
