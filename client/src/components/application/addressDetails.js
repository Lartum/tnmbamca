import React from "react";
import { 
  Col, 
  Row, 
  Button, 
  Form,  
  FormGroup, 
  Label, 
  Input, 
  Card, 
  CardHeader, 
  CardBody } from 'reactstrap';

const AddressDetails = ({ setForm, formData, navigation }) => {
 const { address, State, district, pincode} = formData

  const { next, previous } = navigation;

  return (
    <Form>  
      <Card>
        <CardHeader>Address Details</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6}>
        <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" key="address" value={address} onChange={setForm} placeholder="Tancent Register Number" />
          </FormGroup>  
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="State">State</Label>
            <Input type="text" name="State" id="State" key="State" value={State} onChange={setForm} placeholder="Name" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="district">district</Label>
            <Input type="text" name="district" id="district" key="district" value={district} onChange={setForm} placeholder="District"/>
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label for="pincode">Pincode</Label>
            <Input type="text" name="pincode" id="pincode" key="pincode" value={pincode} onChange={setForm} placeholder="Pincode"/>
          </FormGroup>
        </Col>
      </Row>
      <div>
      <Button onClick={ previous }>Previous</Button>
      <Button onClick={ next }>Next</Button>

      </div>
     
      </CardBody>
      </Card>
      </Form>
   
  );
};

export default AddressDetails;
