import React from "react";
import { Jumbotron, Container, Button} from 'reactstrap'
import axios from "axios";
import { saveAs } from 'file-saver';

const Submit = (setForm, formData, navigation ) => {
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

  const createAndDownloadPdf = () => {
    axios.post('/api/pdfgenerate/create-pdf',formData)
      .then(() => axios.get('/api/pdfgenerate/fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        saveAs(pdfBlob, 'newPdf.pdf');
      })
    }
  
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Congrats!</h1>
          <p className="lead">You have Successfully Registered your Application, click the button below to download your pdf</p>
        </Container>
        <Button onClick={createAndDownloadPdf}>Download PDF</Button>
      </Jumbotron>
    </div>
  )};

export default Submit;