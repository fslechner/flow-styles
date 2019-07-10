import React from "react";
import { storiesOf } from "@storybook/react";
import alignitemAlignself from "./alignitem-alignself.md";
import alignitemGrow from "./alignitem-grow.md";
import alignitemShrink from "./alignitem-shrink.md";
import alignitemOrder from "./alignitem-order.md";
import alignitemResponsive from "./alignitem-responsive.md";

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Align-Self",
  () => (
    <div>
      <div className="ba-dark sp-p2 co-silver">
        <b>ba-dark</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemAlignself }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Grow",
  () => (
    <div>
      <div className="ba-dark sp-p2 co-silver">
        <b>ba-dark</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemGrow }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Shrink",
  () => (
    <div>
      <div className="ba-dark sp-p2 co-silver">
        <b>ba-dark</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemShrink }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Order",
  () => (
    <div>
      <div className="ba-dark sp-p2 co-silver">
        <b>ba-dark</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemOrder }
  }
);

storiesOf("Alignitem (ali)", module).add(
  "Alignitem Responsive",
  () => (
    <div>
      <div className="ba-dark sp-p2 co-silver">
        <b>ba-dark</b>
      </div>
    </div>
  ),
  {
    notes: { markdown: alignitemResponsive }
  }
);
