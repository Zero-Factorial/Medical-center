const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const StaffSchema = new Schema({
    name:{
        type: String,
        required:[true,'Name field is required']
    },
     rank: {
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }

  

}); 

const Staff =  mongoose.model('staff',StaffSchema); 
module.exports = Staff;
