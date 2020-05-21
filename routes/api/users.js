const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const aws = require('aws-sdk');
const passport = require('passport');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

//Importing Keys
const keys = require('../../config/keys');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateOtpInput = require('../../validation/verifyphone')

// Load User model
const User = require('../../models/User');

//Load OTP model
const Otp = require('../../models/Otp');

//Load Token model
const Token = require('../../models/Token')

//Load TANCENT Model
const Tancent = require('../../models/Tancent');

//Load AWS Keys
const aws_region_key = require('../../config/keys').AWS_REGION;
const aws_access_key_id = require('../../config/keys').AWS_ACCESS_KEY_ID;
const aws_secret_access_key = require('../../config/keys').AWS_SECRET_ACCESS_KEY;

//Load Sengrid API KEY
const sendgrid_user = require('../../config/keys').SENDGRID_USER;
const sendgrid_pass = require('../../config/keys').SENDGRID_PASS;

aws.config.update({
  accessKeyId: aws_access_key_id,
  secretAccessKey: aws_secret_access_key,
  region: aws_region_key,
});


var sns = new aws.SNS();


if (!aws.config.region) {
  aws.config.update({
    region: 'ap-southeast-1'
  });
}
//The max and min limit of Otp Digits
const max = 99999;
const min = 10000;

sns.setSMSAttributes({
    attributes: {
      DefaultSMSType: 'Transactional'
    }
  },
  function (error) {
    if (error) {
      console.log(error);
    }
  });


