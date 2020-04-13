import React, { Component } from 'react'
import axios from 'axios';
import Loading from '../common/Loading';
import { Badge, Button } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Userdashboard extends Component {
        state = {
            user: null,
            applicationButton:false,
            viewButton:true,
            editButton:true,
            paymentButton:true,
            viewPDFButton:true
        }
        
    componentDidMount(){
        axios.get('/api/users/current')
         .then(res => {
             const user = res.data;
             this.setState({user});
         })
    }
    render(){
        var applicationstatus = 'Incomplete';
        var paymentstatus = 'Not Paid';
        var colorstatus1 = 'red';
        var colorstatus2 = 'red';
       if(this.state.user === null){
           return(
             <Loading />
           )    
       } 

       if(this.state.user !== null){
       var userinfo = this.state.user;
       
        if(userinfo.applicationcomplete === true){
           applicationstatus =  'Complete'
           colorstatus1 = 'green'
           this.state.applicationButton = true
           this.state.viewButton = false
           this.state.paymentButton = false
        }
        if(userinfo.paid === true){
            paymentstatus = 'Done'
            colorstatus2 = 'green'
            this.state.editButton = true
            this.state.paymentButton = true
            this.state.viewPDFButton = false
        }
        return(
        <div className='userdashboard'>
        <div className='shadow-lg p-3 mb-5 bg-white rounded'> 
        <h3>Welcome <Badge color="secondary">{userinfo.name}</Badge> </h3>
        <h3>{this.state.user.choice} Application No <Badge>{userinfo.applicationno}</Badge></h3>
        </div>  
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>Application Completion:
         <p style={{color:colorstatus1}}>{applicationstatus}</p>
         </div>
        <div className='shadow-lg p-3 mb-5 bg-white rounded'>Payment Status: 
        <p style={{color:colorstatus2}}>{paymentstatus}
        </p>
        </div>
           <Link to="/application"><Button disabled={this.state.applicationButton} color='success'>Create Application</Button>{'    '}</Link> 
           <Link to="/viewapplication"><Button disabled={this.state.viewButton} color='success'>View Application</Button>{'    '}</Link> 
           <Link to="/edit"><Button disabled={this.state.editButton} color='success'>Edit Application</Button>{'    '}</Link> 
           <Link to="/Payment"><Button disabled={this.state.paymentButton} color='success'>Payment</Button>{'    '}</Link> 
           <Link to="/pdf"><Button disabled={this.state.viewPDFButton} color='success'>View PDF</Button>{'    '}</Link> 
        </div> 
        )   

            }
    }
}
