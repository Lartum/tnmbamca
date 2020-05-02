import React, { Component } from "react";
import Promise from "promise";
import { Link }  from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";
import Axios from "axios";

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false
    };

    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handClick = e =>{
    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    };
    try{
      const res = Axios.post('/api/application', this.props.getStore(), config)
      console.log(res)
    }
    catch(err){
      console.log(err);
    }  
  }
  // This review screen had the 'Save' button, on clicking this is called
  isValidated() {
    this.setState({
      saving: true
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          saving: true
        });

        this.props.updateStore({ savedToCloud: true }); // Update store here (this is just an example, in reality you will do it via redux or flux)

        // call resolve() to indicate that server validation or other aync method was a success.
        // ... only then will it move to the next step. reject() will indicate a fail
        resolve();
        // reject(); // or reject
      }, 5000);
    });
  }

  jumpToStep(toStep) {
    // We can explicitly move to a step (we -1 as its a zero based index)
    this.props.jumpToStep(toStep - 1); // The StepZilla library injects this jumpToStep utility into each component
  }

  render() {
    const savingCls = this.state.saving
      ? "saving col-md-12 show"
      : "saving col-md-12 hide";
    console.log(this.props.getStore());
    console.log('Preview Image Object:'+this.props.getStore().previewImage);
    return (
      <div className="step step6 review">
        <Card>
          <CardHeader className="reviewHeaders">
            Review Entered Details
          </CardHeader>
          <CardBody>
            <h3 className="finalReviewHeader">BASIC DETAILS</h3>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">Tancent Register No:</th>

                  <td name="regno">{`${this.props.getStore().regno}`}</td>
                </tr>
                <tr>
                  <th scope="row">Name:</th>
                  <td name="name">{`${this.props.getStore().name}`}</td>
                </tr>
                <tr>
                  <th scope="row">Name Of Parent:</th>
                  <td name="nameOfParent">{`${
                    this.props.getStore().nameOfParent
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Gender:</th>
                  <td name="gender">{`${this.props.getStore().gender}`}</td>
                </tr>
                <tr>
                  <th scope="row">Date of Birth:</th>
                  <td name="dateOfBirth">{`${
                    this.props.getStore().dateOfBirth
                  }`}</td>
                </tr>
              </tbody>
            </Table>
            <h4 className="finalReviewHeader">SECONDARY DETAILS</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">Citizenship:</th>
                  <td name="citizenship">{`${
                    this.props.getStore().citizenship
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Nativity:</th>
                  <td name="nativity">{`${this.props.getStore().nativity}`}</td>
                </tr>
                <tr>
                  <th scope="row">Place of Birth:</th>
                  <td name="placeOfBirth">{`${
                    this.props.getStore().placeOfBirth
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Religion:</th>
                  <td name="religion">
                    {" "}
                    {`${this.props.getStore().religion}`}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Mother Tongue:</th>
                  <td name="motherTongue">{`${
                    this.props.getStore().motherTongue
                  }`}</td>
                </tr>
                <tr></tr>
                <tr></tr>
              </tbody>
            </Table>
            <Button className='btn btn-block'
              onClick={() => {
                this.props.jumpToStep(0);
              }}
            >
              Edit
            </Button>
            <h4 className="finalReviewHeader">ADDRESS DETAILS</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">Address:</th>
                  <td name="address">{`${this.props.getStore().address}`}</td>
                </tr>
                <tr>
                  <th scope="row">District:</th>
                  <td name="district">{`${this.props.getStore().district}`}</td>
                </tr>
                <tr>
                  <th scope="row">State:</th>
                  <td name="State">{`${this.props.getStore().State}`}</td>
                </tr>  
                <tr>
                  <th scope="row">Pin Code:</th>
                  <td name="pincode">{`${this.props.getStore().pincode}`}</td>
                </tr>
                <tr></tr>
                <tr></tr>
              </tbody>
            </Table>
            <h4 className="finalReviewHeader">CONTACT DETAILS</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">Mobile Number:</th>
                  <td name="mobileno">{`${this.props.getStore().mobileno}`}</td>
                </tr>
                <tr>
                  <th scope="row">Telephone No:</th>
                  <td name="telephoneno">{`${
                    this.props.getStore().telephoneno
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Email:</th>
                  <td name="email">{`${
                    this.props.getStore().email
                  }`}</td>
                </tr>
                <tr></tr>
                <tr></tr>
              </tbody>
            </Table>
            <Button className='btn btn-block'
              onClick={() => {
                this.props.jumpToStep(1);
              }}
            >
              Edit
            </Button>
            <h4 className="finalReviewHeader">COMMUNITY DETAILS</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">Community Name:</th>
                  <td name="nameOfCommunity">{`${
                    this.props.getStore().nameOfCommunity
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Caste Name:</th>
                  <td name="nameOfCaste">{`${
                    this.props.getStore().nameOfCaste
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Caste Code:</th>
                  <td name="casteCode">{`${
                    this.props.getStore().casteCode
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Sri Lankan Refugee:</th>
                  <td name="sriLankanRefugee">{`${
                    this.props.getStore().sriLankanRefugee
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Differently Abled:</th>
                  <td name="differentlyAbled">{`${
                    this.props.getStore().differentlyAbled
                  }`}</td>
                </tr>
                <tr></tr>
                <tr></tr>
              </tbody>
            </Table>
            
            <h4 className="finalReviewHeader">EDUCATIONAL DETAILS</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">Qualifying Degree:</th>
                  <td name="qualifyingDegree">{`${
                    this.props.getStore().qualifyingDegree
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Pattern of Study:</th>
                  <td name="ptternOfStudy">{`${
                    this.props.getStore().patternOfStudy
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Appearance In The Final:</th>
                  <td name="aappearanceInTheFinal">{`${
                    this.props.getStore().appearanceInTheFinal
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Tancent Marks In 2020:</th>
                  <td name="tancentMarks">{`${
                    this.props.getStore().tancentMarks
                  }`}</td>
                </tr>
                <tr></tr>
                <tr></tr>
              </tbody>
            </Table>
            <Table bordered>
              <thead>
                <tr>
                  <th>Class/Degree</th>
                  <th>Year Of Passing</th>
                  <th>Name Of School/College</th>
                  <th>District</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                <tr>
                  <th scope="row">X</th>
                  <td name="XyearOfPassing">{`${
                    this.props.getStore().XyearOfPassing
                  }`}</td>
                  <td name="XnameOfSchool">{`${
                    this.props.getStore().XnameOfSchool
                  }`}</td>
                  <td name="Xdistrict">{`${
                    this.props.getStore().Xdistrict
                  }`}</td>
                  <td name="Xstate">{`${this.props.getStore().Xstate}`}</td>
                  
                </tr>
                <tr>
                  <th scope="row">XII</th>
                  <td name="XIIyearOfPassing">{`${
                    this.props.getStore().XIIyearOfPassing
                  }`}</td>
                  <td name="XIInameOfSchool">{`${
                    this.props.getStore().XIInameOfSchool
                  }`}</td>
                  <td name="XIIdistrict">{`${this.props.getStore().XIIdistrict}`}</td>
                  <td name="XIIstate">{`${this.props.getStore().XIIstate}`}</td>
                  
                </tr>
                <tr>
                  <th scope="row">Degree</th>
                  <td name="year">{`${
                    this.props.getStore().degreeYearOfPassing
                  }`}</td>
                  <td name="degreeNameOfSchool">{`${
                    this.props.getStore().degreeNameOfSchool
                  }`}</td>
                  <td name="degreeDistrict">{`${
                    this.props.getStore().degreeDistrict
                  }`}</td>
                  <td name="degreeState">{`${
                    this.props.getStore().degreeState
                  }`}</td>
                  
                </tr>
              </tbody>
            </Table>
            <Button className='btn btn-block'
              onClick={() => {
                this.props.jumpToStep(2);
              }}
            >
              Edit
            </Button>
            <h4 className="finalReviewHeader">UG DEGREE DETAILS</h4>
            <Table bordered>
              <tbody>
                <tr>
                  <th scope="row">UG Degree:</th>
                  <td name="ugDegree">{`${this.props.getStore().ugDegree}`}</td>
                </tr>
                <tr>
                  <th scope="row">Name Of The College:</th>
                  <td name="collegeName">{`${
                    this.props.getStore().collegeName
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">College Address:</th>
                  <td name="collegeAddress">{`${
                    this.props.getStore().collegeAddress
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Name Of The University:</th>
                  <td name="universityName">{`${
                    this.props.getStore().universityName
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">Address Of The University:</th>
                  <td name="universityAddress">{`${
                    this.props.getStore().universityAddress
                  }`}</td>
                </tr>
                <tr></tr>
                <tr></tr>
              </tbody>
            </Table>
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
                {" "}
                <tr>
                  <th scope="row">I</th>
                  <td name="IsemMonth">{`${
                    this.props.getStore().IsemMonth
                  }`}</td>
                  <td name="Isemyop">{`${this.props.getStore().Isemyop}`}</td>
                  <td name="Isemmaxmarks">{`${
                    this.props.getStore().Isemmaxmarks
                  }`}</td>
                  <td name="Isemmarks">{`${
                    this.props.getStore().Isemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">II</th>
                  <td name="IIsemMonth">{`${
                    this.props.getStore().IIsemMonth
                  }`}</td>
                  <td name="IIsemyop">{`${this.props.getStore().IIsemyop}`}</td>
                  <td name="IIsemmaxmarks">{`${
                    this.props.getStore().IIsemmaxmarks
                  }`}</td>
                  <td name="IIsemmarks">{`${
                    this.props.getStore().IIsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">III</th>
                  <td name="IIIsemMonth">{`${
                    this.props.getStore().IIIsemMonth
                  }`}</td>
                  <td name="IIIsemyop">{`${
                    this.props.getStore().IIIsemyop
                  }`}</td>
                  <td name="IIIsemmaxmarks">{`${
                    this.props.getStore().IIIsemmaxmarks
                  }`}</td>
                  <td name="IIIsemmarks">{`${
                    this.props.getStore().IIIsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">IV</th>
                  <td name="IVsemMonth">{`${
                    this.props.getStore().IVsemMonth
                  }`}</td>
                  <td name="IVsemyop">{`${this.props.getStore().IVsemyop}`}</td>
                  <td name="IVsemmaxmarks">{`${
                    this.props.getStore().IVsemmaxmarks
                  }`}</td>
                  <td name="IVsemmarks">{`${
                    this.props.getStore().IVsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">V</th>
                  <td name="VsemMonth">{`${
                    this.props.getStore().VsemMonth
                  }`}</td>
                  <td name="Vsemyop">{`${this.props.getStore().Vsemyop}`}</td>
                  <td name="Vsemmaxmarks">{`${
                    this.props.getStore().Vsemmaxmarks
                  }`}</td>
                  <td name="Vsemmarks">{`${
                    this.props.getStore().Vsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">VI</th>
                  <td name="VIsemMonth">{`${
                    this.props.getStore().VIsemMonth
                  }`}</td>
                  <td name="VIsemyop">{`${this.props.getStore().VIsemyop}`}</td>
                  <td name="VIsemmaxmarks">{`${
                    this.props.getStore().VIsemmaxmarks
                  }`}</td>
                  <td name="VIsemmarks">{`${
                    this.props.getStore().VIsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">VII</th>
                  <td name="VIIsemMonth">{`${
                    this.props.getStore().VIIsemMonth
                  }`}</td>
                  <td name="VIIsemyop">{`${
                    this.props.getStore().VIIsemyop
                  }`}</td>
                  <td name="VIIsemmaxmarks">{`${
                    this.props.getStore().VIIsemmaxmarks
                  }`}</td>
                  <td name="VIIsemmarks">{`${
                    this.props.getStore().VIIsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">VIII</th>
                  <td name="VIIIsemMonth">{`${
                    this.props.getStore().VIIIsemMonth
                  }`}</td>
                  <td name="VIIIsemyop">{`${
                    this.props.getStore().VIIIsemyop
                  }`}</td>
                  <td name="VIIIsemmaxmarks">{`${
                    this.props.getStore().VIIIsemmaxmarks
                  }`}</td>
                  <td name="VIIIsemmarks">{`${
                    this.props.getStore().VIIIsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">IX</th>
                  <td name="IXsemMonth">{`${
                    this.props.getStore().IXsemMonth
                  }`}</td>
                  <td name="IXsemyop">{`${this.props.getStore().IXsemyop}`}</td>
                  <td name="IXsemmaxmarks">{`${
                    this.props.getStore().IXsemmaxmarks
                  }`}</td>
                  <td name="IXsemmarks">{`${
                    this.props.getStore().IXsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row">X</th>
                  <td name="XsemMonth">{`${
                    this.props.getStore().XsemMonth
                  }`}</td>
                  <td name="Xsemyop">{`${this.props.getStore().Xsemyop}`}</td>
                  <td name="Xsemmaxmarks">{`${
                    this.props.getStore().Xsemmaxmarks
                  }`}</td>
                  <td name="Xsemmarks">{`${
                    this.props.getStore().Xsemmarks
                  }`}</td>
                </tr>
                <tr>
                  <th scope="row" colSpan="3">
                    Overall Total
                  </th>
                  <td name="overalltotalmarks">
                    {`${this.props.getStore().overalltotalmarks}`}
                  </td>
                  <td name="overallmarksobtained">
                    {`${this.props.getStore().overallmarksobtained}`}
                  </td>
                </tr>
                <tr>
                  <th scope="row" colSpan="4">
                    Total % Of Marks
                  </th>
                  <td name="totalpermark">
                    {`${this.props.getStore().totalpermark}`}
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button className='btn btn-block'
              onClick={() => {
                this.props.jumpToStep(3);
              }}
            >
              Edit
            </Button>
          </CardBody> 
       </Card>
       <Link to='/payment'><Button onClick={this.handClick}>Go To Payment</Button></Link>
       <Link to='/userdashboard'><Button onClick={this.handClick}>Save And Pay Later</Button></Link>
      </div>
    );
  }
}
