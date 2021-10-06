const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});

app.get("/test", async (req, res) => {
    res.json({ message: "pass!" });
});

app.get("/", (req, res) => {
    res.sendFile("dist/index.html");
});

// endpoint to store data
let projectData = {};

// request data to the openWeatherAPI
app.post("/APICalls", (req, res) => {
    projectData = req.body;
    res.end(); // end the request-response cycle
});

app.get("/APIData", (req, res) => {
    res.send(projectData);
});

module.exports = app;
