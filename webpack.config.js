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
    "ink"        : `${JS}ink/index.js`,
    "ink.jquery" : `${JS}jquery/index.js`,
    "ink.plugins": `${JS}plugins/index.js`
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
      },
      // {
      //   test: /\.(glsl|frag|vert)$/,
      //   loader: "glslify-import-loader",
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.(glsl|frag|vert)$/,
      //   loader: "raw-loader",
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.(glsl|frag|vert)$/,
      //   loader: "glslify-loader",
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.(glsl|frag|vert)$/,
      //   loader: "glsl-strip-comments",
      //   exclude: /node_modules/
      // }
    ]
  },

  // externals: [
  //   {
  //     jquery: "jQuery",
  //     $: "jQuery"
  //   }
  // ],

  plugins: plugins
};
