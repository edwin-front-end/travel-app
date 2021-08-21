const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },

    module: {
        rules: [
            {
                test: "/.js$/",
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: "file-loader",
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/view/index.html",
            filename: "./index.html",
        }),
    ],
};
