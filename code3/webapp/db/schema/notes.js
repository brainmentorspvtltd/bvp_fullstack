const mongoose = require('../connection');

const Schema = mongoose.Schema;
const noteSchema = new Schema({
    'name':{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minLength:3,
        maxLength:25
    },
    'desc':{
        type:String,
        required:true,
        minLength:3
    },
   'status':{
        type:String,
        default:'A'
   }
});
const NoteModel = mongoose.model('notes',noteSchema);
module.exports = NoteModel;