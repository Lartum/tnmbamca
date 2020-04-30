import React, { Component } from 'react'
import {
  Col,
  Row,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";
import Axios from 'axios';

export default class Basicedit extends Component {
 constructor(){
   super()
   this.state = {
    nameOfParent:'',
    gender:'',
    dateOfBirth:'',
    citizenship:'',
    nativity:'',
    placeOfBirth:'',
    religion:'',
    motherTongue:'',
  };

 }
   

    componentDidMount(){
      
    }

    handleOnChange = event => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = e =>{
      const config = {
          headers: {
            "Content-Type":"application/json"
          }
      }; 
      console.log(this.state);
      try{
          const res = Axios
                        .post('/api/application/basicedit', 
                             this.state, config)
                              .then(res =>{
                                if(res.successredirect.redirect === '/edit')
                                  window.location = '/edit'
                              })

          console.log(res)
        }
       catch(err){
         console.log(err)
       }
    }

    render() {
        return (
        <form onSubmit={this.handleOnSubmit}>      
        <Card>
          <CardHeader><h3 style={{textAlign:"center",color:'red'}}>BASIC DETAILS</h3></CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                <label for="nameOfParent">Name Of Guardian: </label>
                  <input
                    name='nameOfParent'
                    type="text"
                    className="form-control"
                    required
                    onChange= {this.handleOnChange}
                    value={this.state.nameOfParent}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                <label for="gender">Gender</label>
                  <select
                    name="gender"
                    className="form-control"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.gender}
                  >
                    <option value="">* Please select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <label for="dateOfBirth">Date Of Birth</label>
              <input
                name="dateOfBirth"
                type="date"
                className="form-control"
                required
                onChange={this.handleOnChange}
                value={this.state.dateOfBirth}
              />
            </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardHeader className="userdashboard">Secondary Details</CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="citizenship">Citizenship</label>
                  <input
                    name="citizenship"
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.citizenship}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="nativity">Nativity</label>
                  <input
                    name="nativity"
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.nativity}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="placeOfBirth">Place Of Birth</label>
                  <input
                    name="placeOfBirth"
                    type="text"
                    className="form-control"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.placeOfBirth}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="religion">Religion</label>
                  <select
                    name="religion"
                    type="select"
                    className="form-control"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.religion}
                  >
                    <option value="">* Please select</option>
                    <option Value="Hindu">Hindu</option>
                    <option Value="Christian">Christian</option>
                    <option Value="Islam">Islam</option>
                    <option Value="Sikhism">Sikhism</option>
                    <option Value="Jainism">Jainism</option>
                    <option Value="Buddhism">Buddhism</option>
                    <option Value="Jainism">Jainism</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="motherTongue">Mother Tongue</label>
                  <select
                    name="motherTongue"
                    type="select"
                    className="form-control"
                    required
                    onChange={this.handleOnChange}
                    value={this.state.motherTongue}
                  >
                    <option value="">* Please select</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Kannada">Kannada</option>
                    <option value="Others">Others</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
          <Button type='submit' color="success" className="btn btn-block">Confirm</Button>
          </CardFooter>
          </Card>
            </form>
        );
    }
}