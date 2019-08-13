import React from "react";
import { storiesOf } from "@storybook/react";
import alignContent from "./align-content.md";

storiesOf("Align (al)", module).add(
  "Align Content (al-c)",
  () => (
    <div>
      <h3>Align Content Top: al-c-t</h3>
      <div className="al-c-t al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Content Center: al-c-c</h3>
      <div className="al-c-c al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Content Bottom: al-c-b</h3>
      <div className="al-c-b al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Content Stretch: al-c-s</h3>
      <div className="al-c-s al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Content Space-Around: al-c-sa</h3>
      <div className="al-c-sa al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Content Space-Between: al-c-sb</h3>
      <div className="al-c-sb al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignContent }
  }
);
