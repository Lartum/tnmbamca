import React, { Component } from 'react';
import Axios from 'axios';
import { Button, Jumbotron } from 'reactstrap'
import Loading from '../common/Loading'
export default class Successpayment extends Component {
    constructor(){
        super();
        this.state={
            order_detail : null
        }
    }
  componentWillUpdate(){
   const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    try{
    Axios.post('/api/payment/payment-callback',this.state.order_detail, config);
    
    }
    catch (err){
        console.log(err)
        }
    }
    
    render() {
        if(this.state.order_detail === null){
            return(
                <Loading />
            )
            
        }
        if(this.state.order_detail !== null){
            return(
                <div>
                <Jumbotron>
                   <h1 className="display-3">Payment Successfull</h1>
                   <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                   <hr className="my-2" />
                   <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                   <p className="lead">
                   <Button color="primary">Continue</Button>
                   </p>
                </Jumbotron>
                 </div> 
            )
        }
    }
}
