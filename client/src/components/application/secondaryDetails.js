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

const SecondaryDetails = ({ setForm, formData, navigation }) => {
 const { citizenship, placeOfBirth, religion, motherTongue} = formData

  const { next, previous } = navigation;

  return (
    <Form>
      <Card>
        <CardHeader>Secondary Details</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6}>
        <FormGroup>
            <Label for="citizenship">Citizenship</Label>
            <Input type="text" name="citizenship" id="citizenship" key="citizenship" value={citizenship} onChange={setForm} placeholder="eg:Indian" />
          </FormGroup>  
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="placeOfBirth">Place Of Birth</Label>
            <Input type="text" name="placeOfBirth" id="placeOfBirth" key="placeOfBirth" value={placeOfBirth} onChange={setForm} placeholder="eg:Coimbatore" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="religion">Religion</Label>
          <Input type="select" name="religion" id="religion" value={religion} onChange={setForm}>
          <option key="1">Hindu</option>
          <option key="2">Christian</option>
          <option key="3">Islam</option>
          <option key="4">Sikhism</option>
          <option key="5">Jainism</option>
          <option key="6">Buddhism</option>
          <option key="7">Jainism</option>
        </Input>
      </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="motherTongue">Mother Tongue</Label>
          <Input type="select" name="motherTongue" id="motherTongue" value={motherTongue} onChange={setForm}>
          <option key="1">Tamil</option>
          <option key="2">Telugu</option>
          <option key="3">Malayalam</option>
          <option key="4">Kannada</option>
          <option key="5">Others</option>
        </Input>
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

export default SecondaryDetails;
