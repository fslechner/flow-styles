import React from "react";
import { storiesOf } from "@storybook/react";
import gridAutoflow from "./grid-autoflow.md";

storiesOf("Grid (gr)", module).add(
  "Grid Autoflow",
  () => (
    <div>
      <div className="gr-h-3 gr-v-2 gr-ah">
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
        <div>Item4</div>
        <div>Item5</div>
        <div>Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridAutoflow }
  }
);
