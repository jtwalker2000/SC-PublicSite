const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const Terser = require("terser-webpack-plugin");
const devServer = require("./devServer.js");
const Package = require("./package.json");

module.exports = {
  entry: ["./src/index.js"],
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    before: devServer
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: "cheap-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      filename: "index.html",
      title: Package.displayVersion
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/images/favicon.png",
      prefix: "images/",
      inject: true,
      favicons: {
      icons: {
            // Platform Options:
            // - offset - offset in percentage
            // - background:
            //   * false - use default
            //   * true - force use default, e.g. set background for Android icons
            //   * color - set background for the specified icons
            //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
            //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
            //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
            //
            android: false,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            appleIcon: false,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            coast: false,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            windows: true,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            yandex: false                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
        }
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      APP_NAME: JSON.stringify(Package.displayVersion),
      DESCRIPTION: JSON.stringify(Package.description),
      AUTHOR: JSON.stringify(Package.author),
      WEBSITE: JSON.stringify(Package.homepage),
      GA: true,
      SERVICE_WORKERS: true,
      SERVICE: JSON.stringify("")
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    new CopyWebpackPlugin([
      { from: "src/images", to: "images" }
    ]),
    new ManifestPlugin()
  ],
  // optimization
  optimization: {
    minimizer: [new Terser({
      // Ensure .mjs files get included.
      test: /\.m?js$/,
    })],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `vendor.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
};
