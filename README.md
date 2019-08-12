# What is FlowStyles?

FlowStyles is a fully responsive Atomic CSS Library based on Sass. It offers you a set of CSS-Classes which covers the most common styling use-cases. FlowStyles is a compromise between ease of use and the full power of CSS with focus on ease of use. It also encourage you to define a simple Styleguide for your Project to get more consistent stylings.

FlowStyles fits best in combination with Component Driven Development where you can use complex stylings together with FlowStyles inside specific Components and arrange Components only with FlowStyles. Try it out and keep your Development Flow with FlowStyles! **But keep in mind, it's still in development and not completly tested!**

# Why FlowStyles?

FlowStyles has three main goals:

1. Speed up CSS development
2. Simplify CSS development
3. Increase CSS code quality

## Speed up CSS development

With FlowStyles you can speed up CSS development in two ways. Firstly, in writing much less code by using predefined FlowStyles classes without writing CSS. Secondly, because you must think much less about how to structure your CSS code to keep it clean, simple, small and consistent.

## Simplify CSS development

FlowStyles simplify CSS development by reducing the complexity of CSS to the most common use-cases. Therefore, it is easier to learn and easier to use than native CSS. It is very suitable for Developers without or with only less CSS knowledge.

## Increase CSS code quality

When using FlowStyles-Classes you don’t have to care about CSS code quality. FlowStyles are always clean, simple, small and consistent.

# How to use FlowStyles?

1. Define your Project-Styleguide like Colors, Text, Headings, Borders and Spacings. You can also mix your Styleguide with the predefined Styleguide.
2. Use FlowStyles classes in your HTML, Lit-HTML or JSX and combine it with usual Sass where necessary.
3. Use PurgeCSS to remove unused CSS-Classes. Don’t use FlowStyles without removing unused CSS-Classes. Otherwise you will get a huge CSS-File full of unused CSS classes!!!

## Available Scripts

In the project directory, you can run:

### `npm run storybook` or `yarn storybook`

Runs the FlowStyles-Storybook in the development mode.<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run storybook:build` or `yarn storybook:build`

Builds the FlowStyles-Storybook in the storybook-static folder.

### `npm run storybook:serve` or `yarn storybook:serve`

Runs the FlowStyles-Storybook build<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run storybook:build:serve` or `yarn storybook:build:serve`

Build the FlowStyles-Storybook and runs it on [http://localhost:5000](http://localhost:5000).

### `npm run lint` or `yarn lint`

Execute Stylelint
