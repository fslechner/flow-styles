import React from "react";
import { storiesOf } from "@storybook/react";
import alignmentHorizontal from "./alignment-horizontal.md";
import alignmentVertical from "./alignment-vertical.md";
import alignmentResponsive from "./alignment-responsive.md";

storiesOf("Alignment (al) / FlexContainer", module).add(
  "Horizontal Alignment",
  () => (
    <div className="">
      <div className="al al-hl al-h-box">
        <b>al al-hl</b>&nbsp;(align horizontal left)
      </div>
      <div className="al al-hc al-h-box">
        <b>al al-hc</b>&nbsp;(align horizontal center)
      </div>
      <div className="al al-hr al-h-box">
        <b>al al-hr</b>&nbsp;(align horizontal right)
      </div>
      <div className="al al-ha al-h-box">
        <span>
          <b>al al-ha</b>&nbsp;(align horizontal around)
        </span>
        <span>
          <b>al al-ha</b>&nbsp;(align horizontal around)
        </span>
      </div>
      <div className="al al-hb al-h-box">
        <span>
          <b>al al-hb</b>&nbsp;(align horizontal between)
        </span>
        <span>
          <b>al al-hb</b>&nbsp;(align horizontal between)
        </span>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignmentHorizontal }
  }
);

storiesOf("Alignment (al)", module).add(
  "Vertical Alignments",
  () => (
    <div>
      <div className="al al-vt al-v-box">
        <b>al al-vt</b>&nbsp;(align vertical top)
      </div>
      <div className="al al-vc al-v-box">
        <b>al al-vc</b>&nbsp;(align vertical center)
      </div>
      <div className="al al-vb al-v-box">
        <b>al al-vb</b>&nbsp;(align vertical bottom)
      </div>
    </div>
  ),
  {
    notes: { markdown: alignmentVertical }
  }
);

storiesOf("Alignment (al)", module).add(
  "Responsive Alignments",
  () => (
    <div>
      <h1 className="sp-m2">Horizontal</h1>
      <div className="al al-hr--sm al-h-box">
        <b>al al-hr--sm</b>&nbsp;(align horizontal right between breakpoints sm
        and md)
      </div>
      <div className="al al-hr--sml al-h-box">
        <b>al al-hr--sml</b>&nbsp;(align horizontal right lower breakpoint sm)
      </div>
      <div className="al al-hr--smu al-h-box">
        <b>al al-hr--smu</b>&nbsp;(align horizontal right upper breakpoint sm)
      </div>
      <h1 className="sp-m2">Vertical</h1>
      <div className="al al-vb al-vc--md al-vt--lgu al-v-box">
        <b>al al-vb al-vc--md al-vt--lgu</b>&nbsp;(align by viewport)
      </div>
    </div>
  ),
  {
    notes: { markdown: alignmentResponsive }
  }
);
