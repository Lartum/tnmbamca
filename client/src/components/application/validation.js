const errors = [];


export function validatebasicdetails(name, nameOfParent, gender, dateOfBirth) {
    // we are going to store errors for all fields
    // in a signle array
    
  
    if (name.length === 0) {
      errors.push("Name can't be empty");
    }
    if (nameOfParent.length === 0) {
        errors.push("Guardian Name can't be empty");
    }
    if (gender === 'Select') {
        errors.push("Select a gender");
    }
    if (dateOfBirth === null) {
        errors.push("Enter Your Date of Birth");
    }
    
  
    return errors;
  }