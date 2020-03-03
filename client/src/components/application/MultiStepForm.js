import React from "react";
import { useForm, useStep } from "react-hooks-helper";


import BasicDetails from "./basicDetails";
import SecondaryDetails from "./secondaryDetails.js";
import AddressDetails from "./addressDetails";
import ContactDetails from "./contactDetails";
import CommunityDetails from "./communityDetails";
import EducationalDetails from "./educationalDetails";
import UgDegreeDetails from "./ugDegreeDetails";
import Review from "./Review";
import Submit from "./Submit";

const steps = [
  { id: "basicDetails" },
  { id: "secondaryDetails" },
  { id: "addressDetails" },
  { id: "contactDetails" },
  { id: "communityDetails" },
  { id: "educationalDetails" },
  { id: "ugDegreeDetails" },
  { id: "review" },
  { id: "submit" }
];

const data = {
  _userid: '',
  regno: '',
  name:'hello',
  nameOfParent:'hello',
  gender:'yello',
  dateOfBirth:'yello',
  citizenship:'hello',
  religion:'hello',
  motherTongue:'hello',
  address: "Qtr no. 7 type II",
  State: "Arunachal Pradesh",
  district: "Papum Pare",
  pincode: "79111",
  mobileno: "7539904083",
  telephoneno: "7539904083",
  useremail: "lraksap11@gmail.com",
  nameOfCommunity: "ST",
  nameOfCaste: "Dont know",
  casteCode: "900",
  sriLankanRefugee: "no",
  qualifyingDegree: "B.E",
  patternOfStudy: "Dont know",
  appearanceInTheFinal: "Dont know",
  tancentMarks: "480",
  mathsStudied: "yes",
  yearOfPassing11: "NA",
  nameOfSchool11: "NA",
  state11: "NA",
  district11: "NA",
  yearOfPassing12: "NA",
  nameOfSchool12: "NA",
  state12: "NA",
  district12: "NA",
  degreeYearOfPassing: "NA",
  degreeNameOfSchool: "NA",
  degreeState: "NA",
  degreeDistrict: "NA",
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
  overalltot: "788",
  overallmarks: "800",
  totalpermark: "86"
};

const MultiStepForm = ({ callback, validate }) => {
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
      return'hello';
  }
};

export default MultiStepForm;
