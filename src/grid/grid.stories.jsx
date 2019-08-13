import React from "react";
import { storiesOf } from "@storybook/react";
import gridResponsive from "./grid-responsive.md";

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
