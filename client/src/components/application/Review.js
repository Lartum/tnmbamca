import React from "react";
import { 
Table,
Card,
CardHeader,
CardBody, 
Form,
Row,
Button,
CardFooter} from 'reactstrap';
import axios from 'axios';
import {  Redirect } from "react-router-dom";

const Review = ({ setForm, formData, navigation }) => {
  const {
    regno,
    name,
    nameOfParent,
    gender,
    dateOfBirth,    
    citizenship,
    placeOfBirth,
    religion,
    motherTongue,
    address,
    State,
    district,
    pincode,
    mobileno,
    telephoneno,
    useremail,
    nameOfCommunity,
    nameOfCaste,
    casteCode,
    sriLankanRefugee,
    qualifyingDegree,
    patternOfStudy,
    appearanceInTheFinal,
    tancentMarks,
    mathsStudied,
    XIyearOfPassing,
    XIstate,
    XIdistrict,
    XIIyearOfPassing,
    XIIstate,
    XIIdistrict,
    degree_yearOfPassing,
    degree_state,
    degree_district
  
  } = formData;
  
  // const initialState = {
  //   application: null,
  //   error: null
  // };

  const { go } = navigation;
  const submitData = () => {
    console.log(formData)
  // axios.post({
  //       method: 'post',
  //       url:'/api/application',
  //       data: formData,
  //       headers:{'content-Type': 'application/json'}
  //     })
  //       .then( (res)=> console.log(res))
  //         .catch((err)=> console.log(err))
  // };  

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = axios.post('/api/application', formData, config);
    return res.data;
  }
  catch (err) {
  
  }
  if(formData){
    return  <Redirect  to="/submit" />
}
  
};
  return (
    <Form>
      <Card>
        <CardHeader style={{textAlign:"center"}}><h4> Review Your Data</h4></CardHeader>
        <CardBody>
        <Row className="removeMargin">
         
    
        <CardHeader className="reviewHeader"><h4>BASIC DETAILS</h4></CardHeader>
        <Table bordered>
       
      <tbody>
      <tr>
          <th scope="row">Tancent Register No:</th>
          <td name="regno" value={regno}>{`${regno}`}</td>

        </tr>
        <tr>
          <th scope="row">Name:</th>
          <td name="name" value={name}>{`${name}`}</td>

        </tr>
        <tr>
          <th scope="row">Name Of Parent:</th>
          <td name="nameOfParent" value={nameOfParent}> {`${nameOfParent}`}</td>
          
        </tr>
      </tbody>
      
    </Table>
    
    <Button onClick={() => go('basicDetails')}>Edit</Button>

        
      BASIC DETAILS
    
    
      <div>
        <Row className="removeMargin">
      <label>Tancent Register No: </label>
     <div name="regno" value={regno}> {`${regno}`}</div> 
        </Row>
      <Row className="removeMargin">
      <label>Name: </label>
     <div name="name" value={name}> {`${name}`}</div> 
     </Row >
     <Row className="removeMargin">
      <label>Name Of Parent:</label>
     <div name="nameOfParent" value={nameOfParent}> {`${nameOfParent}`}</div> 
     </Row>
     <Row className="removeMargin">
      <label>Gender:</label>
     <div name="gender" value={gender}> {`${gender}`}</div> 
      </Row>
     <Row className="removeMargin">
      <label>Date Of Birth</label>
     <div name="dateOfBirth" value={dateOfBirth}> {`${dateOfBirth}`}</div> 
     </Row>
      </div>
     
     
     
     
  
  <Button onClick={() => go('basicDetails')}>Edit</Button>
  
    
      SECONDARY DETAILS
    
    
    <div>
    <Row className="removeMargin">
      <label>Citizenship: </label>
     <div name="citizenship" value={citizenship}> {`${citizenship}`}</div>
     </Row> 
     <Row className="removeMargin">
      <label>Place Of Birth: </label>
     <div name="placeOfBirth" value={placeOfBirth}> {`${placeOfBirth}`}</div> 
     </Row>
     <Row className="removeMargin">
      <label>Religion: </label>
     <div name="religion" value={religion}> {`${religion}`}</div> 
     </Row>
     <Row className="removeMargin">
      <label>Mother Tongue: </label>
     <div name="gender" value={motherTongue}> {`${motherTongue}`}</div> 
      </Row>
      <Button onClick={() => go('secondaryDetails')}>Edit</Button>
      </div>
    
  
  
    
      ADDRESS DETAILS
    
    
    <div>
    <Row className="removeMargin">
      <label>Address: </label>
     <div name="address" value={address}> {`${address}`}</div> 
      </Row>
     <Row className="removeMargin">
      <label>State: </label>
     <div name="State" value={State}> {`${State}`}</div> 
      </Row>
     <Row className="removeMargin">
      <label>District: </label>
     <div name="district" value={district}> {`${district}`}</div> 
     </Row>
     <Row className="removeMargin">
      <label>District: </label>
     <div name="pincode" value={pincode}> {`${pincode}`}</div> 
      </Row>

      </div>
      <Button onClick={() => go('addressDetails')}>Edit</Button>
    
  
  
    
      CONTACT DETAILS
    
    
    <div>
      <label>Mobile No</label>
     <div name="mobileno" value={mobileno}> {`${mobileno}`}</div> 
      
      <label>Telephone No</label>
     <div name="telephoneno" value={telephoneno}> {`${telephoneno}`}</div> 
      
      <label>Email</label>
     <div name="useremail" value={useremail}> {`${useremail}`}</div> 
      </div>
      <Button onClick={() => go('contactDetails')}>Edit</Button>
    
  
  
    
      COMMUNITY DETAILS
    
    
    <div>
      <label>Tancent Register No:</label>
     <div name="regno" value={regno}> {`${regno}`}</div> 
      
      <label>Name:</label>
     <div name="name" value={name}> {`${name}`}</div> 
      
      <label>Name Of Parent:</label>
     <div name="nameOfParent" value={nameOfParent}> {`${nameOfParent}`}</div> 
      
      <label>Gender:</label>
     <div name="gender" value={gender}> {`${gender}`}</div> 
      
      <label>Date Of Birth</label>
     <div name="dateOfBirth" value={dateOfBirth}> {`${dateOfBirth}`}</div> 
      </div>
      <Button onClick={() => go('basicDetails')}>Edit</Button>
    
  
  
    
      EDUCATIONAL DETAILS
    
    
    <div>
      <label>Qualifying Degree</label>
     <div name="qualifyingDegree" value={qualifyingDegree}> {`${qualifyingDegree}`}</div> 
      
      <label>Pattern Of Study</label>
     <div name="patternOfStudy" value={patternOfStudy}> {`${patternOfStudy}`}</div> 
      
      <label>Name Of Parent:</label>
     <div name="nameOfParent" value={nameOfParent}> {`${nameOfParent}`}</div> 
      
      <label>Gender:</label>
     <div name="gender" value={gender}> {`${gender}`}</div> 
      
      <label>Date Of Birth</label>
     <div name="dateOfBirth" value={dateOfBirth}> {`${dateOfBirth}`}</div> 
      </div>
      <Button onClick={() => go('basicDetails')}>Edit</Button>
    
  
  
    
      UG DEGREE DETAILS
    
    
    <div>
      <label>Tancent Register No:</label>
     <div name="regno" value={regno}> {`${regno}`}</div> 
      
      <label>Name:</label>
     <div name="name" value={name}> {`${name}`}</div> 
      
      <label>Name Of Parent:</label>
     <div name="nameOfParent" value={nameOfParent}> {`${nameOfParent}`}</div> 
      
      <label>Gender:</label>
     <div name="gender" value={gender}> {`${gender}`}</div> 
      
      <label>Date Of Birth</label>
     <div name="dateOfBirth" value={dateOfBirth}> {`${dateOfBirth}`}</div> 
      </div>
      <Button onClick={() => go('basicDetails')}>Edit</Button>
    
  
  </Row>
  <Button onClick={submitData}>Submit</Button>
  </CardBody>
  </Card>
  </Form>
  );
};



export default Review;
