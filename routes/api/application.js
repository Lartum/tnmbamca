const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');
const Application = require('../../models/Application');
// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
// router.get(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const errors = {};

//     Profile.findOne({ user: req.user.id })
//       .populate('user', ['name', 'avatar'])
//       .then(profile => {
//         if (!profile) {
//           errors.noprofile = 'There is no profile for this user';
//           return res.status(404).json(errors);
//         }
//         res.json(profile);
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
// router.get('/all', (req, res) => {
//   const errors = {};

//   Profile.find()
//     .populate('user', ['name', 'avatar'])
//     .then(profiles => {
//       if (!profiles) {
//         errors.noprofile = 'There are no profiles';
//         return res.status(404).json(errors);
//       }

//       res.json(profiles);
//     })
//     .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
// });

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

// router.get('/handle/:handle', (req, res) => {
//   const errors = {};

//   Profile.findOne({ handle: req.params.handle })
//     .populate('user', ['name', 'avatar'])
//     .then(profile => {
//       if (!profile) {
//         errors.noprofile = 'There is no profile for this user';
//         res.status(404).json(errors);
//       }

//       res.json(profile);
//     })
//     .catch(err => res.status(404).json(err));
// });

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

// router.get('/user/:user_id', (req, res) => {
//   const errors = {};

//   Profile.findOne({ user: req.params.user_id })
//     .populate('user', ['name', 'avatar'])
//     .then(profile => {
//       if (!profile) {
//         errors.noprofile = 'There is no profile for this user';
//         res.status(404).json(errors);
//       }

//       res.json(profile);
//     })
//     .catch(err =>
//       res.status(404).json({ profile: 'There is no profile for this user' })
//     );
// });



router.post(
  '/',
  
  // [

  //   [
  //     check('name', 'Name is required')
  //       .not()
  //       .isEmpty()
  //   ]
  // ],
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
        // Check Validation
        if (!isValid) {
          // Return any errors with 400 status
          return res.status(400).json(errors);
        }
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({
    //     errors: errors.array()
    //   });
    // }
    // res.json('testing application post req');
    // console.log('formdata print');
    // console.log(req.body.formData);
    // const { regno, name, nameOfParent, gender, dateOfBirth } = req.body.formData;
    console.log(req.body.regno);
    try {
      const newApplication = new Application({
        
        // id: req.user._id,

         _userid: req.user._id,
        regno: req.user.regno,
        name: req.body.regno,
        nameOfParent: req.body.regno,
        gender: req.body.regno,
        dateOfBirth: req.body.regno,

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

      const application = await newApplication.save();

      res.json(application);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);




// @route   POST api/profile
// @desc    Create or Edit user profile
// // @access  Private
// router.post(
//   '/', 
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateProfileInput(req.body);
//     // Check Validation
//     if (!isValid) {
//       // Return any errors with 400 status
//       return res.status(400).json(errors);
//     }

//     // Get fields
//     const profileFields = {};
//     profileFields.user = req.user.id;
//     if (req.body.handle) profileFields.handle = req.body.handle;
//     if (req.body.company) profileFields.company = req.body.company;
//     if (req.body.website) profileFields.website = req.body.website;
//     if (req.body.location) profileFields.location = req.body.location;
//     if (req.body.status) profileFields.status = req.body.status;
//     if (req.body.bio) profileFields.bio = req.body.bio;
//     if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;
//     // Skills - Spilt into array
//     if (typeof req.body.skills !== 'undefined') {
//       profileFields.skills = req.body.skills.split(',');
//     }
//     // Social (optional fields)
//     profileFields.social = {};
//     if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
//     if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
//     if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
//     if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
//     if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

//     // Create or Edit current user profile with unique handle
//     Profile
//       .findOne({ user: req.user.id })
//       .then(profile => {
//         // If profile not exist, then create a new one, Otherwise just update 
        
//         // Create new profile
//         if(!profile){
//           // Check if handle exists (handle should be unoque for all profile)
//           Profile
//             .findOne({ handle: profileFields.handle})
//             .then(profile => {
//             if(profile){
//               errors.handle = 'handle already exists';
//               res.status(400).json(errors);
//             }
//           });
//           new Profile(profileFields).save().then(profile => res.json(profile));
//         }
//         // Update the profile
//         else{
//           // Check if handle exists for other user
//           Profile
//             .findOne({ handle: profileFields.handle})
//             .then(p => {
//             if(profile.handle !== p.handle){
//               errors.handle = 'handle already exists';
//               res.status(400).json(errors);
//             }
//           });
//           Profile
//             .findOneAndUpdate(
//               {user: req.user.id},
//               {$set: profileFields},
//               {new: true}
//             )
//             .then(profile => res.json(profile));
//         }
//       });
//   }
// );






// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  '/experience',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.experience.unshift(newExp);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/education
// @desc    Add education to profile
// @access  Private
router.post(
  '/education',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to edu array
      profile.education.unshift(newEdu);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  '/experience/:exp_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
  '/education/:edu_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.education
          .map(item => item.id)
          .indexOf(req.params.edu_id);

        // Splice out of array
        profile.education.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
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
