import React from "react";
import { storiesOf } from "@storybook/react";
import background from "./background.md";

storiesOf("Background (ba)", module).add(
  "Background Color",
  () => (
    <div>
      <div className="ba-dark sp-p-2 co-silver">
        <b>ba-dark</b>
      </div>
      <div className="ba-blue sp-p-2 co-silver">
        <b>ba-blue</b>
      </div>
      <div className="ba-petrol sp-p-2">
        <b>ba-petrol</b>
      </div>
      <div className="ba-petrol60 sp-p-2">
        <b>ba-petrol60</b>
      </div>
      <div className="ba-petrol20 sp-p-2">
        <b>ba-petrol20</b>
      </div>
      <div className="ba-silver sp-p-2">
        <b>ba-silver</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: background }
  }
);

storiesOf("Background (ba)", module).add(
  "Background Responsive",
  () => (
    <div>
      <div className="co-silver smu:co-dark ba-dark xs:ba-blue sm:ba-petrol md:ba-petrol60 lg:ba-petrol20 xlu:ba-silver sp-p2">
        <b>Backround Color by Viewport</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: background }
  }
);
