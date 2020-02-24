const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Nexmo = require('nexmo');
// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Init nexmo
const nexmo = new Nexmo({
  apiKey: 'eae78f54',
  apiSecret: 'xlgSnaqn1sYhXY5W'
}, {
  debug: true
});

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({
  msg: 'Users Works'
}));

router.get('/phoneverifytest', (req, res) => {
  res.json({
    msg: 'phoneverify route is working'
  });
})

router.post('/phoneverifytest', (req, res) => {
  nexmo.verify.request({
    number: '919842772083',
    brand: 'Nexmo',
    code_length: '4'
  }, (err, result) => {
    console.log(err ? err : result)
  });
})

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);
  const {
    name,
    email,
    phonenumber,
    password
  } = req.body;
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
      email
    })
    .then(user => {
      if (user) {
        console.log(user);
        errors.phonenumber = 'An Account already exists';
        return res.status(400).json(errors);
      } else {
        const avatar = gravatar.url(email, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });
        var currentYear = new Date().getFullYear()
        var defaultapplicationno = 10001
        User.find().estimatedDocumentCount((err, count) => {
          count = count + defaultapplicationno;
          var applicationnum = [currentYear, count]
          applicationno = applicationnum.join('');
          if (count = defaultapplicationno) {

            const newUser = new User({
              name,
              email,
              phonenumber,
              avatar,
              password,
              applicationno
            });
    
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });
          } else {

            const newUser = new User({
              name,
              email,
              avatar,
              password,
              applicationno
            });
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });

          }
        })
      }
    });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const {
    errors,
    isValid
  } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({
    email
  }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey, {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;