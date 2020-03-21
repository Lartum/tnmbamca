const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    _userId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'user' 
        },
    phonenumber:{
        type:Number,
        required:true,
        ref:'user'
    },    
    otp: { 
        type: Number, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        required: true, 
        default: Date.now, 
        expires: 600000  
     }
});

const Otp = mongoose.model('Otp', otpSchema)

module.exports = Otp;