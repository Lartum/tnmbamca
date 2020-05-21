import React, { Component } from 'react'
import axios from 'axios';
import {Jumbotron, Button} from 'reactstrap';
import Loading from '../common/Loading'

export default class Payment extends Component {
     constructor(){
        super();
        this.state = {
            options: null,
            user:null,     
        }
    }    
    componentDidMount(){
        axios.post('/api/payment')
          .then(res =>{
             const options = res.data;
             this.setState({ options });
          })

        axios.get('/api/users/current')
          .then(res=>{
              const user = res.data;
              this.setState({ user });
          })  
    }

    render() {
        if(this.state.options === null || this.state.user === null){
          return(  
                <Loading />   
          )
         }
        if(this.state.options !== null || this.state.user !== null){
            return(
                <div>
                <form  action='https://api.razorpay.com/v1/checkout/embedded' method='post'>
                <Jumbotron>
                <h1 className="display-3">Amount To be paid: 300</h1>
                <p className="lead">You Will Be Redirected The Payment Gateway Once You Click The Payment Button</p>
                <hr className="my-2" />
                <p>Please Do Not Click Refresh Or Go Back Button While In Payment Gateway </p>
                    <input type="hidden" name="key_id" value="rzp_test_4hx0rrE95gnSNE" />
                    <input type="hidden" name="order_id" value={this.state.options.order.id} />
                    <input type="hidden" name="name" value="TAMIL NADU MBA MCA ADMISSION" />
                    <input type="hidden" name="description" value="Exam fess to be paid" />
                    <input type="hidden" name="image" value="https://upload.wikimedia.org/wikipedia/commons/7/79/Seal_of_Tamil_Nadu.png"/>
                    <input type="hidden" name="prefill[name]" value={this.state.user.name} />
                    <input type="hidden" name="prefill[contact]" value={this.state.user.phonenumber} />
                    <input type="hidden" name="prefill[email]" value={this.state.user.email} />
                    {/* <input type="hidden" name="notes[shipping address]" value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001" /> */}
                    <input type="hidden" name="callback_url" value="http://mbamca.herokuapp.com/api/payment/payment-callback"/>
                    <input type="hidden" name="cancel_url" value={this.state.options.failureLink} />
                    <p className="lead">
                    <Button type="submit" color="success" className="btn btn-block">Pay Now</Button>
                    </p>
                    </Jumbotron>
                </form>
                </div>
            )
        }
      
    }
}
