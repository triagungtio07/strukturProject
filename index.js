const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

app.listen(5000, () => console.log("this app running on port 5000"));
