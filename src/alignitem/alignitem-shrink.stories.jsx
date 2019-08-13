import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemShrink from "./alignitem-shrink.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Shrink (ali-s)",
  () => (
    <div>
      <h1>flex-shrink</h1>
      <h3>Shrink default: ali-s-1</h3>
      <h3>Shrink not: ali-s-0</h3>
      <div className="al">
        <div className="ali-s-4 sp-p-2 ba-petrol w-300">ali-s-4</div>
        <div className="ali-s-2 sp-p-2 ba-petrol60 w-300">ali-s-2</div>
        <div className="ali-s-1 sp-p-2 ba-petrol20 w-300">ali-s-1</div>
        <div className="ali-s-0 sp-p-2 ba-silver w-300">ali-s-0</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemShrink }
  }
);
