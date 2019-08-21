import React from "react";
import { storiesOf } from "@storybook/react";
import griditemResponsive from "./griditem-responsive.md";

storiesOf("Griditem (gri)", module).add(
  "Griditem Responsive",
  () => (
    <div>
      <div className="gri-layout">
        <div className="sml:gri-1 smu:gri-2 mdu:gri-3 ba-petrol al-c">
          <b>
            sml:gri-1 <br />
            smu:gri-2 <br />
            mdu:gri-3
          </b>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ),
  {
    notes: { markdown: griditemResponsive }
  }
);
