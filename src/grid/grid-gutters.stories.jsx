import React from "react";
import { storiesOf } from "@storybook/react";
import gridGutters from "./grid-gutters.md";

storiesOf("Grid (gr)", module).add(
  "Grid Gutter",
  () => (
    <div>
      <div className="gr-gh-3 gr-gv-2">
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
    notes: { markdown: gridGutters }
  }
);
