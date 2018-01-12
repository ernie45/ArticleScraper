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
        db.articles.find({}).limit(10).then(function(data){
            res.render("index", {articles: data});
        });
    });
    app.put("/saveArticle/:_id", function(req, res){
        console.log(req.params);
        console.log(req.body);
        // db.articles.update({_id: req.params._id}, {$set: {saved: false}});
        db.articles.findOneAndUpdate({_id: req.params._id}, {$set: {saved : false}}).catch(err => console.log(err));
    });
    app.get("/savedArticles", function(req, res){
        db.articles.find({
            saved: true
        }).then(function(data){
            // res.json(data);
            res.render("savedArticles", {articles: data})    
        });
        //res.render("savedArticles");
    });
    app.get("/scrape", function(req, res){
        request("https://www.nytimes.com/", function(error, response, html){
            var $ = cheerio.load(html);
            $(".story-heading").each(function(i, element){
                var heading = $(this).text(); 
                var hyperlink = $(this).children("a").attr("href") || "no link";

                console.log(hyperlink);
                db.articles.create({"heading": heading, "hyperlink": hyperlink})
            });
            res.redirect('/')
        });
    });
};