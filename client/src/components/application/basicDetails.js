import React, { useState }  from "react";
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

 Axios.get('/api/application', )
  const { next } = navigation;

  return (
    <Form>
      <Card>
        <CardHeader>Basic Details</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6} >
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Tancent Register No</InputGroupText>
        </InputGroupAddon>
        <Input type="number" id="regno" key="regno" name="regno" value={regno} onChange={setForm} />
      </InputGroup>
         </Col>
        <Col md={6}>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Name</InputGroupText>
        </InputGroupAddon>
        <Input type="text" name="name" key="name" value={name} onChange={setForm} />
      </InputGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <div className="inputgroup">
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Name Of Parent</InputGroupText>
        </InputGroupAddon>
        <Input type="text" name="nameOfParent" key="nameOfParent" value={nameOfParent} onChange={setForm} />
      </InputGroup>
      </div>
        </Col>
        <Col md={6}>
        <div className="inputgroup">
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Gender</InputGroupText>
        </InputGroupAddon>
        <CustomInput type="select" name="gender" key="gender"value={gender} onChange={setForm}>
        <option value="gender">Select</option>
        <option>Male</option>
        <option>Female</option>
        <option>Transgender</option>
        </CustomInput>
      </InputGroup>
      </div>
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
