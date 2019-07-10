import React from "react";
import { storiesOf } from "@storybook/react";
import alignHorizontal from "./align-horizontal.md";
import alignVertical from "./align-vertical.md";
import alignResponsive from "./align-responsive.md";

storiesOf("Align (al)", module).add(
  "Align Horizontal",
  () => (
    <div className="">
      <div className="al-hl al-h-box">
        <b>al-hl</b>&nbsp;(align horizontal left)
      </div>
      <div className="al-hc al-h-box">
        <b>al-hc</b>&nbsp;(align horizontal center)
      </div>
      <div className="al-hr al-h-box">
        <b>al-hr</b>&nbsp;(align horizontal right)
      </div>
      <div className="al-hsa al-h-box">
        <span>
          <b>al-hsa</b>&nbsp;(align horizontal space-around)
        </span>
        <span>
          <b>al-hsa</b>&nbsp;(align horizontal space-around)
        </span>
      </div>
      <div className="al-hsb al-h-box">
        <span>
          <b>al-hsb</b>&nbsp;(align horizontal space-between)
        </span>
        <span>
          <b>al-hsb</b>&nbsp;(align horizontal space-between)
        </span>
      </div>
      <div className="al-hse al-h-box">
        <span>
          <b>al-hse</b>&nbsp;(align horizontal space-evenly)
        </span>
        <span>
          <b>al-hse</b>&nbsp;(align horizontal space-evenly)
        </span>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignHorizontal }
  }
);

storiesOf("Align (al)", module).add(
  "Align Vertical",
  () => (
    <div>
      <div className="al-vt al-v-box">
        <b>al-vt</b>&nbsp;(align vertical top)
      </div>
      <div className="al-vc al-v-box ">
        <b>al-vc</b>&nbsp;(align vertical center)
      </div>
      <div className="al-vb al-v-box ">
        <b>al-vb</b>&nbsp;(align vertical bottom)
      </div>
      <div className="al-vs al-v-box co-petrol ba-dark">
        <b>al-vs</b>&nbsp;(align vertical stretch)
      </div>
      <div className="al-vbl al-v-box">
        <b>al-vbl</b>&nbsp;(align vertical baseline)
      </div>
    </div>
  ),
  {
    notes: { markdown: alignVertical }
  }
);

storiesOf("Align (al)", module).add(
  "Align Direction",
  () => (
    <div className="sp-m4">
      <h3>Align Direction Horizontal</h3>
      <div className="al-dh fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Direction Horizontal Reverse</h3>
      <div className="al-dhr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Direction Vertical</h3>
      <div className="al-dv fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Direction Vertical Reverse</h3>
      <div className="al-dhr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Wrap</h3>
      <div className="al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Wrap Reverse</h3>
      <div className="al-dhwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Reverse Wrap</h3>
      <div className="al-dhrw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Reverse Wrap Reverse</h3>
      <div className="al-dhrwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Vertical Wrap</h3>
      <div className="al-dvw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical Wrap Reverse</h3>
      <div className="al-dvwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Vertical Reverse Wrap</h3>
      <div className="al-dvrw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Vertical Reverse Wrap Reverse</h3>
      <div className="al-dvrwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignVertical }
  }
);

storiesOf("Align (al)", module).add(
  "Align Content",
  () => (
    <div>
      <h3>Align Content Top: al-ct</h3>
      <div className="al-ct al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Center: al-cc</h3>
      <div className="al-cc al-dhw ">
        <div className="sp-m2">Itemfl-wrapper1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Bottom: al-cb</h3>
      <div className="al-cb al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Stretch: al-cs</h3>
      <div className="al-cs al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Space-Around: al-csa</h3>
      <div className="al-csa al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Space-Between: al-csb</h3>
      <div className="al-csb al-dhw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignVertical }
  }
);

storiesOf("Align (al)", module).add(
  "Align Responsive",
  () => (
    <div>
      <h3 className="sp-m2">Horizontal</h3>
      <div className="al-hr--sm al-h-box">
        <b>al-hr--sm</b>&nbsp;(align horizontal right between breakpoints sm and
        md)
      </div>
      <h3 className="sp-m2">Vertical</h3>
      <div className="al al-vc--sml al-v-box">
        <b>al al-vc--sml</b>&nbsp;(align vertical center lower breakpoint sm)
      </div>
      <h3 className="sp-m2">Direction</h3>
      <div className="al-dvw--sml al-dhw--smu fl-wrapper sp-m2">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3 className="sp-m2">Content</h3>
      <div className="al-ct--sml al-cb--smu al-dhw fl-wrapper sp-m2">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignResponsive }
  }
);
