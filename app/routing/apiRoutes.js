
var friends = require("../data/friends.js");



exports.friends = function(req, res) {
    res.json(friends);
};

