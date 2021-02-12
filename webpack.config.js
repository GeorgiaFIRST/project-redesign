const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: '/src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /.(png|jpg)$/,
            loader: 'url-loader'
        },
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader", "postcss-loader",
              ],
          },
    
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "styles.css",
          chunkFilename: "styles.css"
        }),
        new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}