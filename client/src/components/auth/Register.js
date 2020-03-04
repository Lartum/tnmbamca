import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phonenumber:'91',
      regno:'',
      password: '',
      password2: '',
      choice:'',
      errors: {}
    };

  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/userdashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  

  onSubmit = e => {

    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phonenumber:this.state.phonenumber,
      regno:this.state.regno,
      password: this.state.password,
      password2: this.state.password2,
      choice:this.state.choice
    };
    this.props.registerUser(newUser, this.props.history);
  }

  
  
  render() {
    const { errors } = this.state;
     
    // Select options for Course
     const options = [
      { label: '* Select The Course', value: 0 },
      { label: 'MBA', value: 'MBA' },
      { label: 'MCA', value: 'MCA' }
    ];
    console.log(this.state);
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your account
              </p>
              
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="A Verification Link Will be Sent To This Mail"
                />
                 <TextFieldGroup
                  placeholder="eg: 919234561326"
                  name="phonenumber"
                  type="number"
                  value={this.state.phonenumber}
                  onChange={this.onChange}
                  error={errors.phonenumber}
                  info="An OTP Will Be Sent To This Number"
                />
                <TextFieldGroup
                  placeholder="Tancent Register Number"
                  name="regno"
                  type="number"
                  value={this.state.regno}
                  onChange={this.onChange}
                  error={errors.regno}
                  info="Your TANCENT Register Number"
                />    
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                  info="Password Must Be of More Than 6 Characters"
                />
                <TextFieldGroup
                  placeholder="Submit Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                  info="Confirm The Entered Password"
                />
                 <SelectListGroup
                  placeholder="choice"
                  name="choice"
                  value={this.state.choice}
                  onChange={this.onChange}
                  options={options}
                  error={errors.choice}
                  info="Select A Course"
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
