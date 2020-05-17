const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FileSchema = new Schema({
    userid:{
        type:String,
        ref: 'user'
    },
    applicationno:{
        type:Number,
        ref:'user'
    },    
    Image:{
       type:String 
    },
    plustwoMarksheet: {
        type: String, 
        uploaded: false
    },
    allsemMarksheet:{
        type: String, 
        uploaded: false
    },
    degreeCertificate:{
        type: String,
        uploaded: false
    },
    transferCertificate:{
        type: String, 
        uploaded: false
    },
    permamentcommunitycard:{
        type: String,
        uploaded: false 
    },
    tancethallticket:{
        type: String, 
        uploaded: false
    },
    tancetmarksheet:{
        type: String, 
        uploaded: false
    },
    nativitycertificate:{
        type: String, 
        uploaded: false
    },
    districtmedicalboard:{
        type: String,
        uploaded: false 
    },
    srilankantamilrefugee:{
        type: String, 
        uploaded: false
    },
    demanddraft:{
        type: String, 
        uploaded: false
    },
    versionKey: false
});

var File = mongoose.model('file', FileSchema);

module.exports = File;