var express = require("express");
var app = express();
var exphbrs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

var port = 3000;

app.engine("handlebars", exphbrs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(port, function(){
    console.log("Listening on port " + port);
});