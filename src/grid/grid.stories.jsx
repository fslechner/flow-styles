import React from "react";
import { storiesOf } from "@storybook/react";
import gridDimension from "./grid-dimension.md";
import gridGutters from "./grid-gutters.md";
import gridAutoflow from "./grid-autoflow.md";
import gridResponsive from "./grid-responsive.md";

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

storiesOf("Grid (gr)", module).add(
  "Grid Responsive",
  () => (
    <div>
      <div className="sml:gr-3 smu:gr-4">
        <div className="ce-9">Item1</div>
        <div className="ce-8">Item2</div>
        <div className="ce-7">Item3</div>
        <div className="ce-6">Item4</div>
        <div className="ce-5">Item5</div>
        <div className="ce-4">Item6</div>
        <div className="ce-3">Item7</div>
        <div className="ce-2">Item8</div>
        <div className="ce-1">Item9</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridResponsive }
  }
);
