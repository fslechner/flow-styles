import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemShrink from "./alignitem-shrink.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Shrink (ali-s)",
  () => (
    <div>
      <div className="al">
        <div className="ali-s-0 sp-p-2 ba-petrol">ali-s-0: Item 1</div>
        <div className="ali-s-2 sp-p-2 ba-silver">ali-s-2: Item 2</div>
        <div className="sp-p-2 ba-petrol20">default: Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemShrink }
  }
);
