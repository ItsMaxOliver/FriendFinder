var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRouter = require("./app/routing/htmlRoutes.js");
var apiRouter = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

var app = express();
var PORT = 4444;

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/", htmlRouter);
app.use("/survey", htmlRouter);
app.post("/api/friends", apiRouter);
app.get("/api/friends", apiRouter);