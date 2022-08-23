const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    userName : {
       type : String,
       required : true 
    },

    email: {
        type: String,
        required: true,
       
    },
   
    mobile: {
        type: Number,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
   
    job: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('StudentSchema',StudentSchema);
