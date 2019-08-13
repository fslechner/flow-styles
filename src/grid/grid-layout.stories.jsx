import React from "react";
import { storiesOf } from "@storybook/react";
import gridLayout from "./grid-layout.md";

storiesOf("Grid (gr)", module).add(
  "Grid Layout Horizontal (gr-h)",
  () => (
    <div>
      <b>gr-h-one</b> (70px 70px auto)
      <div className="gr-h-one gr-gh-2">
        <div className="sp-p-1 ba-silver">Item 1</div>
        <div className="sp-p-1 ba-petrol">Item 2</div>
        <div className="sp-p-1 ba-petrol20">Item 3</div>
      </div>
      <br />
      <b>gr-h-two</b> (auto 30%)
      <div className="gr-h-two gr-gh-2">
        <div className="sp-p-1 ba-silver">Item 1</div>
        <div className="sp-p-1 ba-petrol">Item 2</div>
      </div>
      <br />
      <b>gr-h-three</b> (20% auto 20%)
      <div className="gr-h-three gr-gh-2">
        <div className="sp-p-1 ba-silver">Item 1</div>
        <div className="sp-p-1 ba-petrol">Item 2</div>
        <div className="sp-p-1 ba-petrol20">Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridLayout }
  }
);

storiesOf("Grid (gr)", module).add(
  "Grid Layout Vertical (gr-v-one)",
  () => (
    <div>
      <b>gr-v-one</b> (70px 70px auto)
      <div className="gr-v-one gr-gv-2">
        <div className="sp-p-1 ba-silver">Item 1</div>
        <div className="sp-p-1 ba-petrol">Item 2</div>
        <div className="sp-p-1 ba-petrol20">Item 3</div>
      </div>
      <br />
      <b>gr-v-four</b> (100px auto 50vh)
      <div className="gr-v-four gr-gv-2">
        <div className="sp-p-1 ba-silver">Item 1</div>
        <div className="sp-p-1 ba-petrol">Item 2</div>
        <div className="sp-p-1 ba-petrol20">Item 3</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridLayout }
  }
);

storiesOf("Grid (gr)", module).add(
  "Grid Layout Horizontal and Vertical (gr-h-one gr-v-four)",
  () => (
    <div>
      <b>gr-h-one gr-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="gr-h-one gr-v-four gr-g-2">
        <div className="gri-h1 gri-v1 sp-p-1 ba-silver">Item 1</div>
        <div className="gri-h2 gri-v1 sp-p-1 ba-petrol">Item 2</div>
        <div className="gri-h3 gri-v1 sp-p-1 ba-petrol20">Item 3</div>
        <div className="gri-h1 gri-v2 sp-p-1 ba-silver">Item 4</div>
        <div className="gri-h2 gri-h2 sp-p-1 ba-petrol">Item 5</div>
        <div className="gri-h3 gri-h2 sp-p-1 ba-petrol20">Item 6</div>
        <div className="gri-h1 gri-v3 sp-p-1 ba-silver">Item 7</div>
        <div className="gri-h2 gri-v3 sp-p-1 ba-petrol">Item 8</div>
        <div className="gri-h3 gri-v3 sp-p-1 ba-petrol20">Item 9</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridLayout }
  }
);
