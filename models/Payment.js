const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new mongoose.Schema({
    _userid: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    applicationno:{
        type: String,
        ref: 'user'
    },
    name:{
        type: String,
        ref: 'user'
    },
    email:{
        type:String,
        ref: 'user'
    },
   razorpay_order_id:{
       type:String,
       unique:true,
       required:true       
   },
   razorpay_payment_id:{
       type:String,
       unique:true,
       required:true
   },
   razorpay_signature:{
       type:String,
       unique:true,
       required:true
   },
   versionKey: false
   
});

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment;