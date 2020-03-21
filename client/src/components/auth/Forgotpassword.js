import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Textfieldgroup from '../common/TextFieldGroup'
import { forgotPassword } from '../../actions/authActions';

class Forgotpassword extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            errors:{}
        }
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
      handleChange = e =>{
        this.setState({ [e.target.name]: e.target.value})
    };
    onSubmit = e => {
        e.preventDefault();

        const newemail= {
          email: this.state.email,
        };
        console.log(newemail);
        this.props.forgotPassword(newemail, this.props.history);
      }

    render() {
        const {errors} = this.state
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <p className="lead text-center">
                    Enter Your Email
                  </p> 
                  <form noValidate onSubmit={this.onSubmit}>
                    <Textfieldgroup 
                        placeholder='Email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        error={errors.email}
                        info='A Password Reset Link Will be Sent To This Email'
                    />
            <input type='submit' className='btn btn-primary'></input>
            </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

Forgotpassword.propTypes = {
    forgotPassword: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect( mapStateToProps, { forgotPassword })(withRouter(Forgotpassword));