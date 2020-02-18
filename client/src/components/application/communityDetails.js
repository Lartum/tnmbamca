import React from 'react';
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

const CommunityDetails = ({ setForm, formData, navigation }) => {
const { nameOfCommunity, nameOfCaste, casteCode, sriLankanRefugee} = formData;
const { next, previous } = navigation;

return(
    <Form>  
    <Card>
      <CardHeader>Community Details</CardHeader>
      <CardBody>
    <Row form>
      <Col md={6}>
      <FormGroup>
          <Label for="nameOfCommunity">Community Name</Label>
          <Input type="text" name="nameOfCommunity" id="nameOfCommunity" key="nameOfCommunity" value={nameOfCommunity} onChange={setForm} placeholder="Community Name" />
        </FormGroup>  
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="nameOfCaste">Caste Name</Label>
          <Input type="name" name="nameOfCaste" id="nameOfCaste" key="nameOfCaste" value={nameOfCaste} onChange={setForm} placeholder="Caste Name" />
        </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="casteCode">Caste Code</Label>
          <Input type="text" name="casteCode" id="casteCode" key="casteCode" value={casteCode} onChange={setForm} placeholder="Caste Code"/>
        </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
          <Label for="sriLankanRefugee">Sri Lankan Refugee</Label>
          <Input type="text" name="sriLankanRefugee" id="sriLankanRefugee" key="sriLankanRefugee" value={sriLankanRefugee} onChange={setForm} placeholder="yes/no"/>
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

export default CommunityDetails;