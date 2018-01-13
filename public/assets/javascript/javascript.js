$(document).ready(function(){

    /** This button will handle the scraping **/ 
    $("#mainScraper").on("click", function(){

        //** Remove status words upon clicking */
        $("#status").remove();
        //** Allow the scrape path to be accessed by router */
        $.ajax("/scrape", {
            type: "GET"
        }).then(function(data){
            //** Once router gets info, do this */
            location.reload(true);
        });
    });

    /** This button will handle saving the articles */
    $(".saveButton").on("click", function(){

        /** Grab the id associated with this article */
        var _id = $(this).attr("id");
        /** Allow router to use the path along with associated id */
        $.ajax("/saveArticle/" + _id, {
            type: "PUT",
            data: null
        }).then(function(data){
            /** Once saved, let the user know */
            
        });
    });

    /**This button handles deleting articles */
    $(".deleteArticle").on("click", function(){

        /** Grab id of article to delete */
        var _id = $(this).attr("name");
        /** Allow router to use the path to delete the article */
        $.ajax("/deleteArticle/" + _id, {
            type: "GET"
        }).then(function(data){
            location.reload(true);
        });
    });

    /**This button still doesn't work well, but should handle saving a note */
    $(".createNote").on("click", function(){
        /** Let the server */
        $.ajax("/noteCreate", {
            type: "GET"
        }).then(function(data){
            console.log("uhu");
        });
    });
});