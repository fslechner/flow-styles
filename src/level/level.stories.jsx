import React from "react";
import { storiesOf } from "@storybook/react";
import level from "./level.md";

storiesOf("Level", module).add(
  "Level Name",
  () => (
    <div className="sp-m8">
      <div className="le-base le-box0">
        <b>le-base</b>&nbsp;(z-index: 0)
      </div>
      <div className="le-hiddem le-box1">
        <b>le-hidden</b>&nbsp;(z-index: -100)
      </div>
      <div className="le-footer le-box2">
        <b>le-footer</b>&nbsp;(z-index: 100)
      </div>
      <div className="le-content le-box3">
        <b>le-content</b>&nbsp;(z-index: 200)
      </div>
      <div className="le-header le-box4">
        <b>le-header</b>&nbsp;(z-index: 300)
      </div>
      <div className="le-scroll le-box5">
        <b>le-scroll</b>&nbsp;(z-index: 400)
      </div>
      <div className="le-a11y le-box6">
        <b>le-a11y</b>&nbsp;(z-index: 500)
      </div>
      <div className="le-backdrop le-box7">
        <b>le-backdrop</b>&nbsp;(z-index: 600)
      </div>
      <div className="le-loader le-box le-box8">
        <b>le-loader</b>&nbsp;(z-index: 700)
      </div>
      <div className="le-overlay le-box9">
        <b>le-overlay</b>&nbsp;(z-index: 800)
      </div>
      <div className="le-toplevel le-box10">
        <b>le-toplevel</b>&nbsp;(z-index: 900)
      </div>
      <div className="le-toast le-sm-header le-box11">
        <b>le-toast</b>&nbsp;(z-index: 1000)
      </div>
    </div>
  ),
  {
    notes: { markdown: level }
  }
);

storiesOf("Level", module).add(
  "Level Responsive",
  () => (
    <div className="sp-m8">
      <div className="le-content--sml le-toast--smu le-box5">Box 1</div>
      <div className="le-toast--sml le-content--smu le-box10">Box 2</div>
    </div>
  ),
  {
    notes: { markdown: level }
  }
);
