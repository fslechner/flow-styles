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
      <h3>Align Item 2 top: ali-as-t</h3>
      <div className="al-c-b al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2 ali-as-t ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
      <h3>Align Item 2 bottom: ali-as-b</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2 ali-as-b ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
      <h3>Align Item 2 center: ali-as-c</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2 ali-as-c ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
      <h3>Align Item 2 baseline: ali-as-bl</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2 ali-as-bl ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
      <h3>Align Item 2 stretch: ali-as-s</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2 ali-as-bl ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
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
      <div className="ali-g-2 sp-p-2 ba-petrol">ali-g-2</div>
      <div className="ali-g-4 sp-p-2 ba-silver">ali-g-3</div>
      <div className="ali-g-1 sp-p-2 ba-petrol20">ali-g-1</div>
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
        <div className="cu-300px ali-s-0 sp-p-2 ba-petrol">ali-s-0: Item 1</div>
        <div className="cu-300px ali-s-2 sp-p-2 ba-silver">ali-s-2: Item 2</div>
        <div className="cu-300px sp-p-2 ba-petrol20">default: Item 3</div>
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
