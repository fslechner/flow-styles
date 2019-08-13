import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemGrow from "./alignitem-grow.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Grow (ali-g)",
  () => (
    <div className="al-d-h">
      <div className="ali-g-2 sp-p-2 ba-petrol">ali-g-2</div>
      <div className="ali-g-4 sp-p-2 ba-silver">ali-g-3</div>
      <div className="ali-g-1 sp-p-2 ba-petrol20">ali-g-1</div>
    </div>
  ),
  {
    notes: { markdown: alignitemGrow }
  }
);
