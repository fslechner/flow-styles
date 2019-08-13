import React from "react";
import { storiesOf } from "@storybook/react";
import gridDimension from "./grid-dimension.md";

storiesOf("Grid (gr)", module).add(
  "Grid Dimension",
  () => (
    <div>
      <div className="gr-3">
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
        <div>Item5</div>
        <div>Item6</div>
        <div>Item7</div>
        <div>Item8</div>
        <div>Item9</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridDimension }
  }
);
