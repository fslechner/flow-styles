import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemGrow from "./alignitem-grow.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Grow (ali-g)",
  () => (
    <div>
      <h1>flex-grow</h1>
      <h4>Grow default: ali-g-1</h4>
      <h4>Grow not: ali-g-0</h4>
      <div className="al">
        <div className="ali-g-4 sp-p-2 ba-petrol">ali-g-4</div>
        <div className="ali-g-2 sp-p-2 ba-petrol60">ali-g-2</div>
        <div className="ali-g-1 sp-p-2 ba-petrol20">ali-g-1</div>
        <div className="ali-g-0 sp-p-2 ba-silver">ali-g-0</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemGrow }
  }
);
