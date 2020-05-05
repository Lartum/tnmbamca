const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ImageSchema = new Schema({
    userid:{
        type:String,
        ref: 'user'
    },
    applicationno:{
        type:Number,
        ref:'user'
    },    
    imageName: {
        type: String,
        default: "none",
    },
    imageData: {
        type: String, 
    },
    versionKey: false
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;