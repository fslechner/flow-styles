import React from "react";
import { storiesOf } from "@storybook/react";
import alignHorizontal from "./align-horizontal.md";
import alignVertical from "./align-vertical.md";
import alignDirection from "./align-direction.md";
import alignContent from "./align-content.md";

storiesOf("Align (al)", module).add(
  "Align Horizontal",
  () => (
    <div className="">
      <div className="al-h-l al-h-box sp-m2">
        <b>al-h-l</b>&nbsp;(align horizontal left)
      </div>
      <div className="al-h-c al-h-box sp-m2">
        <b>al-h-c</b>&nbsp;(align horizontal center)
      </div>
      <div className="al-h-r al-h-box sp-m2">
        <b>al-h-r</b>&nbsp;(align horizontal right)
      </div>
      <div className="al-h-sa al-h-box sp-m2">
        <span>
          <b>al-h-sa</b>&nbsp;(align horizontal space-around)
        </span>
        <span>
          <b>al-h-sa</b>&nbsp;(align horizontal space-around)
        </span>
      </div>
      <div className="al-h-sb al-h-box sp-m2">
        <span>
          <b>al-h-sb</b>&nbsp;(align horizontal space-between)
        </span>
        <span>
          <b>al-h-sb</b>&nbsp;(align horizontal space-between)
        </span>
      </div>
      <div className="al-h-se al-h-box sp-m2">
        <span>
          <b>al-h-se</b>&nbsp;(align horizontal space-evenly)
        </span>
        <span>
          <b>al-h-se</b>&nbsp;(align horizontal space-evenly)
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
      <div className="al-v-t al-v-box sp-m2">
        <b>al-v-t</b>&nbsp;(align vertical top)
      </div>
      <div className="al-v-c al-v-box sp-m2">
        <b>al-v-c</b>&nbsp;(align vertical center)
      </div>
      <div className="al-v-b al-v-box sp-m2">
        <b>al-v-b</b>&nbsp;(align vertical bottom)
      </div>
      <div className="al-v-s al-v-box co-petrol ba-dark sp-m2">
        <b>al-v-s</b>&nbsp;(align vertical stretch)
      </div>
      <div className="al-v-bl al-v-box sp-m2">
        <b>al-v-bl</b>&nbsp;(align vertical baseline)
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
      <h3>Align Direction Horizontal: al-d-h</h3>
      <div className="al-d-h fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Direction Horizontal Reverse: al-d-hr</h3>
      <div className="al-d-hr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Wrap: al-d-hw</h3>
      <div className="al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Wrap Reverse: al-d-hwr</h3>
      <div className="al-d-hwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Reverse Wrap: al-d-hrw</h3>
      <div className="al-d-hrw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Horizontal Reverse Wrap Reverse: al-d-hrwr</h3>
      <div className="al-d-hrwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Direction Vertical: al-d-v</h3>
      <div className="al-d-v fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Direction Vertical Reverse: al-d-vr</h3>
      <div className="al-d-vr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>

      <h3>Align Vertical Wrap: al-d-vw</h3>
      <div className="al-d-vw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Vertical Wrap Reverse: al-d-vwr</h3>
      <div className="al-d-vwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Vertical Reverse Wrap: al-d-vrw</h3>
      <div className="al-d-vrw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Vertical Reverse Wrap Reverse: al-d-vrwr</h3>
      <div className="al-d-vrwr fl-wrapper">
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
    notes: { markdown: alignDirection }
  }
);

storiesOf("Align (al)", module).add(
  "Align Content",
  () => (
    <div>
      <h3>Align Content Top: al-c-t</h3>
      <div className="al-c-t al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Center: al-c-c</h3>
      <div className="al-c-c al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Bottom: al-c-b</h3>
      <div className="al-c-b al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Stretch: al-c-s</h3>
      <div className="al-c-s al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Space-Around: al-c-sa</h3>
      <div className="al-c-sa al-d-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Align Content Space-Between: al-c-sb</h3>
      <div className="al-c-sb al-d-hw fl-wrapper">
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
    notes: { markdown: alignContent }
  }
);

storiesOf("Align (al)", module).add("Align Responsive", () => (
  <div className="sp-m2">
    <h3>Horizontal: sm:al-h-r</h3>
    <div className="sm:al-h-r al-h-box">
      Align horizontal right between breakpoints sm and md
    </div>
    <h3>Vertical: sml:al-vc</h3>
    <div className="sml:al-v-c al-v-box">
      Align vertical center lower breakpoint sm
    </div>
    <h3>Direction: sml:al-d-vw smu:al-d-hw</h3>
    <p>Change align direction at breakpoint sm</p>
    <div className="sml:al-d-vw smu:al-d-hw fl-wrapper">
      <div className="sp-m2">Item1</div>
      <div className="sp-m2">Item2</div>
      <div className="sp-m2">Item3</div>
      <div className="sp-m2">Item4</div>
      <div className="sp-m2">Item5</div>
      <div className="sp-m2">Item6</div>
    </div>
    <h3>Content: sml:al-c-t smu:al-c-b</h3>
    <p>Change align content at breakpoint sm</p>
    <div className="sml:al-c-t smu:al-c-b al-d-hw fl-wrapper">
      <div className="sp-m2">Item1</div>
      <div className="sp-m2">Item2</div>
      <div className="sp-m2">Item3</div>
      <div className="sp-m2">Item4</div>
      <div className="sp-m2">Item5</div>
      <div className="sp-m2">Item6</div>
    </div>
  </div>
));
