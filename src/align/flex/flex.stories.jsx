import React from "react";
import { storiesOf } from "@storybook/react";
import flexDirection from "./flex-direction.md";
import flexWrap from "./flex-wrap.md";
import flexResponsive from "./flex-responsive.md";

storiesOf("Flex (fl)", module).add(
  "Flex Direction",
  () => (
    <div className="sp-m4">
      <h3>Flex Horizontal</h3>
      <div className="fl fl-h fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Horizontal Reverse</h3>
      <div className="fl fl-hr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical</h3>
      <div className="fl fl-v fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical Reverse</h3>
      <div className="fl fl-vr fl-wrapper">
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
    notes: { markdown: flexDirection }
  }
);

storiesOf("Flex (fl)", module).add(
  "Flex Wrap",
  () => (
    <div className="sp-m4">
      <h3>Flex Horizontal Wrap</h3>
      <div className="fl fl-hw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Horizontal Wrap Reverse</h3>
      <div className="fl fl-hwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Horizontal Reverse Wrap</h3>
      <div className="fl fl-hrw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Horizontal Reverse Wrap Reverse</h3>
      <div className="fl fl-hrwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical Wrap</h3>
      <div className="fl fl-vw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical Wrap Reverse</h3>
      <div className="fl fl-vwr fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical Reverse Wrap</h3>
      <div className="fl fl-vrw fl-wrapper">
        <div className="sp-m2">Item1</div>
        <div className="sp-m2">Item2</div>
        <div className="sp-m2">Item3</div>
        <div className="sp-m2">Item4</div>
        <div className="sp-m2">Item5</div>
        <div className="sp-m2">Item6</div>
      </div>
      <h3>Flex Vertical Reverse Wrap Reverse</h3>
      <div className="fl fl-vrwr fl-wrapper">
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
    notes: { markdown: flexWrap }
  }
);

storiesOf("Flex (fl)", module).add(
  "Flex Responsive",
  () => (
    <div>
      <div className="fl fl-vw--sml fl-vrw--sm fl-hrw--md fl-vrwr--lg fl-h--xlu fl-wrapper">
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
    notes: { markdown: flexResponsive }
  }
);
