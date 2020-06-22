const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      // define the host app
      name: "app_one",
      library: { type: "var", name: "app_one" },
      // this file will be automatically generated and put in /dist
      // this is the file that index.html will use to render the app
      filename: "remoteEntry.js",
      // define the other micro-frontends
      remotes: {
        app_two: "app_two",
        app_three: "app_three",
      },
      // determines what the other apps can load/share
      exposes: {
        AppContainer: "./src/App",
      },
      // shared dependencies, helpful to make builds smaller
      shared: ["react", "react-dom", "react-router-dom", "@material-ui/core/Paper"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
