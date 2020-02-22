const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = mongoose.Schema({
    _userid: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    regno: {
        type:Number,
        ref: 'user'
    },
    name: String,
    nameOfParent: String,
    gender: String,
    dateOfBirth:String,

    citizenship: String,
    placeOfBirth: String,
    religion: String,
    motherTongue: String,

    address: String,
    state: String,
    district: String,
    pincode: Number,

    mobileNo: Number,
    telephoneNo: Number,
    email: String,
    
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
    XIstate: String,
    XIdistrict: String,
    XIIyearOfPassing: String,
    XIIstate: String,
    XIIdistrict: String,
    degreeyearOfPassing: String,
    degreestate: String,
    degreedistrict: String,

    ugDegree: String,
    collegeName: String,
    collegeAddress: String,
    universityAddress: String,
    IsemMonth: String,
    Isemyop: String,
    Isemmaxmarks: String,
    Isemmarks: String, 
    IIsemMonth: String,
    IIsemyop: String,
    IIsemmaxmarks: String,
    IIsemmarks: String,
    IIIsemMonth: String,
    IIIsemyop: String,
    IIIsemmaxmarks: String,
    IIIsemmarks: String,
    IVsemMonth: String,
    IVsemyop: String,
    IVsemmaxmarks: String,
    IVsemmarks: String,
    VsemMonth: String,
    Vsemyop: String,
    Vsemmaxmarks: String,
    Vsemmarks: String,
    VIsemMonth: String,
    VIsemyop: String,
    VIsemmaxmarks: String,
    VIsemmarks: String,
    VIIsemMonth: String,
    VIIsemyop: String,
    VIIsemmaxmarks: String,
    VIIsemmarks: String,
    VIIIsemMonth: String,
    VIIIsemyop: String,
    VIIIsemmaxmarks: String,
    VIIIsemmarks: String,
    IXsemMonth: String,
    IXsemyop: String,
    IXsemmaxmarks: String,
    Xsemmarks: String,
    XsemMonth: String,
    Xsemyop: String,
    Xsemmaxmarks: String,
    Xsemmarks: String,
    overalltot:Number,
    overallmarks:Number,
    totalpermark:String,

    date: {
        type: Date,
        default: Date.now
      },
    ipaddress: String
});

module.exports = post = mongoose.model('application', ApplicationSchema);