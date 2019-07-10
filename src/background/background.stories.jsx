import React from "react";
import { storiesOf } from "@storybook/react";
import background from "./background.md";

storiesOf("Background", module).add(
  "Background Color",
  () => (
    <div>
      <div>
        <div className="ba-dark sp-p2 co-silver">
          <b>ba-dark</b>
        </div>
        <div className="ba-blue sp-p2 co-silver">
          <b>ba-blue</b>
        </div>
        <div className="ba-petrol sp-p2">
          <b>ba-petrol</b>
        </div>
        <div className="ba-petrol60 sp-p2">
          <b>ba-petrol60</b>
        </div>
        <div className="ba-petrol20 sp-p2">
          <b>ba-petrol20</b>
        </div>
        <div className="ba-silver sp-p2">
          <b>ba-silver</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: background }
  }
);

storiesOf("Background", module).add(
  "Background Responsive",
  () => (
    <div>
      <div className="co-silver co-dark--smu ba-dark ba-blue--xs ba-petrol--sm ba-petrol60--md ba-petrol20--lg ba-silver--xlu sp-p2">
        <b>Backround Color by Viewport</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: background }
  }
);
