import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NotFound from './components/not-found/NotFound';
import Verifyphone from './components/auth/Verifyphone';
import Verifyemail from './components/auth/Verifyemail';
import Newpassword from './components/auth/Newpassword';
import Forgotpassword from './components/auth/Forgotpassword';
import Application from './components/application/Application';
import Pdf from './components/application/Pdf';
import Userdashboard from './components/userdashboard/Userdashboard';
import Payment from './components/payment/Payment';
import Successpayment from './components/payment/Successpayment';
import FailurePayment from './components/payment/Failurepayment';
import Edit from './components/application/edit/Edit';
import Basicedit from './components/application/edit/Basicedit';
import Viewapplication from './components/application/Viewapplication';
import FileUpload from './FileUpload';

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
              <Route exact path='/verifymail' component={Verifyemail}/>
              <Route exact path="/login" component={Login} />
              <Route exact path='/forgotpassword' component={Forgotpassword}/>
              <Route exact path="/newpassword" component={Newpassword} />
              <Route exact path="/not-found" component={NotFound} />      
              <Route exact path ='/paymentsuccess' component={Successpayment}/>         
              <Route exact path ='/paymentcancel' component={FailurePayment}/>         
              <Switch>
                <PrivateRoute exact path="/userdashboard" component={Userdashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/application" component={Application} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/pdf" component={Pdf} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/viewapplication" component={Viewapplication} />
              </Switch>
              <Switch>
              <PrivateRoute exact path ='/uploadfile' component={FileUpload}/> 
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit" component={Edit} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/editbasicdetails" component={Basicedit} />
              </Switch>
              <Switch>
              <PrivateRoute exact path ='/payment' component={Payment}/>         
              </Switch>   
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
