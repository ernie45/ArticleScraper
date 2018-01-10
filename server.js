/** DECLARE DEPENDENCIES */
var express = require("express");
var exphbrs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

/** CREATE EXPRESS APPLICATION CONNECTION AND DEFINE PORT TO LISTEN TO*/
var app = express();
var port = 3000;

/** USE DEPENDENCIES */
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.engine("handlebars", exphbrs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

/** HANDLE ROUTING */
app.get("/", function(req, res){
    res.render("index");
});
app.get("/savedArticles", function(req, res){
    res.render("savedArticles");
});

app.listen(port, function(){
    console.log("Listening on port " + port);
});