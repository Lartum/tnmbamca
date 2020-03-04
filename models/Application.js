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
    image: {
        data: Buffer,
        contentType: String
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
    mobileno: {
        type: String,
        ref: 'user'
    },
    
    nameOfParent: String,
    gender: String,
    dateOfBirth: String,
    nativity:String,

    differntlyabled: String,

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
    casteCode: Number,
    sriLankanRefugee: String,

    qualifyingDegree: String,
    patternOfStudy: String,
    appearanceInTheFinal: String,
    tancentMarks: Number,
    mathsStudied: String,

    XIyearOfPassing: String,
    XInameOfSchool: String,
    XIstate: String,
    XIdistrict: String,

    XIIyearOfPassing: String,
    XIInameOfSchool: String,
    XIIstate: String,
    XIIdistrict: String,

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
    Isemmarks: String,
    Isemmaxmarks: String,

    IIsemMonth: String,
    IIsemyop: String,
    IIsemmarks: String,
    IIsemmaxmarks: String,


    IIIsemMonth: String,
    IIIsemyop: String,
    IIIsemmarks: String,
    IIIsemmaxmarks: String,


    IVsemMonth: String,
    IVsemyop: String,
    IVsemmarks: String,
    IVsemmaxmarks: String,


    VsemMonth: String,
    Vsemyop: String,
    Vsemmarks: String,
    Vsemmaxmarks: String,


    VIsemMonth: String,
    VIsemyop: String,
    VIsemmarks: String,
    VIsemmaxmarks: String,


    VIIsemMonth: String,
    VIIsemyop: String,
    VIIsemmarks: String,
    VIIsemmaxmarks: String,


    VIIIsemMonth: String,
    VIIIsemyop: String,
    VIIIsemmarks: String,
    VIIIsemmaxmarks: String,


    IXsemMonth: String,
    IXsemyop: String,
    IXsemmarks: String,
    IXsemmaxmarks: String,

    Xsemmarks: String,
    XsemMonth: String,
    Xsemyop: String,
    Xsemmaxmarks: String,


    overalltot: Number,
    overallmarks: Number,
    totalpermark: String,

    date: {
        type: Date,
        default: Date.now
    },
    ipv4: String,
    ipv6: String
});

module.exports = post = mongoose.model('applications', ApplicationSchema);