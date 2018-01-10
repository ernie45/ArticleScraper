$(document).ready(function(){
    $("#mainScraper").on("click", function(){
        console.log("working button");
        $("#status").remove();
        
    });
    $("#savedScraper").on("click", function(){
        console.log("Working as well");
        $("#savedStatus").remove();
    });
});