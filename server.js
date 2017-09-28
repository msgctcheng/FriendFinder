var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoute = require("./app/routing/htmlRoutes");
var apiRoute = require("./app/routing/apiRoutes");
var app = express();
var PORT = process.env.PORT || 3000;

module.exports = app;
module.exports = path;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", htmlRoute.home);
app.get("/survey", htmlRoute.survey);

app.get("/api/friends", apiRoute.friends);

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});
