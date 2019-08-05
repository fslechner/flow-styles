import React from "react";
import { storiesOf } from "@storybook/react";
import headingStyle from "./heading-style.md";
import headingSize from "./heading-size.md";

storiesOf("Heading", module).add(
  "Heading Styles",
  () => (
    <div>
      <div className="he-p sp-m2">
        <b>he-p</b>: Heading style primary with inherit size
      </div>
      <div className="he-s sp-m2">
        <b>he-s</b>: Heading style secondary with inherit size
      </div>
      <div className="he-t sp-m2">
        <b>he-t</b>: Heading style tertiary with inherit size
      </div>
      <div className="he-q sp-m2">
        <b>he-q</b>: Heading style quaternary with inherit size
      </div>
    </div>
  ),
  {
    notes: { markdown: headingStyle }
  }
);

storiesOf("Heading", module).add(
  "Heading Sizes",
  () => (
    <div>
      <div className="he-p-h1">he-p-h1: Heading style primary size h1</div>
      <div className="he-p-h2">he-p-h2: Heading style primary size h2</div>
      <div className="he-p-h3">he-p-h3: Heading style primary size h3</div>
      <div className="he-p-h4">he-p-h4: Heading style primary size h4</div>
      <div className="he-p-h5">he-p-h5: Heading style primary size h5</div>
      <div className="he-p-h6">he-p-h6: Heading style primary size h6</div>
    </div>
  ),
  {
    notes: { markdown: headingSize }
  }
);

storiesOf("Heading", module).add(
  "Heading Responsive",
  () => (
    <div>
      <div className="he-p-h6--sml he-p-h4--sm he-p-h3--md he-p-h2--lg he-p-h1--lgu">
        Heading by Viewport
      </div>
    </div>
  ),
  {
    notes: { markdown: headingResponsive }
  }
);
