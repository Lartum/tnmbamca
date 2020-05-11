import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap'
import { Link } from 'react-router-dom';
export default class Successpayment extends Component {
    constructor(){
        super();
        
    }

    render() {
      
            return(
                <div>
                <Jumbotron>
                   <h1 className="display-3">Payment Successfull</h1>
                   <p className="lead">Your Payment Of Rs. 300 Was Successfully Paid</p>
                   <hr className="my-2" />
                   <p>Please Continue to the dashboard</p>
                   <p className="lead">
                 <Link to='/userdashboard' color='success'><Button color="success">Continue</Button></Link>  
                   </p>
                </Jumbotron>
                 </div> 
            )
        }
    }

