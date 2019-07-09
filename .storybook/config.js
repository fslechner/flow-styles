import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/index.scss";
import "./storyclasses.scss";

// set custom viewports
const newViewports = {
  all: {
    name: "all",
    styles: {
      width: "100%",
      height: "100%"
    }
  },
  xs: {
    name: "xs",
    styles: {
      width: "480px",
      height: "100%"
    }
  },
  sm: {
    name: "sm",
    styles: {
      width: "768px",
      height: "100%"
    }
  },
  md: {
    name: "md",
    styles: {
      width: "992px",
      height: "100%"
    }
  },
  lg: {
    name: "lg",
    styles: {
      width: "1240px",
      height: "100%"
    }
  },
  xl: {
    name: "xl",
    styles: {
      width: "1440px",
      height: "100%"
    }
  },
  xxl: {
    name: "xxl",
    styles: {
      width: "1920px",
      height: "100%"
    }
  }
};

// add storybook info addon decorator globally
addDecorator(withInfo);

// Option defaults:
addParameters({
  viewport: { viewports: newViewports },
  options: {
    name: "Flow Styles",
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    panelPosition: "bottom",
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined
  }
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.jsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
