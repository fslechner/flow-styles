import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemOrder from "./alignitem-order.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Order (ali-o)",
  () => (
    <div>
      <div className="al-d-h">
        <div className="ali-o-2 sp-p-2 ba-petrol">ali-o-2: Item 1</div>
        <div className="ali-o-3 sp-p-2 ba-silver">ali-o-3: Item 2</div>
        <div className="ali-o-1 sp-p-2 ba-petrol20">ali-o-1: Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemOrder }
  }
);
