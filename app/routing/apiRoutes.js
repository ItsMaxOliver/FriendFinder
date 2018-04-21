var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../data/friends.js");
var app = express();
var apiRouter = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

apiRouter.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    for (var i = 0; i < newFriend.scores.length; i++) {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
    friends.push(newFriend);
});

apiRouter.get("/api/friends", function(req, res) {
	res.json(friends);
});

module.exports = apiRouter;