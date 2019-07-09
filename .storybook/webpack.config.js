module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 2
        }
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            require("autoprefixer")
          ]
        }
      },
      {
        loader: "sass-loader"
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
