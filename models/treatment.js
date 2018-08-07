const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const TreatmentSchema = new Schema({
    name:{
        type: String,
        required:[true,'Name field is required']
    },
   
    available:{
        type: Boolean,
        default:false
    }

  

}); 

const Treatment =  mongoose.model('treatment',TreatmentSchema); 
module.exports = Treatment;
