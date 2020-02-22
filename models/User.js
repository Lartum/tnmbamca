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
    required: true
  },
  phonenumber:{
    type: Number,
    required:true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  regno:{
    type:Number,
  },
  phonverified:{
      type:Boolean,
      default:false
  },
  emailverified:{
    type:Boolean,
    default:false
  }
});

module.exports = User = mongoose.model('users', UserSchema);
