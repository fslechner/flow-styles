import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Grid (gr)", module).add("Grid Layout Horizontal (gr-h)", () => (
  <div>
    <b>gr-h-one</b> (70px 70px auto)
    <div className="gr-h-one">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
    <br />
    <b>gr-h-two</b> (auto 30%)
    <div className="gr-h-two">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
    </div>
    <br />
    <b>gr-h-three</b> (20% auto 20%)
    <div className="gr-h-three">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
  </div>
));

storiesOf("Grid (gr)", module).add("Grid Layout Vertical (gr-v-one)", () => (
  <div>
    <b>gr-v-one</b> (70px 70px auto)
    <div className="gr-v-one">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
    <br />
    <b>gr-v-four</b> (100px auto 50vh)
    <div className="gr-v-four">
      <div className="ba-silver">Item 1</div>
      <div className="ba-petrol">Item 2</div>
      <div className="ba-petrol20">Item 3</div>
    </div>
  </div>
));

storiesOf("Grid (gr)", module).add(
  "Grid Layout Horizontal and Vertical (gr-h-one gr-v-four)",
  () => (
    <div>
      <b>gr-h-one gr-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="gr-h-one gr-v-four">
        <div className="gri-h1 gri-v1 ba-silver">Item 1</div>
        <div className="gri-h2 gri-v1 ba-petrol">Item 2</div>
        <div className="gri-h3 gri-v1 ba-petrol20">Item 3</div>
        <div className="gri-h1 gri-v2 ba-silver">Item 4</div>
        <div className="gri-h2 gri-h2 ba-petrol">Item 5</div>
        <div className="gri-h3 gri-h2 ba-petrol20">Item 6</div>
        <div className="gri-h1 gri-v3 ba-silver">Item 7</div>
        <div className="gri-h2 gri-v3 ba-petrol">Item 8</div>
        <div className="gri-h3 gri-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);
/* 
storiesOf("Grid (gr)", module).add(
  "Grid Layout with Media Queries (la la-sml-h-one)",
  () => (
    <div>
      <b>la la-sml-h-one la-smu-h-three</b> (sml: 70px 70px auto) (smu: 20% auto
      20%)
      <div className="la la-sml-h-one la-smu-h-three">
        <div className="ba-silver">Item 1</div>
        <div className="ba-petrol">Item 2</div>
        <div className="ba-petrol20">Item 3</div>
      </div>
      <br />
    </div>
  )
);
 */

storiesOf("Layout (la)", module).add(
  "Layout Horizontal and Vertical with symetric Gutters (la la-g2)",
  () => (
    <div>
      <b>la la-h-one la-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="la la-h-one la-v-four la-g2">
        <div className="ce-h1 ce-v1 ba-silver">Item 1</div>
        <div className="ce-h2 ce-v1 ba-petrol">Item 2</div>
        <div className="ce-h3 ce-v1 ba-petrol20">Item 3</div>
        <div className="ce-h1 ce-v2 ba-silver">Item 4</div>
        <div className="ce-h2 ce-h2 ba-petrol">Item 5</div>
        <div className="ce-h3 ce-h2 ba-petrol20">Item 6</div>
        <div className="ce-h1 ce-v3 ba-silver">Item 7</div>
        <div className="ce-h2 ce-v3 ba-petrol">Item 8</div>
        <div className="ce-h3 ce-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);

storiesOf("Layout (la)", module).add(
  "Layout Horizontal and Vertical with asymetric Gutters (la la-hg2 la-vg4)",
  () => (
    <div>
      <b>la la-h-one la-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="la la-h-one la-v-four la-hg2 la-vg4">
        <div className="ce-h1 ce-v1 ba-silver">Item 1</div>
        <div className="ce-h2 ce-v1 ba-petrol">Item 2</div>
        <div className="ce-h3 ce-v1 ba-petrol20">Item 3</div>
        <div className="ce-h1 ce-v2 ba-silver">Item 4</div>
        <div className="ce-h2 ce-h2 ba-petrol">Item 5</div>
        <div className="ce-h3 ce-h2 ba-petrol20">Item 6</div>
        <div className="ce-h1 ce-v3 ba-silver">Item 7</div>
        <div className="ce-h2 ce-v3 ba-petrol">Item 8</div>
        <div className="ce-h3 ce-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);

storiesOf("Layout (la)", module).add(
  "Layout Horizontal and Vertical with only Horizontal Gutters (la la-hg4)",
  () => (
    <div>
      <b>la la-h-one la-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="la la-h-one la-v-four la-hg4">
        <div className="ce-h1 ce-v1 ba-silver">Item 1</div>
        <div className="ce-h2 ce-v1 ba-petrol">Item 2</div>
        <div className="ce-h3 ce-v1 ba-petrol20">Item 3</div>
        <div className="ce-h1 ce-v2 ba-silver">Item 4</div>
        <div className="ce-h2 ce-h2 ba-petrol">Item 5</div>
        <div className="ce-h3 ce-h2 ba-petrol20">Item 6</div>
        <div className="ce-h1 ce-v3 ba-silver">Item 7</div>
        <div className="ce-h2 ce-v3 ba-petrol">Item 8</div>
        <div className="ce-h3 ce-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);

storiesOf("Layout (la)", module).add(
  "Layout Horizontal and Vertical with only Vertical Gutters (la la-vg4)",
  () => (
    <div>
      <b>la la-h-one la-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="la la-h-one la-v-four la-vg4">
        <div className="ce-h1 ce-v1 ba-silver">Item 1</div>
        <div className="ce-h2 ce-v1 ba-petrol">Item 2</div>
        <div className="ce-h3 ce-v1 ba-petrol20">Item 3</div>
        <div className="ce-h1 ce-v2 ba-silver">Item 4</div>
        <div className="ce-h2 ce-h2 ba-petrol">Item 5</div>
        <div className="ce-h3 ce-h2 ba-petrol20">Item 6</div>
        <div className="ce-h1 ce-v3 ba-silver">Item 7</div>
        <div className="ce-h2 ce-v3 ba-petrol">Item 8</div>
        <div className="ce-h3 ce-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);

storiesOf("Layout (la)", module).add(
  "Layout Gutters with Media Queries",
  () => (
    <div>
      <b>la la-h-one la-v-four</b> (h: 70px 70px auto) (v: 100px auto 50vh)
      <div className="la la-h-one la-v-four la-g2--sml la-g4--smu">
        <div className="ce-h1 ce-v1 ba-silver">Item 1</div>
        <div className="ce-h2 ce-v1 ba-petrol">Item 2</div>
        <div className="ce-h3 ce-v1 ba-petrol20">Item 3</div>
        <div className="ce-h1 ce-v2 ba-silver">Item 4</div>
        <div className="ce-h2 ce-h2 ba-petrol">Item 5</div>
        <div className="ce-h3 ce-h2 ba-petrol20">Item 6</div>
        <div className="ce-h1 ce-v3 ba-silver">Item 7</div>
        <div className="ce-h2 ce-v3 ba-petrol">Item 8</div>
        <div className="ce-h3 ce-v3 ba-petrol20">Item 9</div>
      </div>
    </div>
  )
);
