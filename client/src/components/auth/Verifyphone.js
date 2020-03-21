import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import {verifyPhone} from '../../actions/authActions'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Verifyphone extends Component {
    constructor(){
        super();
        this.state = {
            otp:'',
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

        const access_Otp= {
          otp: this.state.otp,
        };
        console.log(access_Otp);
        this.props.verifyPhone(access_Otp, this.props.history);
      }
    
    render() {
      const  {errors} = this.state;
        return (
            <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <p className="lead text-center">
                    Enter Your OTP
                  </p> 
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="One Time Password"
                      name="otp"
                      type="number"
                      value={this.state.otp}
                      onChange={this.handleChange}
                      error={errors.otp}
                      info="Enter The Otp Received On Your Phone"
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

Verifyphone.propTypes = {
    verifyPhone: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(mapStateToProps, { verifyPhone })(withRouter(Verifyphone));