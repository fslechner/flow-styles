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
        <div className="gri-9">Item1</div>
        <div className="gri-8">Item2</div>
        <div className="gri-7">Item3</div>
        <div className="gri-6">Item4</div>
        <div className="gri-5">Item5</div>
        <div className="gri-4">Item6</div>
        <div className="gri-3">Item7</div>
        <div className="gri-2">Item8</div>
        <div className="gri-1">Item9</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: gridResponsive }
  }
);

storiesOf("Grid (gr)", module).add("Grid Layout Horizontal (gr-h)", () => (
  <div>
    <b>gr-h-one</b> (70px 70px auto)
    <div className="gr-h-one gr-gh-2">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
    <br />
    <b>gr-h-two</b> (auto 30%)
    <div className="gr-h-two gr-gh-2">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
    </div>
    <br />
    <b>gr-h-three</b> (20% auto 20%)
    <div className="gr-h-three gr-gh-2">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
  </div>
));

storiesOf("Grid (gr)", module).add("Grid Layout Vertical (gr-v-one)", () => (
  <div>
    <b>gr-v-one</b> (70px 70px auto)
    <div className="gr-v-one gr-gv-2">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
    <br />
    <b>gr-v-four</b> (100px auto 50vh)
    <div className="gr-v-four gr-gv-2">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
  </div>
));

storiesOf("Grid (gr)", module).add(
  "Grid Layout Horizontal and Vertical (gr-h-one gr-v-four)",
  () => (
    <div>
      <b>gr-h-one gr-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="gr-h-one gr-v-four gr-g-2">
        <div className="gri-h1 gri-v1 ba-silver">Item 1</div>
        <div className="gri-h2 gri-v1 ba-petrol">Item 2</div>
        <div className="gri-h3 gri-v1 ba-petrol20">Item 3</div>
        <div className="gri-h1 gri-v2 ba-silver">Item 4</div>
        <div className="gri-h2 gri-h2 ba-petrol">Item 5</div>
        <div className="gri-h3 gri-h2 ba-petrol20">Item 6</div>
        <div className="gri-h1 gri-v3 ba-silver">Item 7</div>
        <div className="gri-h2 gri-v3 ba-petrol">Item 8</div>
        <div className="gri-h3 gri-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);
