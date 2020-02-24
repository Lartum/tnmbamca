const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const Application = require('../../models/Application');
// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

router.get('/all', passport.authenticate('jwt', 
{ session: false }), (req,res) =>{
  Application.findOne({_userid:req.user._id})
      .populate('user')
       .exec((data => {
        res.send(data);
       })) 
          
  })

router.post('/', passport.authenticate('jwt', 
{ session: false }),
   (req, res) => {
    try {
      const newApplication = new Application({
        _userid: req.user._id,
        applicationno: req.user.applicationno,
        regno: req.body.regno,  
        name: req.body.name,
        nameOfParent: req.body.nameOfParent,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,

        citizenship: req.body.citizenship,
        placeOfBirth: req.body.placeOfBirth,
        religion: req.body.religion,
        motherTongue: req.body.motherTongue,

        address:  req.body.address,
        state: req.body.state,
        district: req.body.district,
        pincode: req.body.pincode,

        mobileNo: req.body.mobileNo,
        telephoneNo: req.body.telephoneNo,
        useremail: req.body.useremail,

        nameOfCommunity: req.body.nameOfCommunity,
        nameOfCaste: req.body.nameOfCaste,
        casteCode: req.body.casteCode,
        sriLankanRefugee: req.body.sriLankanRefugee,

        qualifyingDegree: req.body.qualifyingDegree,
        patternOfStudy: req.body.patternOfStudy,
        appearanceInTheFinal: req.body.appearanceInTheFinal,
        tancentMarks: req.body.tancentMarks,
        mathsStudied: req.body.mathsStudied,
        XIyearOfPassing: req.body.XIIyearOfPassing,
        XIstate: req.body.XIstate,
        XIdistrict: req.body.XIdistrict,
        XIIyearOfPassing: req.body.XIIyearOfPassing,
        XIIstate: req.body.XIIstate,
        XIIdistrict: req.body.XIIdistrict,
        degreeyearOfPassing: req.body.degreeyearOfPassing,
        degreestate: req.body.degreestate,
        degreedistrict: req.body.degreedistrict,

        ugDegree: req.body.ugDegree,
        collegeName: req.body.collegeName,
        collegeAddress: req.body.collegeAddress,
        universityAddress: req.body.universityAddress,
        IsemMonth: req.body.IsemMonth,
        Isemyop: req.body.Isemyop,
        Isemmaxmarks: req.body.Isemmaxmarks,
        Isemmarks: req.body.Isemmarks,
        IIsemMonth: req.body.IIsemMonth,
        IIsemyop: req.body.IIsemyop,
        IIsemmaxmarks: req.body.IIsemmaxmarks,
        IIsemmarks: req.body.IIsemmarks,
        IIIsemMonth: req.body.IIIsemMonth,
        IIIsemyop: req.body.IIIsemyop,
        IIIsemmaxmarks: req.body.IIIsemmarks,
        IIIsemmarks: req.body.IIsemmarks,
        IVsemMonth: req.body.IVsemMonth,
        IVsemyop: req.body.IVsemyop,
        IVsemmaxmarks: req.body.IVsemmarks,
        IVsemmarks: req.body.IVsemmarks,
        VsemMonth: req.body.VsemMonth,
        Vsemyop: req.body.Vsemyop,
        Vsemmaxmarks: req.body.Vsemmarks,
        Vsemmarks: req.body.Vsemmarks,
        VIsemMonth: req.body.VIsemMonth,
        VIsemyop: req.body.VIsemyop,
        VIsemmaxmarks: req.body.VIsemmaxmarks,
        VIsemmarks: req.body.VIsemmarks,
        VIIsemMonth: req.body.VIIIsemMonth,
        VIIsemyop: req.body.VIIsemyop,
        VIIsemmaxmarks: req.body.VIIsemmaxmarks,
        VIIsemmarks: req.body.VIIsemmaxmarks,
        VIIIsemMonth: req.body.VIIsemMonth,
        VIIIsemyop: req.body.VIIIsemyop,
        VIIIsemmaxmarks: req.body.VIIIsemmaxmarks,
        VIIIsemmarks: req.body.VIIIsemmarks,
        IXsemMonth: req.body.IXsemMonth,
        IXsemyop: req.body.IXsemyop,
        IXsemmaxmarks: req.body.IXsemmaxmarks,
        Xsemmarks: req.body.Xsemmarks,
        XsemMonth: req.body.XsemMonth,
        Xsemyop: req.body.Xsemyop,
        Xsemmaxmarks: req.body.Xsemmarks,
        Xsemmarks: req.body.Xsemmarks,
        overalltot: req.body.overalltot,
        overallmarks: req.body.overallmarks,
        totalpermark: req.body.totalpermark

      });

      newApplication.save()
            .then(application => res.json(application))
              .catch(err => console.log(err));

     
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
