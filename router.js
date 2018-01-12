/** Dependencies */
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var db = require("./models");

/** To be able to connect to the database using th mongoose ORM */
mongoose.Promise = Promise;
/** the stuff in quotes remains the same, just rename the articlesNotesdb to database of your choosing */
mongoose.connect("mongodb://localhost/articlesNotesdb", {
  useMongoClient: true
});

/** This function will be exported to be used by the server */
module.exports = function(app){
    /** When routing to home page */
    app.get("/", function(req, res){
        /** Search the database, and choose  only 10 */
        db.articles.find({}).limit(10).then(function(data){
            /** Send the client the index handlebars along with articles to display */
            res.render("index", {articles: data});
        });
    });

    /** When receiving this path from the client, it should have an id to save the article */
    app.put("/saveArticle/:_id", function(req, res){
        console.log(req.params);
        console.log(req.body);
        // This uses the mongoose ORM to update the associated id to saved = true
        db.articles.findOneAndUpdate({_id: req.params._id}, {$set: {saved : true}}).catch(err => console.log(err));
    });

    /** When receiving this path, search the database again */
    app.get("/savedArticles", function(req, res){
        db.articles.find({
            saved: true
        }).then(function(data){
            /** When done searching, send the client the savedArticles handlebars with the saved articles */
            res.render("savedArticles", {articles: data})    
        });
        //res.render("savedArticles");
    });

    /** When receiving scrape path */
    app.get("/scrape", function(req, res){
        //** Use request to be able to grab the url of the website to scrape */
        request("https://www.nytimes.com/", function(error, response, html){
            /** Allow cheerio to be used just like jquery using dollar sign notation */
            var $ = cheerio.load(html);
            /** Accessing story-heading from the url above will allow us to grab from all existing with that class */
            $(".story-heading").each(function(i, element){
                /** Get the text */
                var heading = $(this).text();
                /** Get the link associated with that article */ 
                var hyperlink = $(this).children("a").attr("href") || "no link";
                console.log(hyperlink);
                /** Use the mongoose ORM to populate our database with the info above */
                db.articles.create({"heading": heading, "hyperlink": hyperlink})
            });
        });
    });

    /** When receiving the delete articles path, along with the id,  */
    app.put("/deleteArticle/:_id", function(req, res){
        /** Use mongoose ORM to handle updating where id = req.params._id  and make it not saved */
        db.articles.findOneAndUpdate({_id: req.params._id}, {$set: {saved: false}}).catch(error => console.log(error));
    });

    /** When sent this path, save a note, this part doestn'' work well yet */
    app.get("/noteCreate", function(req, res){
        res.render("saveNote", null);
    });
    app.get("/createNote", function(req, res){
        console.log("redirect not working");
        window.location.href;
    });
};