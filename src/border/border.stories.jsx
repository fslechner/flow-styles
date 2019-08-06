import React from "react";
import { storiesOf } from "@storybook/react";
import border from "./border.md";

storiesOf("Border (bo)", module).add(
  "Border Style",
  () => (
    <div>
      <div>
        <div className="bo-p sp-m-4">
          <b>bo-p</b>
        </div>
        <div className="bo-s sp-m-4">
          <b>bo-s</b>
        </div>
        <div className="bo-t sp-m-4">
          <b>bo-t</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: border }
  }
);

storiesOf("Border (bo)", module).add(
  "Border Responsive",
  () => (
    <div>
      <div className="sml:bo-p md:bo-s lgu:bo-t sp-m-2">
        <b>Border by Viewports</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: border }
  }
);
