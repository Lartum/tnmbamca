import React, { Component } from 'react'
import { Button, Modal } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Edit extends Component {
    constructor(){
        super();
        this.state = {
            modal: false,
        }
    }

    render() {
        return (
        <div>
            <div className='shadow-lg p-3 mb-5 bg-white rounded'> 
             <Link to='/editbasicdetails'><Button color='primary' className="btn btn-block">Edit Basic Details</Button></Link> 
                
            </div> 
            <div className='shadow-lg p-3 mb-5 bg-white rounded'> 
                
                
             </div>     
        </div> 
        )
    }
}
