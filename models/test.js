const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const TestSchema = new Schema({
    name:{
        type: String,
        required:[true,'Name field is required']
    },
     expense: {
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }

  

}); 

const Test =  mongoose.model('test',TestSchema); 
module.exports = Test;
