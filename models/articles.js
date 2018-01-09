var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/** CREATE SCHEMA FOR ARTICLES */
var ArticlesSchema = new Schema({
    headlineLink: {
        type: String,
        trim: true, 
        required: "Must attach a headline"
    },
    articleBody: {
        type: String, 
        trim: true,
        required: "Body of an article is neccessary"
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

/** CREATE MODEL USING SCHEMA */
var Articles = mongoose.model("Articles", ArticlesSchema);

/** EXPORT ARTICLES MODEL */
module.exports = Articles;