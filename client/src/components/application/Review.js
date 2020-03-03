import React from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

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
    XInameOfSchool,
    XIstate,
    XIdistrict,
    XIIyearOfPassing,
    XIInameOfSchool,
    XIIstate,
    XIIdistrict,
    degreeYearOfPassing,
    degreeNameOfSchool,
    degreeState,
    ugDegree,
    collegeName,
    collegeAddress,
    degreeDistrict,
    nameOfUniversity,
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
    totalpermark
  } = formData;

  const { go } = navigation;
  const submitData = () => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = axios.post("/api/application", formData, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader className="reviewHeaders">
          Review Entered Details
        </CardHeader>
        <CardBody>
          <h4 className="finalReviewHeader">BASIC DETAILS</h4>
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
                <td name="nameOfParent" value={nameOfParent}>
                  {" "}
                  {`${nameOfParent}`}
                </td>
              </tr>
              <tr>
                <th scope="row">Gender:</th>
                <td name="gender" value={gender}>{`${gender}`}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth:</th>
                <td name="dateOfBirth" value={dateOfBirth}>
                  {`${dateOfBirth}`}
                </td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={() => go("basicDetails")}>Edit</Button>
          <h4 className="finalReviewHeader">SECONDARY DETAILS</h4>
          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">Citizenship:</th>
                <td
                  name="citizenship"
                  value={citizenship}
                >{`${citizenship}`}</td>
              </tr>
              <tr>
                <th scope="row">Place of Birth:</th>
                <td
                  name="placeOfBirth"
                  value={placeOfBirth}
                >{`${placeOfBirth}`}</td>
              </tr>
              <tr>
                <th scope="row">Religion:</th>
                <td name="religion" value={religion}>
                  {" "}
                  {`${religion}`}
                </td>
              </tr>
              <tr>
                <th scope="row">Mother Tongue:</th>
                <td
                  name="motherTongue"
                  value={motherTongue}
                >{`${motherTongue}`}</td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
          <Button onClick={() => go("secondaryDetails")}>Edit</Button>
          <h4 className="finalReviewHeader">ADDRESS DETAILS</h4>
          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">Address:</th>
                <td name="address" value={address}>{`${address}`}</td>
              </tr>
              <tr>
                <th scope="row">State:</th>
                <td name="State" value={State}>{`${State}`}</td>
              </tr>
              <tr>
                <th scope="row">District:</th>
                <td name="district" value={district}>
                  {" "}
                  {`${district}`}
                </td>
              </tr>
              <tr>
                <th scope="row">Pin Code:</th>
                <td name="pincode" value={pincode}>{`${pincode}`}</td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
          <Button onClick={() => go("addressDetails")}>Edit</Button>
          <h4 className="finalReviewHeader">CONTACT DETAILS</h4>
          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">Mobile Number:</th>
                <td name="mobileno" value={mobileno}>{`${mobileno}`}</td>
              </tr>
              <tr>
                <th scope="row">Telephone No:</th>
                <td
                  name="telephoneno"
                  value={telephoneno}
                >{`${telephoneno}`}</td>
              </tr>
              <tr>
                <th scope="row">Email:</th>
                <td name="useremail" value={useremail}>{`${useremail}`}</td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
          <Button onClick={() => go("contactDetails")}>Edit</Button>
          <h4 className="finalReviewHeader">COMMUNITY DETAILS</h4>
          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">Community Name:</th>
                <td
                  name="nameOfCommunity"
                  value={nameOfCommunity}
                >{`${nameOfCommunity}`}</td>
              </tr>
              <tr>
                <th scope="row">Caste Name:</th>
                <td
                  name="nameOfCaste"
                  value={nameOfCaste}
                >{`${nameOfCaste}`}</td>
              </tr>
              <tr>
                <th scope="row">Caste Code:</th>
                <td name="casteCode" value={casteCode}>{`${casteCode}`}</td>
              </tr>
              <tr>
                <th scope="row">Sri Lankan Refugee:</th>
                <td
                  name="sriLankanRefugee"
                  value={sriLankanRefugee}
                >{`${sriLankanRefugee}`}</td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </Table>
          <Button onClick={() => go("communityDetails")}>Edit</Button>
          <h4 className="finalReviewHeader">EDUCATIONAL DETAILS</h4>
          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">Qualifying Degree:</th>
                <td
                  name="qualifyingDegree"
                  value={qualifyingDegree}
                >{`${qualifyingDegree}`}</td>
              </tr>
              <tr>
                <th scope="row">Pattern of Study:</th>
                <td
                  name="ptternOfStudy"
                  value={patternOfStudy}
                >{`${patternOfStudy}`}</td>
              </tr>
              <tr>
                <th scope="row">Appearance In The Final:</th>
                <td
                  name="appearanceInTheFinal"
                  value={appearanceInTheFinal}
                >{`${appearanceInTheFinal}`}</td>
              </tr>
              <tr>
                <th scope="row">Tancent Marks In 2020:</th>
                <td
                  name="tancentMarks"
                  value={tancentMarks}
                >{`${tancentMarks}`}</td>
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
                <th>State</th>
                <th>District</th>
              </tr>
            </thead>
            <tbody>
              {" "}
              <tr>
                <th scope="row">XI</th>
                <td
                  name="XIyearOfPassing"
                  value={XIyearOfPassing}
                >{`${XIyearOfPassing}`}</td>
                <td
                  name="XInameOfSchool"
                  value={XInameOfSchool}
                >{`${XInameOfSchool}`}</td>
                <td name="XIstate" value={XIstate}>{`${XIstate}`}</td>
                <td name="XIdistrict" value={XIdistrict}>{`${XIdistrict}`}</td>
              </tr>
              <tr>
                <th scope="row">XII</th>
                <td
                  name="XIIyearOfPassing"
                  value={XIIyearOfPassing}
                >{`${XIIyearOfPassing}`}</td>
                <td
                  name="XIInameOfSchool"
                  value={XIInameOfSchool}
                >{`${XIInameOfSchool}`}</td>
                <td name="XIIstate" value={XIIstate}>{`${XIIstate}`}</td>
                <td
                  name="XIIdistrict"
                  value={XIIdistrict}
                >{`${XIIdistrict}`}</td>
              </tr>
              <tr>
                <th scope="row">Degree</th>
                <td
                  name="year"
                  value={degreeYearOfPassing}
                >{`${degreeYearOfPassing}`}</td>
                <td
                  name="degreeNameOfSchool"
                  value={degreeNameOfSchool}
                >{`${degreeNameOfSchool}`}</td>
                <td
                  name="degreeState"
                  value={degreeState}
                >{`${degreeState}`}</td>
                <td
                  name="degreeDistrict"
                  value={degreeDistrict}
                >{`${degreeDistrict}`}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={() => go("educationalDetails")}>Edit</Button>
          <h4 className="finalReviewHeader">UG DEGREE DETAILS</h4>
          <Table bordered>
            <tbody>
              <tr>
                <th scope="row">UG Degree:</th>
                <td name="ugDegree" value={ugDegree}>{`${ugDegree}`}</td>
              </tr>
              <tr>
                <th scope="row">Name Of The College:</th>
                <td
                  name="collegeName"
                  value={collegeName}
                >{`${collegeName}`}</td>
              </tr>
              <tr>
                <th scope="row">College Address:</th>
                <td
                  name="collegeAddress"
                  value={collegeAddress}
                >{`${collegeAddress}`}</td>
              </tr>
              <tr>
                <th scope="row">Name Of The University:</th>
                <td
                  name="nameOfUniversity"
                  value={nameOfUniversity}
                >{`${nameOfUniversity}`}</td>
              </tr>
              <tr>
                <th scope="row">Address Of The University:</th>
                <td
                  name="universityAddress"
                  value={universityAddress}
                >{`${universityAddress}`}</td>
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
                <td name="IsemMonth" value={IsemMonth}>{`${IsemMonth}`}</td>
                <td name="Isemyop" value={Isemyop}>{`${Isemyop}`}</td>
                <td
                  name="Isemmaxmarks"
                  value={Isemmaxmarks}
                >{`${Isemmaxmarks}`}</td>
                <td name="Isemmarks" value={Isemmarks}>{`${Isemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">II</th>
                <td name="IIsemMonth" value={IIsemMonth}>{`${IIsemMonth}`}</td>
                <td name="IIsemyop" value={IIsemyop}>{`${IIsemyop}`}</td>
                <td
                  name="IIsemmaxmarks"
                  value={IIsemmaxmarks}
                >{`${Isemmaxmarks}`}</td>
                <td name="IIsemmarks" value={IIsemmarks}>{`${IIsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">III</th>
                <td
                  name="IIIsemMonth"
                  value={IIIsemMonth}
                >{`${IIIsemMonth}`}</td>
                <td name="IIIsemyop" value={IIIsemyop}>{`${IIIsemyop}`}</td>
                <td
                  name="IIIsemmaxmarks"
                  value={IIIsemmaxmarks}
                >{`${IIIsemmaxmarks}`}</td>
                <td
                  name="IIIsemmarks"
                  value={IIIsemmarks}
                >{`${IIIsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">IV</th>
                <td name="IVsemMonth" value={IVsemMonth}>{`${IVsemMonth}`}</td>
                <td name="IVsemyop" value={IVsemyop}>{`${IVsemyop}`}</td>
                <td
                  name="IVsemmaxmarks"
                  value={IVsemmaxmarks}
                >{`${IVsemmaxmarks}`}</td>
                <td name="IVsemmarks" value={IVsemmarks}>{`${IVsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">V</th>
                <td name="VsemMonth" value={VsemMonth}>{`${VsemMonth}`}</td>
                <td name="Vsemyop" value={Vsemyop}>{`${Vsemyop}`}</td>
                <td
                  name="Vsemmaxmarks"
                  value={Vsemmaxmarks}
                >{`${Vsemmaxmarks}`}</td>
                <td name="Vsemmarks" value={Vsemmarks}>{`${Vsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">VI</th>
                <td name="VIsemMonth" value={VIsemMonth}>{`${VIsemMonth}`}</td>
                <td name="VIsemyop" value={VIsemyop}>{`${VIsemyop}`}</td>
                <td
                  name="VIsemmaxmarks"
                  value={VIsemmaxmarks}
                >{`${VIsemmaxmarks}`}</td>
                <td name="VIsemmarks" value={VIsemmarks}>{`${VIsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">VII</th>
                <td
                  name="VIIsemMonth"
                  value={VIIsemMonth}
                >{`${VIIsemMonth}`}</td>
                <td name="VIIsemyop" value={VIIsemyop}>{`${VIIsemyop}`}</td>
                <td
                  name="VIIsemmaxmarks"
                  value={VIIsemmaxmarks}
                >{`${VIIsemmaxmarks}`}</td>
                <td
                  name="VIIsemmarks"
                  value={VIIsemmarks}
                >{`${VIIsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">VIII</th>
                <td
                  name="VIIIsemMonth"
                  value={VIIIsemMonth}
                >{`${VIIIsemMonth}`}</td>
                <td name="VIIIsemyop" value={VIIIsemyop}>{`${VIIIsemyop}`}</td>
                <td
                  name="VIIIsemmaxmarks"
                  value={VIIIsemmaxmarks}
                >{`${VIIIsemmaxmarks}`}</td>
                <td
                  name="VIIIsemmarks"
                  value={VIIIsemmarks}
                >{`${VIIIsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">IX</th>
                <td name="IXsemMonth" value={IXsemMonth}>{`${IXsemMonth}`}</td>
                <td name="IXsemyop" value={IXsemyop}>{`${IXsemyop}`}</td>
                <td
                  name="IXsemmaxmarks"
                  value={IXsemmaxmarks}
                >{`${IXsemmaxmarks}`}</td>
                <td name="IXsemmarks" value={IXsemmarks}>{`${IXsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row">X</th>
                <td name="XsemMonth" value={XsemMonth}>{`${XsemMonth}`}</td>
                <td name="Xsemyop" value={Xsemyop}>{`${Xsemyop}`}</td>
                <td
                  name="Xsemmaxmarks"
                  value={Xsemmaxmarks}
                >{`${Xsemmaxmarks}`}</td>
                <td name="Xsemmarks" value={Xsemmarks}>{`${Xsemmarks}`}</td>
              </tr>
              <tr>
                <th scope="row" colSpan="3">
                  Overall Total
                </th>
                <td name="overalltot" value={overallmarks}>
                  {`${overallmarks}`}
                </td>
                <td name="overallmarks" value={overallmarks}>
                  {`${overallmarks}`}
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="4">
                  Total % Of Marks
                </th>
                <td name="totalpermark" value={totalpermark}>
                  {`${totalpermark}`}
                </td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={() => go("ugDegreeDetails")}>Edit</Button>
        </CardBody>
      </Card>
      <Link to="/submit">
        {" "}
        <Button className="buttonAlignCentre" onClick={submitData}>
          Submit
        </Button>{" "}
      </Link>
    </div>
  );
};

export default Review;
