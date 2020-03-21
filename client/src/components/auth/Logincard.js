import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import Inputgroup from '../common/InputGroup';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'

class Logincard extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/userdashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/userdashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
       <Card>
      <div className="login">
        <div className="container">
          <div className="column">
            
            <CardHeader style={{color:"black"}}>Log In</CardHeader>
              
              <form onSubmit={this.onSubmit}>
                <CardBody>
                <Inputgroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <Inputgroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
                </CardBody>
                <CardFooter>
                <Link to='/forgotpassword'> <a
                  href=""
                  className="nav-link"
                >
                Forgot Password?
               </a></Link>
                </CardFooter> 
              </form>
          </div>
        </div>
      </div>
      </Card> 
    );
  }
}

Logincard.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Logincard);
