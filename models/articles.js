var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/** CREATE SCHEMA FOR ARTICLES */
var ArticlesSchema = new Schema({
    hyperlink: {
        type: String,
        required: true
    },
    heading: {
        type: String, 
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note",
        required: false
    },
    saved: {
        type: Boolean,
        required: false,
        default:false
    }
});

/** CREATE MODEL USING SCHEMA */
var Articles = mongoose.model("Articles", ArticlesSchema);

/** EXPORT ARTICLES MODEL */
module.exports = Articles;