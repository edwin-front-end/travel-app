const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;
const { request } = require("express");

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("listening on port 8080");
});
