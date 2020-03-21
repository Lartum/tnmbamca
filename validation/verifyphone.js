const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.otp = !isEmpty(data.otp) ? data.otp : '';

  if (!Validator.isLength(data.otp, { min: 5, max: 5 })) {
    errors.otp = 'Pleas Enter a Valid Otp';
  }
  if (Validator.isEmpty(data.otp)) {
    errors.otp = 'OTP field is required';
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
