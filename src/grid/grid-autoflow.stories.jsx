import React from "react";
import { storiesOf } from "@storybook/react";
import gridAutoflow from "./grid-autoflow.md";

storiesOf("Grid (gr)", module).add(
  "Grid Autoflow (gr-ah, gr-av)",
  () => (
    <div>
      <h3>Grid Autoflow Horizontal (default): gr-ah</h3>
      <div className="gr-h-3 gr-v-2 gr-g-2 gr-ah">
        <div className="sp-p-1 ba-petrol">Item1</div>
        <div className="sp-p-1 ba-petrol">Item2</div>
        <div className="sp-p-1 ba-petrol">Item3</div>
        <div className="sp-p-1 ba-petrol">Item4</div>
        <div className="sp-p-1 ba-petrol">Item5</div>
        <div className="sp-p-1 ba-petrol">Item6</div>
      </div>

      <h3>Grid Autoflow Vertical: gr-av</h3>
      <div className="gr-h-3 gr-v-2 gr-g-2 gr-av">
        <div className="sp-p-1 ba-petrol">Item1</div>
        <div className="sp-p-1 ba-petrol">Item2</div>
        <div className="sp-p-1 ba-petrol">Item3</div>
        <div className="sp-p-1 ba-petrol">Item4</div>
        <div className="sp-p-1 ba-petrol">Item5</div>
        <div className="sp-p-1 ba-petrol">Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridAutoflow }
  }
);
