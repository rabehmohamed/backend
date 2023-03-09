const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const problemSchema = new Schema({
     title: {
        type: String,
        required : true,
        unique: true
     },
     description : {
        type: String,
        required : true
     },
     category : {
        type : String,
     },
     hint : {
        type : [String],
     },
     difficulty: {
        type : String,
        required : true
     }
});

const Problem = mongoose.model('Problem' , problemSchema);

module.exports = Problem