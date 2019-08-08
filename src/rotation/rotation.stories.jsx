import React from "react";
import { storiesOf } from "@storybook/react";
import rotation from "./rotation.md";

storiesOf("Rotation (ro)", module).add(
  "Rotation Degrees",
  () => (
    <div>
      <div className="ro-box sp-mb-5">Rotation 0</div>
      <div className="ro-90 ro-box sp-mb-5">ro-90</div>
      <div className="ro-180 ro-box sp-mb-5">ro-180</div>
      <div className="ro-270 ro-box sp-mb-5">ro-270</div>
    </div>
  ),
  {
    notes: { markdown: rotation }
  }
);

storiesOf("Rotation (ro)", module).add(
  "Rotation Responsive",
  () => (
    <div>
      <div className="sml:ro-90 smu:ro-180 ro-box sp-mb5">
        Rotation by Viewport
      </div>
    </div>
  ),
  {
    notes: { markdown: rotation }
  }
);
