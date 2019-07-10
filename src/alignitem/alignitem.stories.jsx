import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemAlignself from "./alignitem-alignself.md";
import alignitemGrow from "./alignitem-grow.md";
import alignitemShrink from "./alignitem-shrink.md";
import alignitemOrder from "./alignitem-order.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Align",
  () => (
    <div>
      <h3>Align Item 3 bottom: ali-ab</h3>
      <div className="al fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2 ali-ab">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Item 5 center: ali-ac</h3>
      <div className="al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2 ">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2 ali-ac">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemAlignself }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Grow",
  () => (
    <div className="al-dh">
      <div className="ali-g2 sp-p2 ba-petrol">ali-g2</div>
      <div className="ali-g4 sp-p2 ba-silver">ali-g3</div>
      <div className="ali-g1 sp-p2 ba-petrol20">ali-g1</div>
    </div>
  ),
  {
    notes: { markdown: alignitemGrow }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Shrink",
  () => (
    <div>
      <div className="al">
        <div className="cu-300px ali-s0 sp-p2 ba-petrol">ali-s0: Item 1</div>
        <div className="cu-300px ali-s2 sp-p2 ba-silver">ali-s2: Item 2</div>
        <div className="cu-300px sp-p2 ba-petrol20">default: Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemShrink }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Order",
  () => (
    <div>
      <div className="al-dh">
        <div className="ali-o2 sp-p2 ba-petrol">ali-o2: Item 1</div>
        <div className="ali-o3 sp-p2 ba-silver">ali-o3: Item 2</div>
        <div className="ali-o1 sp-p2 ba-petrol20">ali-o1: Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemOrder }
  }
);

storiesOf("Alignitem (ali)", module).add("Alignitem Responsive", () => (
  <div>
    <div className="ba-dark sp-p2 co-silver">
      <b>ba-dark</b>
    </div>
  </div>
));
