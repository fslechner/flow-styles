import React from "react";
import { storiesOf } from "@storybook/react";
import alignHorizontal from "./align-horizontal.md";

storiesOf("Align (al)", module).add(
  "Align Horizontal (al-h)",
  () => (
    <div className="">
      <div className="al-h-l al-h-box sp-m-1">
        <div className="ba-petrol sp-p-1">
          <b>al-h-l</b>&nbsp;(align horizontal left)
        </div>
      </div>

      <div className="al-h-c al-h-box sp-m-1">
        <div className="ba-petrol sp-p-1">
          <b>al-h-c</b>&nbsp;(align horizontal center)
        </div>
      </div>

      <div className="al-h-r al-h-box sp-m-1">
        <div className="ba-petrol sp-p-1">
          <b>al-h-r</b>&nbsp;(align horizontal right)
        </div>
      </div>

      <div className="al-h-sa al-h-box sp-m-1">
        <span className="ba-petrol sp-p-1">
          <b>al-h-sa</b>&nbsp;(align horizontal space-around)
        </span>
        <span className="ba-petrol sp-p-1">
          <b>al-h-sa</b>&nbsp;(align horizontal space-around)
        </span>
      </div>

      <div className="al-h-sb al-h-box sp-m-1">
        <span className="ba-petrol sp-p-1">
          <b>al-h-sb</b>&nbsp;(align horizontal space-between)
        </span>
        <span className="ba-petrol sp-p-1">
          <b>al-h-sb</b>&nbsp;(align horizontal space-between)
        </span>
      </div>

      <div className="al-h-se al-h-box sp-m-1">
        <span className="ba-petrol sp-p-1">
          <b>al-h-se</b>&nbsp;(align horizontal space-evenly)
        </span>
        <span className="ba-petrol sp-p-1">
          <b>al-h-se</b>&nbsp;(align horizontal space-evenly)
        </span>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignHorizontal }
  }
);
