import React from "react";
import { storiesOf } from "@storybook/react";
import alignVertical from "./align-vertical.md";

storiesOf("Align (al)", module).add(
  "Align Vertical (al-v)",
  () => (
    <div>
      <div className="al-v-t al-v-box sp-m-2">
        <b>al-v-t</b>&nbsp;(align vertical top)
      </div>
      <div className="al-v-c al-v-box sp-m-2">
        <b>al-v-c</b>&nbsp;(align vertical center)
      </div>
      <div className="al-v-b al-v-box sp-m-2">
        <b>al-v-b</b>&nbsp;(align vertical bottom)
      </div>
      <div className="al-v-s al-v-box co-petrol ba-dark sp-m-2">
        <b>al-v-s</b>&nbsp;(align vertical stretch)
      </div>
      <div className="al-v-bl al-v-box sp-m-2">
        <b>al-v-bl</b>&nbsp;(align vertical baseline)
      </div>
    </div>
  ),
  {
    notes: { markdown: alignVertical }
  }
);
