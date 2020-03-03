import React  from "react";
import { 
  Card, 
  CardBody, 
  CardHeader,
  Col, 
  Row, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
 } from 'reactstrap';
import Axios from "axios";

const BasicDetails = ({ setForm, formData, navigation} ) => {
 const { regno, name, nameOfParent, gender, dateOfBirth} = formData

 const { next } = navigation;              
  // const validate = () =>{

  // } 

  // const handleSubmit = (e) =>{

  //   }
 
  return (

    <Form>
      <Card>
        <CardHeader>Basic Details</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6} >
        <FormGroup>
        <Label for="regno">Tancent Register Number: </Label>
        <Input 
         type="number"
         name="regno" 
         key='regno'
         value={regno} 
         onChange={setForm} 
         id="regno"/>
      </FormGroup>
         </Col>
        <Col md={6}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" 
           id="name" key="name"
           value={name} 
           onChange={setForm} 
           placeholder="Name" />
        </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
        <FormGroup>
          <Label for="nameOfParent">Name Of Guardian: </Label>
          <Input type="text" 
          name="nameOfParent" 
          id="nameOfParent"
          key="nameOfParent" 
          value={nameOfParent}
          onChange={setForm} 
          placeholder="Guardian Name" />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="gender">Gender</Label>
        <Input type="select" name="gender" key="gender" id="gender" value={gender} onChange={setForm}>
          <option key="1">Male</option>
          <option key="2">Female</option>
          <option key="3">Transgender</option>    
        </Input>
      </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="dateOfBirth">Date Of Birth</Label>
        <Input
          type="date"
          key="dateOfBirth"
          name="dateOfBirth"
          id="dateOfBirth"
          placeholder="Date Of Birth"
          value={dateOfBirth} 
          onChange={setForm}
        />
      </FormGroup>
      <Button type='Submit' onClick={next}>Next</Button>
      </CardBody>
      </Card>
      </Form>
   
  );
};

export default BasicDetails;
