import React from "react";
import { storiesOf } from "@storybook/react";
import gridDimension from "./grid-dimension.md";

storiesOf("Grid (gr)", module).add(
  "Grid Dimension (gr-3, gr-h-3, gr-v-3)",
  () => (
    <div>
      <div className="gr-3 gr-g-1">
        <div className="sp-p-2 ba-petrol">Item1</div>
        <div className="sp-p-2 ba-petrol">Item2</div>
        <div className="sp-p-2 ba-petrol">Item3</div>
        <div className="sp-p-2 ba-petrol">Item4</div>
        <div className="sp-p-2 ba-petrol">Item5</div>
        <div className="sp-p-2 ba-petrol">Item6</div>
        <div className="sp-p-2 ba-petrol">Item7</div>
        <div className="sp-p-2 ba-petrol">Item8</div>
        <div className="sp-p-2 ba-petrol">Item9</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridDimension }
  }
);
