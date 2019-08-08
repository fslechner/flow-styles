import React from "react";
import { storiesOf } from "@storybook/react";
import headingStyle from "./heading-style.md";
import headingSize from "./heading-size.md";

storiesOf("Heading (he)", module).add(
  "Heading Styles",
  () => (
    <div>
      <div className="he-h1-p sp-m-2">
        <b>he-h1-p</b>: Heading size h1 style primary
      </div>
      <div className="he-h1-s sp-m-2">
        <b>he-h1-s</b>: Heading size h1 style secondary
      </div>
      <div className="he-h1-t sp-m-2">
        <b>he-h1-t</b>: Heading size h1 style tertiary
      </div>
      <div className="he-h1-q sp-m-2">
        <b>he-h1-q</b>: Heading size h1 style quaternary
      </div>
    </div>
  ),
  {
    notes: { markdown: headingStyle }
  }
);

storiesOf("Heading (he)", module).add(
  "Heading Sizes",
  () => (
    <div>
      <div className="he-h1-p">he-h1-p: Heading size h1 style primary</div>
      <div className="he-h2-p">he-h2-p: Heading size h2 style primary</div>
      <div className="he-h3-p">he-h3-p: Heading size h3 style primary</div>
      <div className="he-h4-p">he-h4-p: Heading size h4 style primary</div>
      <div className="he-h5-p">he-h5-p: Heading size h5 style primary</div>
      <div className="he-h6-p">he-h6-p: Heading size h6 style primary</div>
    </div>
  ),
  {
    notes: { markdown: headingSize }
  }
);

storiesOf("Heading (he)", module).add(
  "Heading Responsive",
  () => (
    <div>
      <div className="sml:he-h6-p sm:he-h4-p md:he-h3-p lg:he-h2-p lgu:he-h1-p">
        Heading by Viewport
      </div>
    </div>
  ),
  {
    notes: { markdown: headingResponsive }
  }
);
