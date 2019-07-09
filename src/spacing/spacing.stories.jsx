import React from "react";
import { storiesOf } from "@storybook/react";
import spacingDirection from "./spacing-direction.md";
import spacingResponsive from "./spacing-responsive.md";

storiesOf("Spacing", module).add(
  "Spacing All Directions",
  () => (
    <div>
      <h3>Margin All Directions</h3>
      <div>
        <div className="sp-m4 ba-petrol">
          <b>sp-m4</b>
        </div>
        <div className="sp-m5 ba-petrol">
          <b>sp-m5</b>
        </div>
        <div className="sp-m6 ba-petrol">
          <b>sp-m6</b>
        </div>
        <div className="sp-m8 ba-petrol">
          <b>sp-m8</b>
        </div>
        <div className="sp-m16 ba-petrol">
          <b>sp-m16</b>
        </div>
        <div className="sp-m30 ba-petrol">
          <b>sp-m30</b>
        </div>
      </div>
      <h3>Padding All Directions</h3>
      <div className="sp-inline-block">
        <div className="sp-p0 sp-m2 ba-petrol">
          <b>sp-p0</b>
        </div>
        <div className="sp-p1 sp-m2 ba-petrol">
          <b>sp-p1</b>
        </div>
        <div className="sp-p2 sp-m2 ba-petrol">
          <b>sp-p2</b>
        </div>
        <div className="sp-p3 sp-m2 ba-petrol">
          <b>sp-p3</b>
        </div>
        <div className="sp-p4 sp-m2 ba-petrol">
          <b>sp-p4</b>
        </div>
        <div className="sp-p5 sp-m2 ba-petrol">
          <b>sp-p5</b>
        </div>
        <div className="sp-p6 sp-m2 ba-petrol">
          <b>sp-p6</b>
        </div>
        <div className="sp-p8 sp-m2 ba-petrol">
          <b>sp-p8</b>
        </div>
        <div className="sp-p16 sp-m2 ba-petrol">
          <b>sp-p16</b>
        </div>
        <div className="sp-p30 sp-m2 ba-petrol">
          <b>sp-p30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Horizontal Directions",
  () => (
    <div>
      <h3>Margin Horizontal Direction</h3>
      <div>
        <div className="sp-mh0 ba-petrol">
          <b>sp-mh0</b>
        </div>
        <div className="sp-mh1 ba-petrol">
          <b>sp-mh1</b>
        </div>
        <div className="sp-mh2 ba-petrol">
          <b>sp-mh2</b>
        </div>
        <div className="sp-mh3 ba-petrol">
          <b>sp-mh3</b>
        </div>
        <div className="sp-mh4 ba-petrol">
          <b>sp-mh4</b>
        </div>
        <div className="sp-mh5 ba-petrol">
          <b>sp-mh5</b>
        </div>
        <div className="sp-mh6 ba-petrol">
          <b>sp-mh6</b>
        </div>
        <div className="sp-mh8 ba-petrol">
          <b>sp-mh8</b>
        </div>
        <div className="sp-mh16 ba-petrol">
          <b>sp-mh16</b>
        </div>
        <div className="sp-mh30 ba-petrol">
          <b>sp-mh30</b>
        </div>
      </div>
      <h3>Padding Horizontal Direction</h3>
      <div>
        <div className="sp-ph0 sp-m2 ba-petrol">
          <b>sp-ph0</b>
        </div>
        <div className="sp-ph1 sp-m2 ba-petrol">
          <b>sp-ph1</b>
        </div>
        <div className="sp-ph2 sp-m2 ba-petrol">
          <b>sp-ph2</b>
        </div>
        <div className="sp-ph3 sp-m2 ba-petrol">
          <b>sp-ph3</b>
        </div>
        <div className="sp-ph4 sp-m2 ba-petrol">
          <b>sp-ph4</b>
        </div>
        <div className="sp-ph5 sp-m2 ba-petrol">
          <b>sp-ph5</b>
        </div>
        <div className="sp-ph6 sp-m2 ba-petrol">
          <b>sp-ph6</b>
        </div>
        <div className="sp-ph8 sp-m2 ba-petrol">
          <b>sp-ph8</b>
        </div>
        <div className="sp-ph16 sp-m2 ba-petrol">
          <b>sp-ph16</b>
        </div>
        <div className="sp-ph30 sp-m2 ba-petrol">
          <b>sp-ph30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Vertical Directions",
  () => (
    <div>
      <h3>Margin Vertical Direction</h3>
      <div>
        <div className="sp-mv0 ba-petrol">
          <b>sp-mv0</b>
        </div>
        <div className="sp-mv1 ba-petrol">
          <b>sp-mv1</b>
        </div>
        <div className="sp-mv2 ba-petrol">
          <b>sp-mv2</b>
        </div>
        <div className="sp-mv3 ba-petrol">
          <b>sp-mv3</b>
        </div>
        <div className="sp-mv4 ba-petrol">
          <b>sp-mv4</b>
        </div>
        <div className="sp-mv5 ba-petrol">
          <b>sp-mv5</b>
        </div>
        <div className="sp-mv6 ba-petrol">
          <b>sp-mv6</b>
        </div>
        <div className="sp-mv8 ba-petrol">
          <b>sp-mv8</b>
        </div>
        <div className="sp-mv16 ba-petrol">
          <b>sp-mv16</b>
        </div>
        <div className="sp-mv30 ba-petrol">
          <b>sp-mv30</b>
        </div>
      </div>
      <h3>Padding Vertical Direction</h3>
      <div>
        <div className="sp-pv0 sp-m2 ba-petrol">
          <b>sp-pv0</b>
        </div>
        <div className="sp-pv1 sp-m2 ba-petrol">
          <b>sp-pv1</b>
        </div>
        <div className="sp-pv2 sp-m2 ba-petrol">
          <b>sp-pv2</b>
        </div>
        <div className="sp-pv3 sp-m2 ba-petrol">
          <b>sp-pv3</b>
        </div>
        <div className="sp-pv4 sp-m2 ba-petrol">
          <b>sp-pv4</b>
        </div>
        <div className="sp-pv5 sp-m2 ba-petrol">
          <b>sp-pv5</b>
        </div>
        <div className="sp-pv6 sp-m2 ba-petrol">
          <b>sp-pv6</b>
        </div>
        <div className="sp-pv8 sp-m2 ba-petrol">
          <b>sp-pv8</b>
        </div>
        <div className="sp-pv16 sp-m2 ba-petrol">
          <b>sp-pv16</b>
        </div>
        <div className="sp-pv30 sp-m2 ba-petrol">
          <b>sp-pv30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Top Directions",
  () => (
    <div>
      <h3>Margin Top Direction</h3>
      <div>
        <div className="sp-mt0 ba-petrol">
          <b>sp-mt0</b>
        </div>
        <div className="sp-mt1 ba-petrol">
          <b>sp-mt1</b>
        </div>
        <div className="sp-mt2 ba-petrol">
          <b>sp-mt2</b>
        </div>
        <div className="sp-mt3 ba-petrol">
          <b>sp-mt3</b>
        </div>
        <div className="sp-mt4 ba-petrol">
          <b>sp-mt4</b>
        </div>
        <div className="sp-mt5 ba-petrol">
          <b>sp-mt5</b>
        </div>
        <div className="sp-mt6 ba-petrol">
          <b>sp-mt6</b>
        </div>
        <div className="sp-mt8 ba-petrol">
          <b>sp-mt8</b>
        </div>
        <div className="sp-mt16 ba-petrol">
          <b>sp-mt16</b>
        </div>
        <div className="sp-mt30 ba-petrol">
          <b>sp-mt30</b>
        </div>
      </div>
      <h3>Padding Top Direction</h3>
      <div>
        <div className="sp-pt0 sp-m2 ba-petrol">
          <b>sp-pt0</b>
        </div>
        <div className="sp-pt1 sp-m2 ba-petrol">
          <b>sp-pt1</b>
        </div>
        <div className="sp-pt2 sp-m2 ba-petrol">
          <b>sp-pt2</b>
        </div>
        <div className="sp-pt3 sp-m2 ba-petrol">
          <b>sp-pt3</b>
        </div>
        <div className="sp-pt4 sp-m2 ba-petrol">
          <b>sp-pt4</b>
        </div>
        <div className="sp-pt5 sp-m2 ba-petrol">
          <b>sp-pt5</b>
        </div>
        <div className="sp-pt6 sp-m2 ba-petrol">
          <b>sp-pt6</b>
        </div>
        <div className="sp-pt8 sp-m2 ba-petrol">
          <b>sp-pt8</b>
        </div>
        <div className="sp-pt16 sp-m2 ba-petrol">
          <b>sp-pt16</b>
        </div>
        <div className="sp-pt30 sp-m2 ba-petrol">
          <b>sp-pt30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Left Direction",
  () => (
    <div>
      <h3>Margin Left Direction</h3>
      <div>
        <div className="sp-ml0 ba-petrol">
          <b>sp-ml0</b>
        </div>
        <div className="sp-ml1 ba-petrol">
          <b>sp-ml1</b>
        </div>
        <div className="sp-ml2 ba-petrol">
          <b>sp-ml2</b>
        </div>
        <div className="sp-ml3 ba-petrol">
          <b>sp-ml3</b>
        </div>
        <div className="sp-ml4 ba-petrol">
          <b>sp-ml4</b>
        </div>
        <div className="sp-ml5 ba-petrol">
          <b>sp-ml5</b>
        </div>
        <div className="sp-ml6 ba-petrol">
          <b>sp-ml6</b>
        </div>
        <div className="sp-ml8 ba-petrol">
          <b>sp-ml8</b>
        </div>
        <div className="sp-ml16 ba-petrol">
          <b>sp-ml16</b>
        </div>
        <div className="sp-ml30 ba-petrol">
          <b>sp-ml30</b>
        </div>
      </div>
      <h3>Padding Left Direction</h3>
      <div>
        <div className="sp-pl0 ba-petrol">
          <b>sp-pl0</b>
        </div>
        <div className="sp-pl1 ba-petrol">
          <b>sp-mp1</b>
        </div>
        <div className="sp-pl2 ba-petrol">
          <b>sp-pl2</b>
        </div>
        <div className="sp-pl3 ba-petrol">
          <b>sp-pl3</b>
        </div>
        <div className="sp-pl4 ba-petrol">
          <b>sp-pl4</b>
        </div>
        <div className="sp-pl5 ba-petrol">
          <b>sp-pl5</b>
        </div>
        <div className="sp-pl6 ba-petrol">
          <b>sp-pl6</b>
        </div>
        <div className="sp-pl8 ba-petrol">
          <b>sp-pl8</b>
        </div>
        <div className="sp-pl16 ba-petrol">
          <b>sp-pl16</b>
        </div>
        <div className="sp-pl30 ba-petrol">
          <b>sp-pl30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Bottom Direction",
  () => (
    <div>
      <h3>Margin Bottom Direction</h3>
      <div>
        <div className="sp-mb0 ba-petrol">
          <b>sp-mb0</b>
        </div>
        <div className="sp-mb1 ba-petrol">
          <b>sp-mb1</b>
        </div>
        <div className="sp-mb2 ba-petrol">
          <b>sp-mb2</b>
        </div>
        <div className="sp-mb3 ba-petrol">
          <b>sp-mb3</b>
        </div>
        <div className="sp-mb4 ba-petrol">
          <b>sp-mb4</b>
        </div>
        <div className="sp-mb5 ba-petrol">
          <b>sp-mb5</b>
        </div>
        <div className="sp-mb6 ba-petrol">
          <b>sp-mb6</b>
        </div>
        <div className="sp-mb8 ba-petrol">
          <b>sp-mb8</b>
        </div>
        <div className="sp-mb16 ba-petrol">
          <b>sp-mb16</b>
        </div>
        <div className="sp-mb30 ba-petrol">
          <b>sp-mb30</b>
        </div>
      </div>
      <h3>Padding Bottom Direction</h3>
      <div>
        <div className="sp-pb0 ba-petrol">
          <b>sp-pb0</b>
        </div>
        <div className="sp-pb1 ba-petrol">
          <b>sp-pb1</b>
        </div>
        <div className="sp-pb2 ba-petrol">
          <b>sp-pb2</b>
        </div>
        <div className="sp-pb3 ba-petrol">
          <b>sp-pb3</b>
        </div>
        <div className="sp-pb4 ba-petrol">
          <b>sp-pb4</b>
        </div>
        <div className="sp-pb5 ba-petrol">
          <b>sp-pb5</b>
        </div>
        <div className="sp-pb6 ba-petrol">
          <b>sp-pb6</b>
        </div>
        <div className="sp-pb8 ba-petrol">
          <b>sp-pb8</b>
        </div>
        <div className="sp-pb16 ba-petrol">
          <b>sp-pb16</b>
        </div>
        <div className="sp-pb30 ba-petrol">
          <b>sp-pb30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Right Direction",
  () => (
    <div>
      <h3>Padding Right Direction</h3>
      <div>
        <div className="sp-mr0 ba-petrol">
          <b>sp-mr0</b>
        </div>
        <div className="sp-mr1 ba-petrol">
          <b>sp-mr1</b>
        </div>
        <div className="sp-mr2 ba-petrol">
          <b>sp-mr2</b>
        </div>
        <div className="sp-mr3 ba-petrol">
          <b>sp-mr3</b>
        </div>
        <div className="sp-mr4 ba-petrol">
          <b>sp-mr4</b>
        </div>
        <div className="sp-mr5 ba-petrol">
          <b>sp-mr5</b>
        </div>
        <div className="sp-mr6 ba-petrol">
          <b>sp-mr6</b>
        </div>
        <div className="sp-mr8 ba-petrol">
          <b>sp-mr8</b>
        </div>
        <div className="sp-mr16 ba-petrol">
          <b>sp-mr16</b>
        </div>
        <div className="sp-mr30 ba-petrol">
          <b>sp-mr30</b>
        </div>
      </div>
      <h3>Padding Right Direction</h3>
      <div className="sp-inline fl fl-hw">
        <div className="sp-pr0 sp-m2 ba-petrol">
          <b>sp-pr0</b>
        </div>
        <div className="sp-pr1 sp-m2 ba-petrol">
          <b>sp-pr1</b>
        </div>
        <div className="sp-pr2 sp-m2 ba-petrol">
          <b>sp-pr2</b>
        </div>
        <div className="sp-pr3 sp-m2 ba-petrol">
          <b>sp-pr3</b>
        </div>
        <div className="sp-pr4 sp-m2 ba-petrol">
          <b>sp-pr4</b>
        </div>
        <div className="sp-pr5 sp-m2 ba-petrol">
          <b>sp-pr5</b>
        </div>
        <div className="sp-pr6 sp-m2 ba-petrol">
          <b>sp-pr6</b>
        </div>
        <div className="sp-pr8 sp-m2 ba-petrol">
          <b>sp-pr8</b>
        </div>
        <div className="sp-pr16 sp-m2 ba-petrol">
          <b>sp-pr16</b>
        </div>
        <div className="sp-pr30 sp-m2 ba-petrol">
          <b>sp-pr30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing", module).add(
  "Spacing Responsive",
  () => (
    <div>
      <div className="sp-p2--sml sp-p6--smu sp-p16--lgu ba-petrol">
        Spacing by Viewport
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingResponsive }
  }
);
