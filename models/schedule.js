const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const S_DoctorSchema = new Schema({
    name:{
        type: String,
        required:[true,'Name field is required']
    },
  
specialist:{
    type: String,
    required: [true,'specialist field is required']
},
time_schedule:{
    type: String,
    required: [true,'schedule field is required']
},

available:{
        type: Boolean,
        default:false
    }

  

}); 

const S_Doctor =  mongoose.model('s_doctor',S_DoctorSchema); 
module.exports = S_Doctor;
