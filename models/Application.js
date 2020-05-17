const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = mongoose.Schema({
    _userid: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    applicationcomplete:{
        type:Boolean,
        ref: 'user'
    },
    applicationno: {
        type: Number,
        ref: 'user',
        unique: true
    },
    choice: {
        type: String,
        ref: 'user',
    },
    regno:{
        type:Number,
        ref:'user'
    },
    name:{
        type: String,
        ref:'user'
    },
    email:{
        type: String,
        ref: 'user'
    },
    phonenumber: {
        type: String,
        ref: 'user'
    },
    tancentMarks: {
        type: Number,
        ref: 'user'
    },
    image:{
        type:String, 
        ref:'file'
     },
     plustwoMarksheet: {
         type: String, 
         ref:'file'
     },
     allsemMarksheet:{
         type: String, 
         ref:'file'
     },
     degreeCertificate:{
         type: String,
         ref:'file'
     },
     transferCertificate:{
         type: String, 
         ref:'file'
     },
     permamentcommunitycard:{
         type: String,
         ref:'file' 
     },
     tancethallticket:{
         type: String, 
         ref:'file'
     },
     tancetmarksheet:{
         type: String, 
         ref:'file'
     },
     nativitycertificate:{
         type: String, 
         ref:'file'
     },
     districtmedicalboard:{
         type: String,
         ref:'file' 
     },
     srilankantamilrefugee:{
         type: String, 
         ref:'file'
     },
     demanddraft:{
         type: String, 
         ref:'file'
     },
    nameOfParent: String,
    gender: String,
    dateOfBirth: String,
    nativity:String,

    differentlyAbled: String,
    citizenship: String,
    placeOfBirth: String,
    religion: String,
    motherTongue: String,

    address: String,
    state: String,
    district: String,
    pincode: Number,
    telephoneno: Number,
   
    nameOfCommunity: String,
    nameOfCaste: String,
    casteCode: String,
    sriLankanRefugee: String,

    qualifyingDegree: String,
    patternOfStudy: String,
    appearanceInTheFinal: String,
    mathsStudied: String,

    XyearOfPassing: String,
    XnameOfSchool: String,
    Xstate: String,
    Xdistrict: String,

    XIIyearOfPassing: String,
    XIInameOfSchool: String,
    XIIstate: String,
    XIIdistrict: String,

    diplomayearOfPassing: String,
    diplomanameOfSchool: String,
    diplomastate: String,
    diplomadistrict: String,

    degreeYearOfPassing: String,
    degreeState: String,
    degreeDistrict: String,
    degreeNameOfSchool: String,

    ugDegree: String,
    collegeName: String,
    collegeAddress: String,
    universityAddress: String,
    universityName: String,

    IsemMonth: String,
    Isemyop: String,
    Isemmarks: Number,
    Isemmaxmarks: Number,

    IIsemMonth: String,
    IIsemyop: String,
    IIsemmarks: Number,
    IIsemmaxmarks: Number,


    IIIsemMonth: String,
    IIIsemyop: String,
    IIIsemmarks: Number,
    IIIsemmaxmarks: Number,


    IVsemMonth: String,
    IVsemyop: String,
    IVsemmarks: Number,
    IVsemmaxmarks: Number,


    VsemMonth: String,
    Vsemyop: String,
    Vsemmarks: Number,
    Vsemmaxmarks: Number,


    VIsemMonth: String,
    VIsemyop: String,
    VIsemmarks: Number,
    VIsemmaxmarks: Number,


    VIIsemMonth: String,
    VIIsemyop: String,
    VIIsemmarks: Number,
    VIIsemmaxmarks: Number,


    VIIIsemMonth: String,
    VIIIsemyop: String,
    VIIIsemmarks: Number,
    VIIIsemmaxmarks: Number,


    IXsemMonth: String,
    IXsemyop: String,
    IXsemmarks: Number,
    IXsemmaxmarks: Number,

    Xsemmarks: String,
    XsemMonth: String,
    Xsemyop: Number,
    Xsemmaxmarks: Number,


    overalltotalmarks: Number,
    overallmarksobtained: Number,
    totalpermark: Number,

    prefinalsemoveralltotalmarks: Number,
    prefinalsemoverallmarksobtained: Number,
    prefinalsemtotalpermark: Number,

    date: {
        type: Date,
        default: Date.now
    },
    versionKey: false
});

module.exports = post = mongoose.model('applications', ApplicationSchema);