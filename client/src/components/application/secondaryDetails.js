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
            <Input type="text" name="religion" id="religion" key="religion" value={religion} onChange={setForm} placeholder="eg:Religion"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="motherTongue">Mother Tongue</Label>
            <Input type="text" name="motherTongue" id="motherTongue" key="motherTongue" value={motherTongue} onChange={setForm} placeholder="eg:Tamil"/>
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
