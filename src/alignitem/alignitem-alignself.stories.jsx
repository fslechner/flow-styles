import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemAlignself from "./alignitem-alignself.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Align Self (ali-as)",
  () => (
    <div>
      <h3>Align Item 2 top: ali-as-t</h3>
      <div className="al-c-b al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="ali-as-t sp-m-2 ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Item 2 bottom: ali-as-b</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="ali-as-b sp-m-2 ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Item 2 center: ali-as-c</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="ali-as-c sp-m-2 ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Item 2 baseline: ali-as-bl</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="ali-as-bl sp-m-2 ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Item 2 stretch: ali-as-s</h3>
      <div className="al al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="ali-as-s sp-m-2 ba-petrol">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemAlignself }
  }
);