// @route   POST api /users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);
  var {
    name,
    email,
    phonenumber,
    regno,
    password,
    choice,
  } = req.body;

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({email})
    .then(user => {
      if (user) {
        errors.email = 'User already exists';
        return res.status(400).json(errors);
      }     
      else {
        Tancent.findOne({regno})
          .then(tancent=>{
            if(!tancent){
                errors.regno = 'TANCENT register number does not exist'
                return res.status(400).json(errors);
            }
          else{
          //Creating A user With the Choice As MBA  
          if (choice === "MBA") {

          //Generating An Application Number 
          var currentYear = new Date().getFullYear()
          var defaultapplicationno = 10001
          User.countDocuments({
            choice: 'MBA'
          }, (err, count) => {
            count = count + defaultapplicationno;
            var applicationnum = ["1", currentYear, count]
            applicationno = applicationnum.join('');
            if(tancent.mbamarks === 'ABS') {
              errors.regno = "The provided TANCENT register number was marked as absent";
              return res.status(400).json(errors);
            }
            else if(tancent.mbamarks === ''){
              errors.regno = 'You havent appeared for MBA exam';
              return res.status(400).json(errors);
            }
            else {
            
            //if the user is the first applicant
            if (count === defaultapplicationno) {
              var tancentmarks = parseFloat(tancent.mbamarks);
              console.log(`initial tancent marks: ${tancentmarks}`)
              console.log(`typeof tancentmarks is: ${typeof tancentmarks}`)
              //Creating a new user with the given credentials 
              const newUser = new User({
                name,
                email,
                phonenumber,
                regno,
                tancentmarks,
                password,
                choice,
                applicationno
              });
              //Encrypting the Password
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      res.json(user)
                      //Generate the Otp For the Given Phone Number
                      const otp = Math.floor(Math.random() * (max - min) + min);
                      //Setting The Parameters for the OTP 
                      var params = {
                        Message: `The OTP For TN MBA MCA Admission is ${otp}`,
                        MessageStructure: 'String',
                        PhoneNumber: String(user.phonenumber)
                      };
                      //Publish the SNS Message
                      sns.publish(params, (err, data) => {
                        if (err) console.log(err, err.stack);
                        else console.log(data);
                      })
                      //Creating a New Otp in the otp schema with 
                      access_otp = new Otp({
                        _userId: user._id,
                        phonenumber: user.phonenumber,
                        otp: otp
                      });
                      console.log("Otp for Mba Choice " + access_otp);
                      // Save the verification otp
                      access_otp.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })
                      //Generating a token
                      access_token = new Token({
                        _userId: user._id,
                        token: crypto.randomBytes(64).toString('hex')
                      });

                      // Save the verification token
                      access_token.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })

                      //local variables host and link
                      host = req.headers.host
                      link = "https://" + host + "/verifymail?token=" + access_token.token;

                      // Send the email
                      var transporter = nodemailer.createTransport({
                        service: 'Sendgrid',
                        auth: {
                            user: sendgrid_user,
                            pass: sendgrid_pass
                        }
                    });
                    var mailOptions = {
                        from: 'no-reply@tnmabamca.com',
                        to: user.email,
                        subject: 'Account Verification Token',
                        html: "Hello, <br> Please Click on the link to verify your email.<br><a href="+link+">Verify Mail</a>"
                    };
                    transporter.sendMail(mailOptions, function (err) {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err.message
                                    });
                                }
                                console.log(`email sent to ${user.email}`);
                                res.status(200).send('A verification email has been sent to ' + user.email + '.')
                              }) 
                    })
                    
                    .catch(err => console.log(err));
                });
              });
              //End of if Condition
            }

            //If the user is not the first applicant
            else {
              var tancentmarks = tancent.mbamarks;
              tancentmarks = parseFloat(tancentmarks);
              const newUser = new User({
                name,
                email,
                phonenumber,
                regno,
                tancentmarks,
                password,
                choice,
                applicationno
              });

              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
          
                      //Generate the Otp For the Given Phone Number
                      const otp = Math.floor(Math.random() * (max - min) + min);
                      console.log(user.phonenumber);
                      var params = {
                        Message: `The OTP For TN MBA MCA Admission is ${otp}`,
                        MessageStructure: 'String',
                        PhoneNumber: String(user.phonenumber) 
                      };

                      //Publish the SNS Message
                      sns.publish(params, (err, data) => {
                        if (err){
                          console.log(err, err.stack);
                          res.json(err)
                        }
                        else {
                          console.log(data);
                          res.json(data);
                        };
                      })
                      //Creating a New Otp in the otp schema with 
                      access_otp = new Otp({
                        _userId: user._id,
                        phonenumber: user.phonenumber,
                        otp: otp
                      });

                      // Save the verification otp
                      access_otp.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })

                      //Generating a token
                      access_token = new Token({
                        _userId: user._id,
                        token: crypto.randomBytes(64).toString('hex')
                      });

                      // Save the verification token
                      access_token.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })

                      //local variables host and link
                      host = req.headers.host
                      link = "http://" + host + "/verifymail?token=" + access_token.token;

                      // Send the email
                      var transporter = nodemailer.createTransport({
                        service: 'Sendgrid',
                        auth: {
                            user: sendgrid_user,
                            pass: sendgrid_pass
                        }
                    });
                    var mailOptions = {
                        from: 'no-reply@tnmabamca.com',
                        to: user.email,
                        subject: 'Account Verification Token',
                        html: "Hello, <br> Please Click on the link to verify your email.<br><a href="+link+">Verify</a>"
                    };
                    transporter.sendMail(mailOptions, function (err) {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err.message
                                    });
                                }
                                res.status(200).send('A verification email has been sent to ' + user.email + '.')
                              })
                    })
                    .catch(err => console.log(err));
                });
              });
            }
            }
          })
        }

        //Creating A User with MCA As the selection
        else {
          var currentYear = new Date().getFullYear()
          var defaultapplicationno = 10001
          User.countDocuments({
            choice: 'MCA'
          }, (err, count) => {
            count = count + defaultapplicationno;
            var applicationnum = ["3", currentYear, count]
            applicationno = applicationnum.join('');
            if(tancent.mcamarks === 'ABS')  {
              errors.regno = "The provided TANCENT register number was marked as absent";
              return res.status(400).json(errors);
            }
            else if(tancent.mcamarks === ''){
              errors.regno = 'You havent appeared for MBA exam';
              return res.status(400).json(errors);
            }
            
            else{
              var tancentmarks = parseFloat(tancent.mcamarks);
            //If the user is the first applicant
            if (count = defaultapplicationno) {

              const newUser = new User({
                name,
                email,
                phonenumber,
                regno,
                tancentmarks,
                password,
                choice,
                applicationno
              });

              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      res.json(user)
                      console.log(user._id)
                      //Generate the Otp For the Given Phone Number
                      
                      const otp = Math.floor(Math.random() * (max - min) + min);
                      var params = {
                        Message: `The OTP For TN MBA MCA Admission is ${otp}`,
                        MessageStructure: 'String',
                        PhoneNumber: String(user.phonenumber)
                      };
                      //Publish the SNS Message
                      sns.publish(params, (err, data) => {
                        if (err) console.log(err, err.stack);
                        else console.log(data);
                      })
                      //Creating a New Otp in the otp schema with 
                      access_otp = new Otp({
                        _userId: user._id,
                        phonenumber: user.phonenumber,
                        otp: otp
                      });

                      // Save the verification otp
                      access_otp.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })
                            //Generating a token
                      access_token = new Token({
                        _userId: user._id,
                        token: crypto.randomBytes(64).toString('hex')
                      });

                      // Save the verification token
                      access_token.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })

                      //local variables host and link
                      host = req.headers.host
                      link = "http://" + host + "/verifymail?token=" + access_token.token;

                      // Send the email
                      var transporter = nodemailer.createTransport({
                        service: 'Sendgrid',
                        auth: {
                            user: sendgrid_user,
                            pass: sendgrid_pass
                        }
                    });
                    var mailOptions = {
                        from: 'no-reply@tnmabamca.com',
                        to: user.email,
                        subject: 'Account Verification Token',
                        html: "Hello, <br> Please Click on the link to verify your email.<br><a href="+link+">Verify Mail</a>"
                    };
                    transporter.sendMail(mailOptions, function (err) {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err.message
                                    });
                                }
                                res.status(200).send('A verification email has been sent to ' + user.email + '.')
                              })
                      
                    })
                    .catch(err => console.log(err));
                });
              });


            }
            //If the user is not the first applicant for MCA
            else {
              var tancentmarks = parseFloat(tancent.mcamarks);
              const newUser = new User({
                name,
                email,
                phonenumber,
                regno,
                tancentmarks,
                password,
                choice,
                applicationno
              });

              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      res.json(user)
                      //Setting The Parameters for the OTP 
                      var params = {
                        Message: `The OTP For TN MBA MCA Admission is ${otp}`,
                        MessageStructure: 'String',
                        PhoneNumber: String(user.phonenumber)
                      };
                      //Publish the SNS Message
                      sns.publish(params, (err, data) => {
                        if (err) console.log(err, err.stack);
                        else console.log(data);
                      })

                      //Generate the Otp For the Given Phone Number
                      const otp = Math.floor(Math.random() * (max - min) + min);
                      //Creating a New Otp in the otp schema with 
                      access_otp = new Otp({
                        _userId: user._id,
                        phonenumber: user.phonenumber,
                        otp: otp
                      });

                      // Save the verification otp
                      access_otp.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })
                             //Generating a token
                      access_token = new Token({
                        _userId: user._id,
                        token: crypto.randomBytes(64).toString('hex')
                      });

                      // Save the verification token
                      access_token.save((err) => {
                        if (err) {
                          return res.status(500).send({
                            msg: err.message
                          })
                        }
                      })

                      //local variables host and link
                      host = req.headers.host
                      link = "http://" + host + "/verifymail?token=" + access_token.token;

                      // Send the email
                      var transporter = nodemailer.createTransport({
                        service: 'Sendgrid',
                        auth: {
                            user: sendgrid_user,
                            pass: sendgrid_pass
                        }
                    });
                    var mailOptions = {
                        from: 'no-reply@tnmabamca.com',
                        to: user.email,
                        subject: 'Account Verification Token',
                        html: "Hello, <br> Please Click on the link to verify your email.<br><a href="+link+">Verify Mail</a>"
                    };
                    transporter.sendMail(mailOptions, function (err) {
                                if (err) {
                                    return res.status(500).send({
                                        msg: err.message
                                    });
                                }
                                res.status(200).send('A verification email has been sent to ' + user.email + '.')
                              })
                    })
                    .catch(err => console.log(err));
                });
              });
            }
          } 
          })
        }
            }
          })
        
      }
    });
});


