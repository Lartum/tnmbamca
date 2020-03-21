const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tancentSchema = new Schema({
   regno:{
       type:Number
   },
   name:{
    type:String
   },
   mbamarks:{
    type:String,
   },
   mcamarks:{
    type:String
   }   
});

const Tancent = mongoose.model('Tancent', tancentSchema)

module.exports = Tancent;