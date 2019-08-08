import React from "react";
import { storiesOf } from "@storybook/react";
import spacingDirection from "./spacing-direction.md";
import spacingResponsive from "./spacing-responsive.md";

storiesOf("Spacing (sp)", module).add(
  "Spacing All Directions",
  () => (
    <div>
      <h3>Margin All Directions</h3>
      <div>
        <div className="sp-m-4 ba-petrol">
          <b>sp-m-4</b>
        </div>
        <div className="sp-m-5 ba-petrol">
          <b>sp-m-5</b>
        </div>
        <div className="sp-m-6 ba-petrol">
          <b>sp-m-6</b>
        </div>
        <div className="sp-m-8 ba-petrol">
          <b>sp-m-8</b>
        </div>
        <div className="sp-m-16 ba-petrol">
          <b>sp-m-16</b>
        </div>
        <div className="sp-m-30 ba-petrol">
          <b>sp-m-30</b>
        </div>
      </div>
      <h3>Padding All Directions</h3>
      <div className="sp-inline-block">
        <div className="sp-p-0 sp-m-2 ba-petrol">
          <b>sp-p-0</b>
        </div>
        <div className="sp-p-1 sp-m-2 ba-petrol">
          <b>sp-p-1</b>
        </div>
        <div className="sp-p-2 sp-m2- ba-petrol">
          <b>sp-p-2</b>
        </div>
        <div className="sp-p-3 sp-m-2 ba-petrol">
          <b>sp-p-3</b>
        </div>
        <div className="sp-p-4 sp-m-2 ba-petrol">
          <b>sp-p-4</b>
        </div>
        <div className="sp-p-5 sp-m-2 ba-petrol">
          <b>sp-p-5</b>
        </div>
        <div className="sp-p-6 sp-m-2 ba-petrol">
          <b>sp-p-6</b>
        </div>
        <div className="sp-p-8 sp-m-2 ba-petrol">
          <b>sp-p-8</b>
        </div>
        <div className="sp-p-16 sp-m-2 ba-petrol">
          <b>sp-p-16</b>
        </div>
        <div className="sp-p-30 sp-m-2 ba-petrol">
          <b>sp-p-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Horizontal Directions",
  () => (
    <div>
      <h3>Margin Horizontal Direction</h3>
      <div>
        <div className="sp-mh-0 ba-petrol">
          <b>sp-mh-0</b>
        </div>
        <div className="sp-mh-1 ba-petrol">
          <b>sp-mh-1</b>
        </div>
        <div className="sp-mh-2 ba-petrol">
          <b>sp-mh-2</b>
        </div>
        -
        <div className="sp-mh-3 ba-petrol">
          <b>sp-mh-3</b>
        </div>
        <div className="sp-mh-4 ba-petrol">
          <b>sp-mh-4</b>
        </div>
        <div className="sp-mh-5 ba-petrol">
          <b>sp-mh-5</b>
        </div>
        <div className="sp-mh-6 ba-petrol">
          <b>sp-mh-6</b>
        </div>
        <div className="sp-mh-8 ba-petrol">
          <b>sp-mh-8</b>
        </div>
        <div className="sp-mh-16 ba-petrol">
          <b>sp-mh-16</b>
        </div>
        <div className="sp-mh-30 ba-petrol">
          <b>sp-mh-30</b>
        </div>
      </div>
      <h3>Padding Horizontal Direction</h3>
      <div>
        <div className="sp-ph-0 sp-m-2 ba-petrol">
          <b>sp-ph0</b>
        </div>
        <div className="sp-ph-1 sp-m-2 ba-petrol">
          <b>sp-ph1</b>
        </div>
        <div className="sp-ph-2 sp-m-2 ba-petrol">
          <b>sp-ph-2</b>
        </div>
        <div className="sp-ph-3 sp-m2- ba-petrol">
          <b>sp-ph-3</b>
        </div>
        <div className="sp-ph-4 sp-m-2 ba-petrol">
          <b>sp-ph-4</b>
        </div>
        <div className="sp-ph-5 sp-m-2 ba-petrol">
          <b>sp-ph-5</b>
        </div>
        <div className="sp-ph-6 sp-m-2 ba-petrol">
          <b>sp-ph-6</b>
        </div>
        <div className="sp-ph-8 sp-m-2 ba-petrol">
          <b>sp-ph-8</b>
        </div>
        <div className="sp-ph-16 sp-m-2 ba-petrol">
          <b>sp-ph-16</b>
        </div>
        <div className="sp-ph-30 sp-m-2 ba-petrol">
          <b>sp-ph-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Vertical Directions",
  () => (
    <div>
      <h3>Margin Vertical Direction</h3>
      <div>
        <div className="sp-mv-0 ba-petrol">
          <b>sp-mv-0</b>
        </div>
        <div className="sp-mv-1 ba-petrol">
          <b>sp-mv-1</b>
        </div>
        <div className="sp-mv-2 ba-petrol">
          <b>sp-mv-2</b>
        </div>
        <div className="sp-mv-3 ba-petrol">
          <b>sp-mv-3</b>
        </div>
        <div className="sp-mv-4 ba-petrol">
          <b>sp-mv-4</b>
        </div>
        <div className="sp-mv-5 ba-petrol">
          <b>sp-mv-5</b>
        </div>
        <div className="sp-mv-6 ba-petrol">
          <b>sp-mv-6</b>
        </div>
        <div className="sp-mv-8 ba-petrol">
          <b>sp-mv-8</b>
        </div>
        <div className="sp-mv-16 ba-petrol">
          <b>sp-mv-16</b>
        </div>
        <div className="sp-mv-30 ba-petrol">
          <b>sp-mv-30</b>
        </div>
      </div>
      <h3>Padding Vertical Direction</h3>
      <div>
        <div className="sp-pv-0 sp-m-2 ba-petrol">
          <b>sp-pv-0</b>
        </div>
        <div className="sp-pv-1 sp-m-2 ba-petrol">
          <b>sp-pv-1</b>
        </div>
        <div className="sp-pv-2 sp-m-2 ba-petrol">
          <b>sp-pv-2</b>
        </div>
        <div className="sp-pv-3 sp-m-2 ba-petrol">
          <b>sp-pv-3</b>
        </div>
        <div className="sp-pv-4 sp-m-2 ba-petrol">
          <b>sp-pv-4</b>
        </div>
        <div className="sp-pv-5 sp-m-2 ba-petrol">
          <b>sp-pv-5</b>
        </div>
        <div className="sp-pv-6 sp-m-2 ba-petrol">
          <b>sp-pv-6</b>
        </div>
        <div className="sp-pv-8 sp-m-2 ba-petrol">
          <b>sp-pv-8</b>
        </div>
        <div className="sp-pv-16 sp-m-2 ba-petrol">
          <b>sp-pv-16</b>
        </div>
        <div className="sp-pv-30 sp-m-2 ba-petrol">
          <b>sp-pv-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Top Directions",
  () => (
    <div>
      <h3>Margin Top Direction</h3>
      <div>
        <div className="sp-mt-0 ba-petrol">
          <b>sp-mt-0</b>
        </div>
        <div className="sp-mt-1 ba-petrol">
          <b>sp-mt-1</b>
        </div>
        <div className="sp-mt-2 ba-petrol">
          <b>sp-mt-2</b>
        </div>
        <div className="sp-mt-3 ba-petrol">
          <b>sp-mt-3</b>
        </div>
        <div className="sp-mt-4 ba-petrol">
          <b>sp-mt-4</b>
        </div>
        <div className="sp-mt-5 ba-petrol">
          <b>sp-mt-5</b>
        </div>
        <div className="sp-mt-6 ba-petrol">
          <b>sp-mt-6</b>
        </div>
        <div className="sp-mt-8 ba-petrol">
          <b>sp-mt-8</b>
        </div>
        <div className="sp-mt-16 ba-petrol">
          <b>sp-mt-16</b>
        </div>
        <div className="sp-mt-30 ba-petrol">
          <b>sp-mt-30</b>
        </div>
      </div>
      <h3>Padding Top Direction</h3>
      <div>
        <div className="sp-pt-0 sp-m-2 ba-petrol">
          <b>sp-pt-0</b>
        </div>
        <div className="sp-pt-1 sp-m-2 ba-petrol">
          <b>sp-pt-1</b>
        </div>
        <div className="sp-pt-2 sp-m-2 ba-petrol">
          <b>sp-pt-2</b>
        </div>
        <div className="sp-pt-3 sp-m-2 ba-petrol">
          <b>sp-pt-3</b>
        </div>
        <div className="sp-pt-4 sp-m-2 ba-petrol">
          <b>sp-pt-4</b>
        </div>
        <div className="sp-pt-5 sp-m-2 ba-petrol">
          <b>sp-pt-5</b>
        </div>
        <div className="sp-pt-6 sp-m-2 ba-petrol">
          <b>sp-pt-6</b>
        </div>
        <div className="sp-pt-8 sp-m-2 ba-petrol">
          <b>sp-pt-8</b>
        </div>
        <div className="sp-pt-16 sp-m-2 ba-petrol">
          <b>sp-pt-16</b>
        </div>
        <div className="sp-pt-30 sp-m-2 ba-petrol">
          <b>sp-pt-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Left Direction",
  () => (
    <div>
      <h3>Margin Left Direction</h3>
      <div>
        <div className="sp-ml-0 ba-petrol">
          <b>sp-ml-0</b>
        </div>
        <div className="sp-ml-1 ba-petrol">
          <b>sp-ml-1</b>
        </div>
        <div className="sp-ml-2 ba-petrol">
          <b>sp-ml-2</b>
        </div>
        <div className="sp-ml-3 ba-petrol">
          <b>sp-ml-3</b>
        </div>
        <div className="sp-ml-4 ba-petrol">
          <b>sp-ml-4</b>
        </div>
        <div className="sp-ml-5 ba-petrol">
          <b>sp-ml-5</b>
        </div>
        <div className="sp-ml-6 ba-petrol">
          <b>sp-ml-6</b>
        </div>
        <div className="sp-ml-8 ba-petrol">
          <b>sp-ml-8</b>
        </div>
        <div className="sp-ml-16 ba-petrol">
          <b>sp-ml-16</b>
        </div>
        <div className="sp-ml-30 ba-petrol">
          <b>sp-ml-30</b>
        </div>
      </div>
      <h3>Padding Left Direction</h3>
      <div>
        <div className="sp-pl-0 ba-petrol">
          <b>sp-pl-0</b>
        </div>
        <div className="sp-pl-1 ba-petrol">
          <b>sp-mp-1</b>
        </div>
        <div className="sp-pl-2 ba-petrol">
          <b>sp-pl-2</b>
        </div>
        <div className="sp-pl-3 ba-petrol">
          <b>sp-pl-3</b>
        </div>
        <div className="sp-pl-4 ba-petrol">
          <b>sp-pl-4</b>
        </div>
        <div className="sp-pl-5 ba-petrol">
          <b>sp-pl-5</b>
        </div>
        <div className="sp-pl-6 ba-petrol">
          <b>sp-pl-6</b>
        </div>
        <div className="sp-pl-8 ba-petrol">
          <b>sp-pl-8</b>
        </div>
        <div className="sp-pl-16 ba-petrol">
          <b>sp-pl-16</b>
        </div>
        <div className="sp-pl-30 ba-petrol">
          <b>sp-pl-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Bottom Direction",
  () => (
    <div>
      <h3>Margin Bottom Direction</h3>
      <div>
        <div className="sp-mb-0 ba-petrol">
          <b>sp-mb-0</b>
        </div>
        <div className="sp-mb-1 ba-petrol">
          <b>sp-mb-1</b>
        </div>
        <div className="sp-mb-2 ba-petrol">
          <b>sp-mb-2</b>
        </div>
        <div className="sp-mb-3 ba-petrol">
          <b>sp-mb-3</b>
        </div>
        <div className="sp-mb-4 ba-petrol">
          <b>sp-mb-4</b>
        </div>
        <div className="sp-mb-5 ba-petrol">
          <b>sp-mb-5</b>
        </div>
        <div className="sp-mb-6 ba-petrol">
          <b>sp-mb-6</b>
        </div>
        <div className="sp-mb-8 ba-petrol">
          <b>sp-mb-8</b>
        </div>
        <div className="sp-mb-16 ba-petrol">
          <b>sp-mb-16</b>
        </div>
        <div className="sp-mb-30 ba-petrol">
          <b>sp-mb-30</b>
        </div>
      </div>
      <h3>Padding Bottom Direction</h3>
      <div>
        <div className="sp-pb-0 ba-petrol">
          <b>sp-pb-0</b>
        </div>
        <div className="sp-pb-1 ba-petrol">
          <b>sp-pb-1</b>
        </div>
        <div className="sp-pb-2 ba-petrol">
          <b>sp-pb-2</b>
        </div>
        <div className="sp-pb-3 ba-petrol">
          <b>sp-pb-3</b>
        </div>
        <div className="sp-pb-4 ba-petrol">
          <b>sp-pb-4</b>
        </div>
        <div className="sp-pb-5 ba-petrol">
          <b>sp-pb-5</b>
        </div>
        <div className="sp-pb-6 ba-petrol">
          <b>sp-pb-6</b>
        </div>
        <div className="sp-pb-8 ba-petrol">
          <b>sp-pb-8</b>
        </div>
        <div className="sp-pb-16 ba-petrol">
          <b>sp-pb-16</b>
        </div>
        <div className="sp-pb-30 ba-petrol">
          <b>sp-pb-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Right Direction",
  () => (
    <div>
      <h3>Padding Right Direction</h3>
      <div>
        <div className="sp-mr-0 ba-petrol">
          <b>sp-mr-0</b>
        </div>
        <div className="sp-mr-1 ba-petrol">
          <b>sp-mr-1</b>
        </div>
        <div className="sp-mr-2 ba-petrol">
          <b>sp-mr-2</b>
        </div>
        <div className="sp-mr-3 ba-petrol">
          <b>sp-mr-3</b>
        </div>
        <div className="sp-mr-4 ba-petrol">
          <b>sp-mr-4</b>
        </div>
        <div className="sp-mr-5 ba-petrol">
          <b>sp-mr-5</b>
        </div>
        <div className="sp-mr-6 ba-petrol">
          <b>sp-mr-6</b>
        </div>
        <div className="sp-mr-8 ba-petrol">
          <b>sp-mr-8</b>
        </div>
        <div className="sp-mr-16 ba-petrol">
          <b>sp-mr16</b>
        </div>
        <div className="sp-mr-30 ba-petrol">
          <b>sp-mr-30</b>
        </div>
      </div>
      <h3>Padding Right Direction</h3>
      <div className="sp-inline fl fl-hw">
        <div className="sp-pr-0 sp-m-2 ba-petrol">
          <b>sp-pr-0</b>
        </div>
        <div className="sp-pr-1 sp-m-2 ba-petrol">
          <b>sp-pr-1</b>
        </div>
        <div className="sp-pr-2 sp-m-2 ba-petrol">
          <b>sp-pr-2</b>
        </div>
        <div className="sp-pr-3 sp-m-2 ba-petrol">
          <b>sp-pr-3</b>
        </div>
        <div className="sp-pr-4 sp-m-2 ba-petrol">
          <b>sp-pr-4</b>
        </div>
        <div className="sp-pr-5 sp-m-2 ba-petrol">
          <b>sp-pr-5</b>
        </div>
        <div className="sp-pr-6 sp-m-2 ba-petrol">
          <b>sp-pr-6</b>
        </div>
        <div className="sp-pr-8 sp-m-2 ba-petrol">
          <b>sp-pr-8</b>
        </div>
        <div className="sp-pr-16 sp-m-2 ba-petrol">
          <b>sp-pr-16</b>
        </div>
        <div className="sp-pr-30 sp-m-2 ba-petrol">
          <b>sp-pr-30</b>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingDirection }
  }
);

storiesOf("Spacing (sp)", module).add(
  "Spacing Responsive",
  () => (
    <div>
      <div className="sml:sp-p-1 smu:sp-p-6 lgu:sp-p-16 ba-petrol">
        Spacing by Viewport
      </div>
    </div>
  ),
  {
    notes: { markdown: spacingResponsive }
  }
);
