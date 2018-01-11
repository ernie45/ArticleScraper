var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var db = require("./models");

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/articlesNotesdb", {
  useMongoClient: true
});

module.exports = function(app){
    app.get("/", function(req, res){
        db.articles.find({}).then(function(data){
            res.render("index", {articles: data});
        });
    });
    app.get("/savedArticles", function(req, res){
        res.render("savedArticles");
    });
    app.get("/scrape", function(req, res){
        request("https://www.nytimes.com/", function(error, response, html){
            var $ = cheerio.load(html);
            $(".story-heading").each(function(i, element){
                var heading = $(this).text(); 
                var hyperlink = $(this).children("a").attr("href");
                console.log(" i is " + i + " for heading " + heading);
                db.articles.create({"heading": heading, "hyperlink": hyperlink});
                res.redirect("/");
            });
        });
       // db.create({}).
    });
};