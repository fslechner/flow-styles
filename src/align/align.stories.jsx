import React from "react";
import { storiesOf } from "@storybook/react";
import alignHorizontal from "./align-horizontal.md";
import alignVertical from "./align-vertical.md";
import alignDirection from "./align-direction.md";

storiesOf("Align (al)", module).add("Align Responsive", () => (
  <div className="sp-m-2">
    <h3>Horizontal: sm:al-h-r</h3>
    <div className="sm:al-h-r al-h-box">Align horizontal right between breakpoints sm and md</div>
    <h3>Vertical: sml:al-vc</h3>
    <div className="sml:al-v-c al-v-box">Align vertical center lower breakpoint sm</div>
    <h3>Direction: sml:al-d-vw smu:al-d-hw</h3>
    <p>Change align direction at breakpoint sm</p>
    <div className="sml:al-d-vw smu:al-d-hw al-wrapper">
      <div className="sp-m-2">Item1</div>
      <div className="sp-m-2">Item2</div>
      <div className="sp-m-2">Item3</div>
      <div className="sp-m-2">Item4</div>
    </div>
    <h3>Content: sml:al-c-t smu:al-c-b</h3>
    <p>Change align content at breakpoint sm</p>
    <div className="sml:al-c-t smu:al-c-b al-d-hw al-wrapper">
      <div className="sp-m-2">Item1</div>
      <div className="sp-m-2">Item2</div>
      <div className="sp-m-2">Item3</div>
      <div className="sp-m-2">Item4</div>
    </div>
  </div>
));
