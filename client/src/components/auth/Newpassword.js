import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string'

import { newPassword } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';


class Newpassword extends Component {
   constructor(){
       super();
       this.state ={
           password:'',
           password2:'',
           token:null,
           errors:{}
       }
   }
   componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/userdashboard');
    }
    const values = queryString.parse(this.props.location.search)
    const token = values.token
    this.setState({token})
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

    const newPassword = {
     
      password: this.state.password,
      password2: this.state.password2,
      token: this.state.token
    };
    this.props.newPassword(newPassword, this.props.history);
  }
  
    render() {
        const { errors } = this.state;
        return (
        <div className="New">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Enter Your new Password</h1>
              <form noValidate onSubmit={this.onSubmit}>
             
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
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}


Newpassword.propTypes = {
    newPassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { newPassword })(withRouter(Newpassword));
  