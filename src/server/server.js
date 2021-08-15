// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
// create an instance of express
const app = express();
// cors for cross origin allowance
const cors = require("cors");
const { request } = require("express");
app.use(cors());
// configuring express to use body-parser as a middleware
app.use(bodyParser.urlencoded({ extended: false }));
// convert data to json
app.use(bodyParser.json());
//initialize the main project folder
app.use(express.static("website"));
// run the server
const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});
// endpoint to store data
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
