const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  phonenumber:{
    type: Number,
    required:true,
    unique:true
  },
  regno:{
    type:Number,
    required:true,
    unique:true
  },
  tancentmarks:{
    type:String,
    ref: 'application'
  },
  password: {
    type: String,
    required: true
  },
  choice:{
    type:String,
    required:true
  },
  applicationno:{
    type:Number,
    unique:true
  },
  phoneverified:{
      type:Boolean,
      default:false
  },
  emailverified:{
    type:Boolean,
    default:false
  },
  paid:{
    type:Boolean,
    default:false
  },
  applicationcomplete:{
    type:Boolean,
    default:false
  }
  
});

module.exports = User = mongoose.model('users', UserSchema);
