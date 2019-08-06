import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemAlignself from "./alignitem-alignself.md";
import alignitemGrow from "./alignitem-grow.md";
import alignitemShrink from "./alignitem-shrink.md";
import alignitemOrder from "./alignitem-order.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Align Self (ali-as)",
  () => (
    <div>
      <h3>Align Item 3 bottom: ali-as-b</h3>
      <div className="al fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2 ali-as-b">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Item 5 center: ali-as-c</h3>
      <div className="al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2 ">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2 ali-as-c">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemAlignself }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Grow (ali-g)",
  () => (
    <div className="al-dh">
      <div className="ali-g-2 sp-p2 ba-petrol">ali-g-2</div>
      <div className="ali-g-4 sp-p2 ba-silver">ali-g-3</div>
      <div className="ali-g-1 sp-p2 ba-petrol20">ali-g-1</div>
    </div>
  ),
  {
    notes: { markdown: alignitemGrow }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Shrink (ali-s)",
  () => (
    <div>
      <div className="al">
        <div className="cu-300px ali-s-0 sp-p2 ba-petrol">ali-s-0: Item 1</div>
        <div className="cu-300px ali-s-2 sp-p2 ba-silver">ali-s-2: Item 2</div>
        <div className="cu-300px sp-p2 ba-petrol20">default: Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemShrink }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Order (ali-o)",
  () => (
    <div>
      <div className="al-dh">
        <div className="ali-o-2 sp-p2 ba-petrol">ali-o-2: Item 1</div>
        <div className="ali-o-3 sp-p2 ba-silver">ali-o-3: Item 2</div>
        <div className="ali-o-1 sp-p2 ba-petrol20">ali-o-1: Item 3</div>
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
