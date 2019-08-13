import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemAlignself from "./alignitem-alignself.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Align Self (ali-as)",
  () => (
    <div>
      <h1>align-self</h1>

      <div className="al al-wrapper">
        <div className="ali-as-t al-item">
          Top: <br />
          ali-as-t
        </div>
        <div className="ali-as-b al-item">
          Bottom: <br />
          ali-as-b
        </div>
        <div className="ali-as-c al-item">
          Center: <br />
          ali-as-c
        </div>
        <div className="ali-as-bl al-item">
          Baseline: <br />
          ali-as-bl
        </div>
        <div className="ali-as-s al-item">
          Stretch: <br />
          ali-as-s
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemAlignself }
  }
);
