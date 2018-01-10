$(document).ready(function(){
    var request = require("request");
    var cheerio = require("cheerio");
    
    $("#mainScraper").on("click", function(){
        console.log("working button");
        $("#status").remove();
        
    });
    $("#savedScraper").on("click", function(){
        console.log("Working as well");
        $("#savedStatus").remove();
    });
});