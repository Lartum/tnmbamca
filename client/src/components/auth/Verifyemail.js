import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string'
import {Jumbotron } from 'reactstrap';

import { verifyMail } from '../../actions/authActions';

class Verifymail extends Component {
   constructor(){
       super();
       this.state ={
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

    const verifyMail = {
      token: this.state.token
    };
    this.props.verifyMail(verifyMail, this.props.history);
  }
  
    render() {
        const { errors } = this.state;
        return (
        <div className="New">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
              <Jumbotron>
                <h1 className="display-3">Last step</h1>
                <p className="lead">Click the button below to confirm your mail.</p>
                <hr className="my-2" />
                <p>You will be redirected to login page once you click the button below</p>
                <p className="lead">
                <input type="submit" className="btn btn-info btn-block mt-4" />
                 </p>
               </Jumbotron>
              </form>
            </div>
          </div>
        </div>
      </div>
        )
    }
}


Verifymail.propTypes = {
    verifyMail: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { verifyMail })(withRouter(Verifymail));
  