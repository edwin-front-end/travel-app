const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const cors = require("cors");
const { request } = require("express");

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

let projectData = {};

// request data to the openWeatherAPI
// app.post("/weather", (req, res) => {
//     projectData = req.body;
//     console.log(projectData);
// });

// send the data received to projectData object
// app.get("/data", (req, res) => {
//     res.send(projectData);
// });
