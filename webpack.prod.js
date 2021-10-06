const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: "./src/client/index.js",
    output: {
        libraryTarget: "var",
        library: "Client",
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
                options: {
                    outputPath: "assets",
                    name: "[name].[ext]",
                },
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/view/index.html",
            filename: "./index.html",
        }),
        new WorkboxPlugin.GenerateSW(),
    ],
};
