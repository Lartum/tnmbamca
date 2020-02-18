import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import BasicDetails from "./basicDetails";
import SecondaryDetails from "./secondaryDetails.js";
import AddressDetails from "./addressDetails";
import ContactDetails from "./contactDetails";
import CommunityDetails from "./communityDetails"
import EducationalDetails from "./educationalDetails";
import UgDegreeDetails from "./ugDegreeDetails";
import Review from "./Review";
import Submit from "./Submit";

// import "./styles.css";

const steps = [
  { id: "basicDetails" },
  { id: "secondaryDetails" },
  { id: "addressDetails" },
  { id: "contactDetails" },
  { id: "communityDetails" },
  { id: "educationalDetails" },
  { id: "ugDegreeDetails" },
  { id: "review"},
  { id: "submit" }
];

const data = {
    _userid:"",
    regno:"222334",
    name:"lartum Raksap",
    nameOfParent:"Gelar raksap",
    gender:"male",
    dateOfBirth:"20-11-1998",    
    citizenship:"Indian",
    religion:"Christian",
    motherTongue:"Galo",
    address:"Qtr no. 7 type II",
    State:"Arunachal Pradesh",
    district:"Papum Pare",
    pincode:"79111",
    mobileNo:"7539904083",
    telephoneNo:"7539904083",
    useremail:"lraksap11@gmail.com",
    nameOfCommunity:"ST",
    nameOfCaste:"Dont know",
    casteCode:"900",
    sriLankanRefugee:"no",
    qualifyingDegree:"B.E",
    patternOfStudy:"Dont know",
    appearanceInTheFinal:"Dont know",
    tancentMarks:"480",
    mathsStudied:"yes",
    XI_yearOfPassing:"20-11-2014",
    XI_nameOfSchool:"Pubyang Academy",
    XI_state:"Arunachal Pradesh",
    XI_district:"Papum Pare",
    XII_yearOfPassing:"20-11-2016",
    XII_nameOfSchool:"Gyan Ganga Vidyapeeth",
    XII_state:"Arunachal Pradesh",
    XII_district:"Papum Pare",
    degree_YearOfPassing:"",
    degree_NameOfSchool:"",
    degree_State:"",
    degree_District:"",
    ugDegree: "B.E",
    collegeName: "Government College Of Technology",
    collegeAddress: "Thadagam Rd",
    universityAddress: "Anna University",
    IsemMonth: "June",
    Isemyop: "20-01-2017",
    Isemmaxmarks: "100",
    Isemmarks: "54", 
    IIsemMonth: "January",
    IIsemyop: "07-07-2017",
    IIsemmaxmarks: "100",
    IIsemmarks: "54",
    IIIsemMonth: "February",
    IIIsemyop: "20-11-2018",
    IIIsemmaxmarks: "100",
    IIIsemmarks: "52",
    IVsemMonth: "November",
    IVsemyop: "december",
    IVsemmaxmarks: "100",
    IVsemmarks: "54",
    VsemMonth: "January",
    Vsemyop: "14-04-2018",
    Vsemmaxmarks: "100",
    Vsemmarks: "56",
    VIsemMonth: "November",
    VIsemyop: "20-11-2018",
    VIsemmaxmarks: "100",
    VIsemmarks: "58",
    VIIsemMonth: "December",
    VIIsemyop: "14-12-2019",
    VIIsemmaxmarks: "100",
    VIIsemmarks: "62",
    VIIIsemMonth: "January",
    VIIIsemyop: "30-04-2020",
    VIIIsemmaxmarks: "100",
    VIIIsemmarks: "23123",
    IXsemMonth: "",
    IXsemyop: "",
    IXsemmaxmarks: "",
    Xsemmarks: "",
    XsemMonth: "",
    Xsemyop: "",
    Xsemmaxmarks: "",
    overalltot:"788",
    overallmarks:"800",
    totalpermark:"86"
  
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(data);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "basicDetails":
      return <BasicDetails {...props} />;
    case "secondaryDetails":
      return <SecondaryDetails {...props} />;
    case "addressDetails":
      return <AddressDetails {...props} />;
      case "contactDetails":
      return <ContactDetails {...props} />;
    case "communityDetails":
      return <CommunityDetails {...props} />;
    case "educationalDetails":
      return <EducationalDetails {...props} />;
    case "ugDegreeDetails":
      return <UgDegreeDetails {...props} />;
    case "review":
        return <Review {...props} />;
    case "submit":
        return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
