import React from "react";
import { storiesOf } from "@storybook/react";
import alignDirection from "./align-direction.md";

storiesOf("Align (al)", module).add(
  "Align Direction (al-d)",
  () => (
    <div className="sp-m-4">
      <h3>Align Direction Horizontal: al-d-h</h3>
      <div className="al-d-h al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Direction Horizontal Reverse: al-d-hr</h3>
      <div className="al-d-hr al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Horizontal Wrap: al-d-hw</h3>
      <div className="al-d-hw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Horizontal Wrap Reverse: al-d-hwr</h3>
      <div className="al-d-hwr al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Horizontal Reverse Wrap: al-d-hrw</h3>
      <div className="al-d-hrw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Horizontal Reverse Wrap Reverse: al-d-hrwr</h3>
      <div className="al-d-hrwr al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Direction Vertical: al-d-v</h3>
      <div className="al-d-v al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Direction Vertical Reverse: al-d-vr</h3>
      <div className="al-d-vr al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Vertical Wrap: al-d-vw</h3>
      <div className="al-d-vw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Vertical Wrap Reverse: al-d-vwr</h3>
      <div className="al-d-vwr al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Vertical Reverse Wrap: al-d-vrw</h3>
      <div className="al-d-vrw al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>

      <h3>Align Vertical Reverse Wrap Reverse: al-d-vrwr</h3>
      <div className="al-d-vrwr al-wrapper">
        <div className="sp-m-2">Item1</div>
        <div className="sp-m-2">Item2</div>
        <div className="sp-m-2">Item3</div>
        <div className="sp-m-2">Item4</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignDirection }
  }
);
