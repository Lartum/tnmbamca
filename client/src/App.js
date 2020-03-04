import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import NotFound from './components/not-found/NotFound';
import Verifyphone from './components/auth/Verifyphone';
import Verifyemail from './components/auth/Verifyemail';
import Newpassword from './components/auth/Newpassword';
import Forgotpassword from './components/auth/Forgotpassword';
import Application from './components/application/Application';
import Pdf from './components/application/Pdf'
import Imageupload from './Imageupload';
import Userdashboard from './components/userdashboard/Userdashboard';
import Logincard from './components/auth/Logincard'

import './App.css';



// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            
              <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path='/verifyphone' component={Verifyphone}/>
              <Route exact path='/verifyemail' component={Verifyemail}/>
              <Route exact path="/login" component={Login} />
              <Route exact path='/forgotpassword' component={Forgotpassword}/>
              <Route exact path="/newpassword" component={Newpassword} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Route exact path="/imageupload" component={Imageupload} />
              <Route exact path ='/logincard' component={Logincard}/>
              <Switch>
                <PrivateRoute exact path="/application" component={Application} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/pdf" component={Pdf} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/userdashboard" component={Userdashboard} />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
