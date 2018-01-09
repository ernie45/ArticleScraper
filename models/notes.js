var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NotesSchema = new Schema({
    noteBody: {
        type: String,
        trim: true,
        required: "Note is required"
    }
});
var Note = mongoose.model("Note", NotesSchema);
module.exports = Note;