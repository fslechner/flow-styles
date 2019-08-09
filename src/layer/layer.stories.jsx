import React from "react";
import { storiesOf } from "@storybook/react";
import layer from "./layer.md";

storiesOf("Layer (la)", module).add(
  "Layer Name",
  () => (
    <div className="sp-m-8">
      <div className="la-base la-box0">
        <b>la-base</b>&nbsp;(z-index: 0)
      </div>
      <div className="la-hidden la-box1">
        <b>la-hidden</b>&nbsp;(z-index: -100)
      </div>
      <div className="la-footer la-box2">
        <b>la-footer</b>&nbsp;(z-index: 100)
      </div>
      <div className="la-content la-box3">
        <b>la-content</b>&nbsp;(z-index: 200)
      </div>
      <div className="la-header la-box4">
        <b>la-header</b>&nbsp;(z-index: 300)
      </div>
      <div className="la-scroll la-box5">
        <b>la-scroll</b>&nbsp;(z-index: 400)
      </div>
      <div className="la-a11y la-box6">
        <b>la-a11y</b>&nbsp;(z-index: 500)
      </div>
      <div className="la-backdrop la-box7">
        <b>la-backdrop</b>&nbsp;(z-index: 600)
      </div>
      <div className="la-loader la-box la-box8">
        <b>la-loader</b>&nbsp;(z-index: 700)
      </div>
      <div className="la-overlay la-box9">
        <b>la-overlay</b>&nbsp;(z-index: 800)
      </div>
      <div className="la-toplevel la-box10">
        <b>la-toplevel</b>&nbsp;(z-index: 900)
      </div>
      <div className="la-toast la-box11">
        <b>la-toast</b>&nbsp;(z-index: 1000)
      </div>
    </div>
  ),
  {
    notes: { markdown: layer }
  }
);

storiesOf("Layer (la)", module).add(
  "Layer Responsive",
  () => (
    <div className="sp-m-8">
      <div className="sml:la-content smu:la-toast la-box5">Box 1</div>
      <div className="sml:la-toast smu:la-content la-box10">Box 2</div>
    </div>
  ),
  {
    notes: { markdown: layer }
  }
);
