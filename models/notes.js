var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NotesSchema = new Schema({
    noteTitle: {
        type: String
    },
    noteBody: {
        type: String
    }
});
var Note = mongoose.model("Note", NotesSchema);
module.exports = Note;