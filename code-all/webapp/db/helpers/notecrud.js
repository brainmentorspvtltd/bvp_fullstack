const NoteModel = require('../schema/notes');
const noteOperations = {
    add(noteObject){
        const promise = NoteModel.create(noteObject);
        return promise;
    },
    read(){
        const promise = NoteModel.find({}).select('name desc');
        return promise;
    }
}
module.exports = noteOperations;