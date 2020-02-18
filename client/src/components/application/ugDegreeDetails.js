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
  CardBody,
  Table } from 'reactstrap';

const UgDegreeDetails = ({ setForm, formData, navigation }) => {
 const { 
   ugDegree,
  collegeName,
  collegeAddress,
  universityAddress,
  IsemMonth,
  Isemyop,
  Isemmaxmarks,
  Isemmarks, 
  IIsemMonth,
  IIsemyop,
  IIsemmaxmarks,
  IIsemmarks,
  IIIsemMonth,
  IIIsemyop,
  IIIsemmaxmarks,
  IIIsemmarks,
  IVsemMonth,
  IVsemyop,
  IVsemmaxmarks,
  IVsemmarks,
  VsemMonth,
  Vsemyop,
  Vsemmaxmarks,
  Vsemmarks,
  VIsemMonth,
  VIsemyop,
  VIsemmaxmarks,
  VIsemmarks,
  VIIsemMonth,
  VIIsemyop,
  VIIsemmaxmarks,
  VIIsemmarks,
  VIIIsemMonth,
  VIIIsemyop,
  VIIIsemmaxmarks,
  VIIIsemmarks,
  IXsemMonth,
  IXsemyop,
  IXsemmaxmarks,
  IXsemmarks,
  XsemMonth,
  Xsemyop,
  Xsemmaxmarks,
  Xsemmarks,
  overalltot,
  overallmarks,
  totalpermark} = formData

  const { next, previous } = navigation;

  return (
    <Form>  
      <Card>
        <CardHeader>Details of Marks in UG Degree Qualifying Examinations</CardHeader>
        <CardBody>
      <Row form>
        <Col md={6}>
        <FormGroup>
            <Label for="ugDegree">UG Degree</Label>
            <Input type="text" name="ugDegree" id="ugDegree" key="ugDegree" value={ugDegree} onChange={setForm} placeholder="Tancent Register Number" />
          </FormGroup>  
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="collegeName">Name Of The College</Label>
            <Input type="name" name="collegeName" id="collegeName" key="collegeName" value={collegeName} onChange={setForm} placeholder="Name" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="collegeAddress">Address</Label>
            <Input type="text" name="collegeAddress" id="collegeAddress" key="collegeAddress" value={collegeAddress} onChange={setForm} placeholder="Parent Name"/>
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label for="universityAddress">Name Of The University</Label>
            <Input type="text" name="universityAddress" id="universityAddress" key="universityAddress" value={universityAddress} onChange={setForm} placeholder="Parent Name"/>
          </FormGroup>
        </Col>
      </Row>
      <Table bordered>
      <thead>
        <tr>
          <th>Semester/Year</th>
          <th>Month</th>
          <th>Year Of Passing</th>
          <th>Maximum Marks</th>
          <th>Marks Obtained</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">I</th>
          <td><input type="text" class="form-control" name="IsemMonth" id="IsemMonth" key="IsemMonth" value={IsemMonth}></input></td>
          <td><input type="text" class="form-control" name="Isemyop" id="Isemyop" key="Isemyop" value={Isemyop}></input></td>
          <td><input type="text" class="form-control" name="Isemmaxmarks" id="Isemmaxmarks" key="Isemmaxmarks" value={Isemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="Isemmarks" id="Isemmarks" key="Isemmarks" value={Isemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">II</th>
          <td><input type="text" class="form-control" name="IIsemMonth" id="IIsemMonth" key="IIsemMonth" value={IIsemMonth}></input></td>
          <td><input type="text" class="form-control" name="IIsemyop" id="IIsemyop" key="IIsemyop" value={IIsemyop}></input></td>
          <td><input type="text" class="form-control" name="IIsemmaxmarks" id="IIsemmaxmarks" key="IIsemmaxmarks" value={IIsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="IIsemmarks" id="IIsemmarks" key="IIsemmarks" value={IIsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">III</th>
          <td><input type="text" class="form-control" name="IIIsemMonth" id="IIIsemMonth" key="IIIsemMonth" value={IIIsemMonth}></input></td>
          <td><input type="text" class="form-control" name="IIIsemyop" id="IIIsemyop" key="IIIsemyop" value={IIIsemyop}></input></td>
          <td><input type="text" class="form-control" name="IIIsemmaxmarks" id="IIIsemmaxmarks" key="IIIsemmaxmarks" value={IIIsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="IIIsemmarks" id="IIIsemmarks" key="IIIsemmarks" value={IIIsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">IV</th>
          <td><input type="text" class="form-control" name="IVsemMonth" id="IVsemMonth" key="IVsemMonth" value={IVsemMonth}></input></td>
          <td><input type="text" class="form-control" name="IVsemyop" id="IVsemyop" key="IVsemyop" value={IVsemyop}></input></td>
          <td><input type="text" class="form-control" name="IVsemmaxmarks" id="IVsemmaxmarks" key="IVsemmaxmarks" value={IVsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="IVsemmarks" id="IVsemmarks" key="IVsemmarks" value={IVsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">V</th>
          <td><input type="text" class="form-control" name="VsemMonth" id="VsemMonth" key="VsemMonth" value={VsemMonth}></input></td>
          <td><input type="text" class="form-control" name="Vsemyop" id="Vsemyop" key="Vsemyop" value={Vsemyop}></input></td>
          <td><input type="text" class="form-control" name="Vsemmaxmarks" id="Vsemmaxmarks" key="Vsemmaxmarks" value={Vsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="Vsemmarks" id="Vsemmarks" key="Vsemmarks" value={Vsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">VI</th>
          <td><input type="text" class="form-control" name="VIsemMonth" id="VIsemMonth" key="VIsemMonth" value={VIsemMonth}></input></td>
          <td><input type="text" class="form-control" name="VIsemyop" id="VIsemyop" key="VIsemyop" value={VIsemyop}></input></td>
          <td><input type="text" class="form-control" name="VIsemmaxmarks" id="VIsemmaxmarks" key="VIsemmaxmarks" value={VIsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="VIsemmarks" id="VIsemmarks" key="VIsemmarks" value={VIsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">VII</th>
          <td><input type="text" class="form-control" name="VIIsemMonth" id="VIIsemMonth" key="VIIsemMonth" value={VIIsemMonth}></input></td>
          <td><input type="text" class="form-control" name="VIIsemyop" id="VIIsemyop" key="VIIsemyop" value={VIIsemyop}></input></td>
          <td><input type="text" class="form-control" name="VIIsemmaxmarks" id="VIIsemmaxmarks" key="VIIsemmaxmarks" value={VIIsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="VIIsemmarks" id="VIIsemmarks" key="VIIsemmarks" value={VIIsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">VIII</th>
          <td><input type="text" class="form-control" name="VIIIsemMonth" id="VIIIsemMonth" key="VIIIsemMonth" value={VIIIsemMonth}></input></td>
          <td><input type="text" class="form-control" name="VIIIsemyop" id="VIIIsemyop" key="VIIIsemyop" value={VIIIsemyop}></input></td>
          <td><input type="text" class="form-control" name="VIIIsemmaxmarks" id="VIIIsemmaxmarks" key="VIIIsemmaxmarks" value={VIIIsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="VIIIsemmarks" id="VIIIsemmarks" key="VIIIsemmarks" value={VIIIsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">IX</th>
          <td><input type="text" class="form-control" name="IXsemMonth" id="IXsemMonth" key="IXsemMonth" value={IXsemMonth}></input></td>
          <td><input type="text" class="form-control" name="IXsemyop" id="IXsemyop" key="IXsemyop" value={IXsemyop}></input></td>
          <td><input type="text" class="form-control" name="IXsemmaxmarks" id="IXsemmaxmarks" key="IXsemmaxmarks" value={IXsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="IXsemmarks" id="IXsemmarks" key="IXsemmarks" value={IXsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row">X</th>
          <td><input type="text" class="form-control" name="XsemMonth" id="XsemMonth" key="XsemMonth" value={XsemMonth}></input></td>
          <td><input type="text" class="form-control" name="Xsemyop" id="Xsemyop" key="Xsemyop" value={Xsemyop}></input></td>
          <td><input type="text" class="form-control" name="Xsemmaxmarks" id="Xsemmaxmarks" key="Xsemmaxmarks" value={Xsemmaxmarks}></input></td>
          <td><input type="text" class="form-control" name="Xsemmarks" id="Xsemmarks" key="Xsemmarks" value={Xsemmarks}></input></td>
        </tr>
        <tr>
          <th scope="row" colSpan="3">Overall Total</th>
          <td><input type="text" class="form-control" name="overalltot" id="overalltot" key="overalltot" value={overalltot}></input></td>
          <td><input type="text" class="form-control" name="overallmarks" id="overallmarks" key="overallmarks" value={overallmarks}></input></td>
        </tr>
        <tr>
          <th scope="row" colSpan="4">Total % Of Marks</th>
          <td><input type="text" class="form-control" name="totalpermark" id="totalpermark" key="totalpermark" value={totalpermark}></input></td>
        </tr>
      </tbody>
    </Table>
      <div>
      <Button onClick={ previous }>Previous</Button>
      <Button onClick={ next }>Next</Button>

      </div>
     
      </CardBody>
      </Card>
      </Form>
   
  );
};

export default UgDegreeDetails;
