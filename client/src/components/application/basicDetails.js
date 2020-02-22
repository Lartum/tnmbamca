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
  InputGroup, 
  InputGroupText, 
  InputGroupAddon,
  CustomInput
 } from 'reactstrap';

import Axios from "axios";

const BasicDetails = ({ setForm, formData, navigation }) => {
 const { regno, name, nameOfParent, gender, dateOfBirth} = formData
 const { next } = navigation;
   
 const  basicDetailsValidation = () => {
          
   } 
 

  return (
    <Form>
      <Card>
        <CardHeader>Basic Details</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6} >
        <FormGroup>
        <Label for="regno">Tancent Register Number: </Label>
        <Input readOnly type="text" name="regno" id="regno"/>
      </FormGroup>
         </Col>
        <Col md={6}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" key="name" value={name} onChange={setForm} placeholder="Name" />
        </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
        <FormGroup>
          <Label for="nameOfParent">Name Of Guardian: </Label>
          <Input type="name" name="nameOfCaste" id="nameOfParent" key="nameOfParent" value={nameOfParent} onChange={setForm} placeholder="Parent's Name" />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="exampleSelect">Gender</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>Male</option>
          <option>Female</option>
          <option>Transgender</option>
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
          value={dateOfBirth} onChange={setForm}
        />
      </FormGroup>
      <Button onClick={ next }>Next</Button>
      </CardBody>
      </Card>
      </Form>
   
  );
};

export default BasicDetails;
