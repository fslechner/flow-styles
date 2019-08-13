import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemOrder from "./alignitem-order.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Order (ali-o)",
  () => (
    <div>
      <div className="al">
        <div className="ali-o-2 sp-p-2 ba-petrol">Item1: ali-o-2</div>
        <div className="ali-o-3 sp-p-2 ba-silver">Item2: ali-o-3</div>
        <div className="ali-o-1 sp-p-2 ba-petrol20">Item3: ali-o-1</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemOrder }
  }
);
