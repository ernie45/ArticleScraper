$(document).ready(function(){
    $.getJSON("/", function(data){
        if (data.length > 0){
            $("#status").css("visibility", "hidden");
        }
    });
    $("#mainScraper").on("click", function(){
        $("#status").remove();
        $.getJSON("/scrape", function(data) {
        }); 
    });
    $(".saveButton").on("click", function(){
        alert("Saved this article");
        var _id = $(this).attr("id");
        $.ajax("/saveArticle/" + _id, {
            type: "PUT",
            data: {"saved": true}
        }).then(function(data){
            console.log("data saved");
        });
    });
    $(".deleteArticle").on("click", function(){
        var _id = $(this).attr("name");
        $.ajax("/deleteArticle/" + _id, {
            type: "PUT",
            data: null
        }).then(function(data){
            console.log("data deleted");
        });
    });
    $(".createNote").on("click", function(){
        console.log("working button");
    });
});