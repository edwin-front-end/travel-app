// const dotenv = require("dotenv");
// dotenv.config();

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const config = require("../../webpack.prod");
const compiler = webpack(config);
const cors = require("cors");
const { request } = require("express");

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
});

// API calls
// endpoint to store data
let projectData = {};

// request data to the openWeatherAPI
app.post("/makeCalls", (req, res) => {
    projectData = req.body;
    console.log(projectData);
});

// send the data received to projectData object
app.get("/data", (req, res) => {
    res.send(projectData);
});
