import React from "react";
import { storiesOf } from "@storybook/react";
import cellPosition from "./cell-position.md";
import cellResponsive from "./cell-responsive.md";

storiesOf("Cell", module).add(
  "Cell Position",
  () => (
    <div>
      <h1>3 x 3 Grid and same value for each axis</h1>
      <div className="ce-layout">
        <div className="ce-1 ba-petrol al-c">
          <b>ce-1</b>
        </div>
        <div className="ce-2 ba-petrol al-c">
          <b>ce-2</b>
        </div>
        <div className="ce-3 ba-petrol al-c">
          <b>ce-3</b>
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
        <div className="ce-v2 ce-h1 ba-petrol al-c">
          <b>ce-v2 ce-h1</b>
        </div>
        <div className="ce-v3 ce-h2 ba-petrol al-c">
          <b>ce-v3 ce-h2</b>
        </div>
        <div className="ce-v1 ce-h3 ba-petrol al-c">
          <b>ce-v1 ce-h3</b>
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
        <div className="ce-h ba-petrol al-c">
          <b>ce-h</b>
        </div>
        <div className="ce-v3 ce-h ba-petrol al-c">
          <b>ce-v3 ce-h</b>
        </div>
        <div />
        <div />
        <div />
      </div>
      <h1>3 x 3 Grid and all vertical</h1>
      <div className="ce-layout">
        <div className="ce-v ba-petrol al-c">
          <b>ce-v</b>
        </div>
        <div className="ce-v ce-h3 ba-petrol al-c">
          <b>ce-v ce-h3</b>
        </div>
        <div />
        <div />
        <div />
      </div>
      <h1>3 x 3 Grid and inividual positioning</h1>
      <div className="ce-layout">
        <div />
        <div className="ce-vs1 ce-ve3 ce-hs2 ce-he4 ba-petrol al-c">
          <b>
            ce-vs1 ce-ve3 <br />
            ce-hs2 ce-he4
          </b>
        </div>
        <div className="ce-v3 ce-hs1 ce-he3 ba-petrol al-c">
          <b>
            ce-v3 <br />
            ce-hs1 ce-he3
          </b>
        </div>
        <div />
        <div />
      </div>
    </div>
  ),
  {
    notes: { markdown: cellPosition }
  }
);

storiesOf("Cell", module).add(
  "Cell Responsive",
  () => (
    <div>
      <div className="ce-layout">
        <div className="ce-3--xsl ce-2--xsu ce-1--lgu ba-petrol al-c">
          <b>
            ce-3--xsl <br />
            ce-2--xsu <br />
            ce-1--lgu
          </b>
        </div>
        <div className="ce-v2--xsl ce-h1--xsl ce-v1--xsu ce-h3--xsu ce-v3--lgu ce-h3--lgu ba-petrol al-c">
          <b>
            ce-v2--xsl ce-h1--xsl <br />
            ce-v1--xsu ce-h3--xsu <br />
            ce-v3--lgu ce-h3--lgu
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
    notes: { markdown: cellResponsive }
  }
);
