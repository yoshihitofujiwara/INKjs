const webpack = require("webpack");



/*--------------------------------------------------------------------------
  config
--------------------------------------------------------------------------*/
const JS = `${__dirname}/src/`;

let plugins = [
  new webpack.optimize.AggressiveMergingPlugin()
];

//   plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: { drop_console: true}
//     })
//   );

module.exports = {
  entry: {
		"ink": `${JS}ink/ink.js`
  },

  output: {
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ["env", {
                targets: { browsers: ["last 2 versions"] },
                modules: false
              }]
            ]
          }
        }],
        exclude: /node_modules/
      }
    ]
  },

  plugins: plugins
};
