# ArticleScraper
Scrape the New York Times website and display articles on an index file

The articles are saved on a Mongo database and can be saved or deleted on command

User can scrape the articles with the push of a button. Upon clicking the button, npm's request
package provides access to the website, and npm's cheerio parses the page's html to access 
headlines and links to the articles. 
 
Routing to the saved articles page allows the user to see articles that were saved from the home
page with the push of a save button. Here the user can also create a note associated with the
specific article.