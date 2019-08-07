import React from "react";
import { storiesOf } from "@storybook/react";
import griditemPosition from "./griditem-position.md";
import griditemResponsive from "./griditem-responsive.md";

storiesOf("griditem", module).add(
  "griditem Position",
  () => (
    <div>
      <h1>3 x 3 Grid and same value for each axis</h1>
      <div className="ce-layout">
        <div className="gri-1 ba-petrol al-c">
          <b>gri-1</b>
        </div>
        <div className="gri-2 ba-petrol al-c">
          <b>gri-2</b>
        </div>
        <div className="gri-3 ba-petrol al-c">
          <b>gri-3</b>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <h1>3 x 3 Grid and different value for each axis</h1>
      <div className="ce-layout">
        <div className="gri-v-2 gri-h-1 ba-petrol al-c">
          <b>gri-v-2 gri-h-1</b>
        </div>
        <div className="gri-v-3 gri-h-2 ba-petrol al-c">
          <b>gri-v-3 gri-h-2</b>
        </div>
        <div className="gri-v-1 gri-h-3 ba-petrol al-c">
          <b>gri-v-1 ce-h-3</b>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <h1>3 x 3 Grid and all horizontal</h1>
      <div className="ce-layout">
        <div className="gri-h ba-petrol al-c">
          <b>gri-h</b>
        </div>
        <div className="gri-v-3 gri-h ba-petrol al-c">
          <b>gri-v-3 gri-h</b>
        </div>
        <div />
        <div />
        <div />
      </div>
      <h1>3 x 3 Grid and all vertical</h1>
      <div className="ce-layout">
        <div className="gri-v ba-petrol al-c">
          <b>gri-v</b>
        </div>
        <div className="gri-v gri-h-3 ba-petrol al-c">
          <b>gri-v ce-h-3</b>
        </div>
        <div />
        <div />
        <div />
      </div>
      <h1>3 x 3 Grid and inividual positioning</h1>
      <div className="ce-layout">
        <div />
        <div className="gri-vs-1 gri-ve-3 gri-hs-2 gri-he-4 ba-petrol al-c">
          <b>
            gri-vs-1 gri-ve-3 <br />
            gri-hs-2 gri-he-4
          </b>
        </div>
        <div className="gri-v-3 gri-hs-1 gri-he-3 ba-petrol al-c">
          <b>
            gri-v-3 <br />
            gri-hs-1 gri-he-3
          </b>
        </div>
        <div />
        <div />
      </div>
    </div>
  ),
  {
    notes: { markdown: griditemPosition }
  }
);

storiesOf("griditem", module).add(
  "griditem Responsive",
  () => (
    <div>
      <div className="ce-layout">
        <div className="xsl:gri-3 xsu:gri-2 lgu:gri-1 ba-petrol al-c">
          <b>
            xsl:gri-3 <br />
            xsu:gri-2 <br />
            lgu:gri-1
          </b>
        </div>
        <div className="gri-v-2 gri-h-1 gri-v-1 gri-h-3 gri-v-3 gri-h-3 ba-petrol al-c">
          <b>
            xsl:gri-v2 xsl:gri-h1 <br />
            xsu:gri-v1 xsu:gri-h3 <br />
            lgu:gri-v3 lgu:gri-h3
          </b>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  ),
  {
    notes: { markdown: griditemResponsive }
  }
);
