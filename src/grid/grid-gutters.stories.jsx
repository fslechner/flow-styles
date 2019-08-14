import React from "react";
import { storiesOf } from "@storybook/react";
import gridGutters from "./grid-gutters.md";

storiesOf("Grid (gr)", module).add(
  "Grid Gutter (gr-g-1, gr-gh-1, gr-gv-1)",
  () => (
    <div>
      <h3>Gutter Horizontal: gr-gh-2</h3>
      <div className="gr-h-6  gr-gh-2">
        <div className="sp-p-1 ba-petrol">Item1</div>
        <div className="sp-p-1 ba-petrol">Item2</div>
        <div className="sp-p-1 ba-petrol">Item3</div>
        <div className="sp-p-1 ba-petrol">Item4</div>
        <div className="sp-p-1 ba-petrol">Item5</div>
        <div className="sp-p-1 ba-petrol">Item6</div>
      </div>
      <h3>Gutter Vertical: gr-gv-2</h3>
      <div className="gr-v-6 gr-gv-2">
        <div className="sp-p-1 ba-petrol">Item1</div>
        <div className="sp-p-1 ba-petrol">Item2</div>
        <div className="sp-p-1 ba-petrol">Item3</div>
        <div className="sp-p-1 ba-petrol">Item4</div>
        <div className="sp-p-1 ba-petrol">Item5</div>
        <div className="sp-p-1 ba-petrol">Item6</div>
      </div>

      <h3>Gutter Horizontal & Vertical</h3>
      <div className="gr-h-6 gr-v-2 gr-gh-2 gr-gv-2">
        <div className="sp-p-1 ba-petrol">Item1</div>
        <div className="sp-p-1 ba-petrol">Item2</div>
        <div className="sp-p-1 ba-petrol">Item3</div>
        <div className="sp-p-1 ba-petrol">Item4</div>
        <div className="sp-p-1 ba-petrol">Item5</div>
        <div className="sp-p-1 ba-petrol">Item6</div>
        <div className="sp-p-1 ba-petrol">Item7</div>
        <div className="sp-p-1 ba-petrol">Item8</div>
        <div className="sp-p-1 ba-petrol">Item9</div>
        <div className="sp-p-1 ba-petrol">Item10</div>
        <div className="sp-p-1 ba-petrol">Item11</div>
        <div className="sp-p-1 ba-petrol">Item12</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridGutters }
  }
);
