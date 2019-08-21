import React from "react";
import { storiesOf } from "@storybook/react";
import griditemFractalsPosition from "./griditem-fractals-position.md";

storiesOf("Griditem (gri)", module).add(
  "Griditem Fractals Position",
  () => (
    <div>
      <h3>3 x 3 Grid and same value for each axis</h3>
      <div className="gri-layout">
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

      <h3>3 x 3 Grid and different value for each axis</h3>
      <div className="gri-layout">
        <div className="gri-v-2 gri-h-1 ba-petrol al-c">
          <b>gri-v-2 gri-h-1</b>
        </div>
        <div className="gri-v-3 gri-h-2 ba-petrol al-c">
          <b>gri-v-3 gri-h-2</b>
        </div>
        <div className="gri-v-1 gri-h-3 ba-petrol al-c">
          <b>gri-v-1 gri-h-3</b>
        </div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <h3>3 x 3 Grid and all horizontal</h3>
      <div className="gri-layout">
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

      <h3>3 x 3 Grid and all vertical</h3>
      <div className="gri-layout">
        <div className="gri-v ba-petrol al-c">
          <b>gri-v</b>
        </div>
        <div className="gri-v gri-h-3 ba-petrol al-c">
          <b>gri-v gri-h-3</b>
        </div>
        <div />
        <div />
        <div />
      </div>

      <h3>3 x 3 Grid and inividual positioning</h3>
      <div className="gri-layout">
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
    notes: { markdown: griditemFractalsPosition }
  }
);
