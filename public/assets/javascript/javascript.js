$(document).ready(function(){
    $.getJSON("/", function(data){
        if (data.length > 0){
            $("#status").css("visibility", "hidden");
        }
    });
    $("#mainScraper").on("click", function(){
        console.log("working button");
        $.getJSON("/scrape", function(data) {
            $("#status").remove();
        }); 
    });
    $(".saveButton").on("click", function(){
        console.log("You have clicked on " + this.id);
    });
});