// @route   GET api /users/verifyphone
// @desc    Verify Email
// @access  Public

// Email verifymail route, use get  to directly verify with the generated link
router.post('/verifymail', (req,res) => {
  
  //Extract the token from the url with the query keyword
  Token.findOne({token : req.body.token },(err, token) => {
    if (!token) return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });
    
    // If we found a token, find a matching user
    User.findOne({ 
      _id: token._userId})
        .then(user => {
            if(!user) return res.status(400).send({msg: 'we were unable to find a user for this token.'});
            if(user.emailverified) return res.status(400).send({type : 'already-verified', msg:'This user has already been verified'});

            //verify and save the user method
             user.emailverified = true;

            //Delete the token once the user is verified 
             Token.findOneAndDelete({token : token._userId})

             //save the user in the database
             user.save( (err) => {
                if(err) {return res.status(500).send({msg: err.message}); }
                res.status(200)
             })
          
      })
        });
    });


// @route   POST api /users/verifyphone
// @desc    Veryify User Phonenumber
// @access  Public

router.post('/verifyphone', (req, res) => {
const {
  errors,
  isValid
} = validateOtpInput(req.body);
var {
  otp
} = req.body;

// if (!isValid) {
//   return res.status(400).json(errors);
// }
Otp.findOne({
    otp
  })
  .then(otp => {
    if (!otp) {
      errors.otp = 'Please Enter An OTP'
      return res.status(400).json(errors);
    } else {
      User.findOne({
          _id: otp._userId
        })
        .then(user => {
          if (!user.phonenumber) {
            errors.otp = "Phone Number Does Not Exist"
            return res.status(400).json(errors);
          }
          if (user.phoneverified === true) {
            errors.otp = "Phone Number Already Verified "
            return res.status(400).json(errors);
          }
          //Set the User phone verifed to true and save the updated database
          user.phoneverified = true;
          user
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
    }
  })
// .then(Otp.deleteOne({otp}))

})

// @route   POST api /users/resetpassword
// @desc    Send Email link for Password Reset
// @access  Public
router.post('/resetpassword', (req, res) => {
  var email = req.body.email;
  User.findOne({ email }) 
      .then(user => {
        console.log(user);
    if(!user) return res.status(400).send({msg: "We were unable to find a user with that name"});
    Token.findOne({tokens : user._id}, (err,tokens) => {
      reset_passwordtoken = new Token({
        _userId : user._id,
        token : crypto.randomBytes(128).toString('hex')
     });
 
     reset_passwordtoken.save((err)=>{
       if(err){
         return res.status(500).send({
           msg: err.message
         })
       }    
     })
     
     host = req.headers.host
     link = "http://"+ host + "/newpassword?token="+ reset_passwordtoken.token;
    // Send the email
    const transporter = nodemailer.createTransport({ 
     service: 'Sendgrid', 
   auth: { 
     user: sendgrid_user, 
     pass: sendgrid_pass
     } });
   var mailOptions = { 
    from: 'no-reply@tnmbamca.com', 
    to: email, 
    subject: 'Reset Password',
    html: "Hello, <br> Please Click on the link to reset your Password.<br><a href="+link+">click here to reset</a>"
  };
   transporter.sendMail(mailOptions,(err, info) => {
       if (err) {
           return res.status(500).send({msg: err.message})
          }
          res.status(200).send('A verification email has been sent to ' + user.email);
   });
   })
    })
});


// @route   POST api /users/newpassword
// @desc    Set new password for the user 
// @access  Public
router.post('/newpassword', (req,res) => {
  console.log()
  const {
    errors,
    isValid
  } = validateRegisterInput(req.body);

  var{ password, password2} = req.body;

  link = req.headers.host + "/login";

  // if (!isValid) 
  //   return res.status(400).json(errors);
  // }
    Token.findOne({ token : req.body.token }, 
      (err,token) => {
      if(!token) {
        errors.password = "Token Expired"
        return res.status(400).json(errors)
      }
        User.findOne({_id: token._userId})
           .then(user => {
             user.password = password
             //Password Encryption if a user is registered
             bcrypt.genSalt(10, (err, salt) => {
             bcrypt.hash(user.password, salt, (err, hash) => {
             if (err) throw err;
             user.password = hash;
             user
               .save()
                .then(user => {
                  const transporter = nodemailer.createTransport({ 
                    service: 'Sendgrid', 
                  auth: { 
                    user: sendgrid_user, 
                    pass: sendgrid_pass
                    } });
                  var mailOptions = { 
                   from: 'no-reply@tnmbamca.com', 
                   to: user.email, 
                   subject: 'Password Succesfully Changed',
                   html: "<h1>Hello,</h1> <br> Your Password has been successfully changed.follow the link to continue to login<br><a href=http://"+link+">click here to Login</a>"
                 };
                  transporter.sendMail(mailOptions,(err, info) => {
                      if (err) {
                          return res.status(500).send({msg: err.message})
                         }
                        res.status(200).json("Password Successfully changed")
                  });
                  // Token.findOneAndDelete({token: token._userId})
             })
             .catch(err => console.log(err));
         });
       })
      //  //Delete the token once the user has successfully changed the password
      //  Token.findOneAndDelete({token: token._userId})
    })
  })
  
})

// @route   GET api /users/login
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

// @route   GET api /users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', {
  session: false
}), async (req, res) => {
  
  try{
    const user = await User
                  .findOne({_id: req.user._id})
                    .populate('user')
    res.json(user);                
  }
  catch(err){
      console.log(err.message);
  }
  // res.json({
  //   id: req.user.id,
  //   name: req.user.name,
  //   email: req.user.email
  // });
});

module.exports = router;