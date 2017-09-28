var path = require("path");

exports.survey = function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
};

exports.home = function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
};

