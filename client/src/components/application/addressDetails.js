import React from "react";
import{ 
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

const AddressDetails = ({ setForm, formData, navigation }) =>{
 const{ address, State, district, pincode} = formData

  const{  next,previous } = navigation;

const handleDistrict = (State) => {
 
  const otherDistrict = {
   key:38, Label:"Others"
 }

  if(!State ==="Tamilnadu"){
    return otherDistrict;
  }
  else {
      
const tamildistrict =[ 
  {key : 1, Label: "Ariyalur"},
  {key : 2, Label: "Chengalpattu"},
  {key : 3, Label: "Chennai"},
  {key : 4, Label: "Coimbatore"},
  {key : 5, Label: "Cuddalore"},
  {key : 6, Label: "Dharmapuri"},
  {key : 7, Label: "Dindigul "},
  {key : 8, Label: "Erode"},
  {key : 9, Label: "Kallakurichi"},
  {key : 10, Label: "Kanchipuram"},
  {key : 11, Label: "Kanyakumari"},
  {key : 12, Label: "Karur"},
  {key : 13, Label: "Krishnagiri"},
  {key : 14, Label: "Madurai"},
  {key : 15, Label: "Nagapattinam"},
  {key : 16, Label: "Namakkal"},
  {key : 17, Label: "Perambalur"},
  {key : 18, Label: "Pudukkottai"},
  {key : 19, Label: "Ramanathapuram"},
  {key : 20, Label: "Ranipet"},
  {key : 21, Label: "Salem"},
  {key : 22, Label: "Sivagangai"},
  {key : 23, Label: "Tenkasi"},
  {key : 24, Label: "Thanjavur"},
  {key : 25, Label: "The Nilgiris"},
  {key : 26, Label: "Theni"},
  {key : 27, Label: "Thirupattur"},
  {key : 28, Label: "Thoothukudi "},
  {key : 29, Label: "Tiruchirappalli "},
  {key : 30, Label: "Tirunelveli "},
  {key : 31, Label: "Tiruppur "},
  {key : 32, Label: "Tiruvallur "},
  {key : 33, Label: "Tiruvannamalai "},
  {key : 34, Label: "Tiruvarur "},
  {key : 35, Label: "Vellore"},
  {key : 36, Label: "Viluppuram"},
  {key : 37, Label: "Virudhunagar"},
  {key : 38, Label: "Others"}
]
  }
  
}
  return (
    <Form>  
      <Card>
        <CardHeader>Address Details</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6}>
        <FormGroup>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" key="address" value={address} onChange={setForm} placeholder="Address" />
          </FormGroup>  
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="State">State</Label>
       <Input type="select" name="State" id="State" value={State} onChange={setForm}>
       <option  key="1"> Andaman and Nicobar Islands</option>
       <option  Key ='2'>Andhra Pradesh</option>
       <option  Key ='3'>Arunachal Pradesh</option>
       <option  Key ='4'>Assam</option>
       <option  Key ='5'>Bihar</option>
       <option  Key ='6'>Chandigarh</option>
       <option  Key ='7'>Chattisgarh</option>
       <option  Key ='8'>Dadra and Nagar Haveli</option>
       <option  Key ='9'>Daman & Diu</option>
       <option  Key ='10'>Delhi</option>
       <option  Key ='11'>Goa</option>
       <option  Key ='12'>Gujarat</option>
       <option  Key ='13'>Haryana</option>
       <option  Key ='14'>Himachal Pradesh</option>
       <option  Key ='15'>Jammu and Kashmir</option>
       <option  Key ='16'>Jharkhand</option>
       <option  Key ='17'>Karnataka</option>
       <option  Key ='18'>Kerala</option>
       <option  Key ='19'>Ladakh</option>
       <option  Key ='20'>Lakshadweep</option>
       <option  Key ='21'>Madhya Pradesh</option>
       <option  Key ='22'>Maharashtra</option>
       <option  Key ='23'>Manipur</option>
       <option  Key ='24'>Meghalaya</option>
       <option  Key ='25'>Mizoram</option>
       <option  Key ='26'>Nagaland</option>
       <option  Key ='27'>Odisha</option>
       <option  Key ='28'>Puducherry</option>
       <option  Key ='29'>Punjab</option>
       <option  Key ='30'>Rajasthan</option>
       <option  Key ='31'>Sikkim</option>
       <option  Key ='32'>Tamilnadu</option>
       <option  Key ='33'>Telangana</option>
       <option  Key ='34'>Tripura</option>
       <option  Key ='35'>Uttar Pradesh</option>
       <option  Key ='36'>Uttarakhand</option>
       <option  Key ='37'>West Bengal</option>
        </Input>
      </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="district">District</Label>
            <Input 
            type="text"
             name="district" 
             id="district" 
             key="district" 
             value={district}
             onChange={setForm} 
             placeholder="District"/>
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
