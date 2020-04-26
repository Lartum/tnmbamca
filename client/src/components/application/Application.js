import React, { Component } from "react";
import StepZilla from "react-stepzilla";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Loading from '../common/Loading';
import Axios from "axios";
// import Step7 from "./Step7";
// import Step8 from "./Step8";
// import Step9 from "./Step9";
// import Step10 from "./Step10";
import "./css/main.css";


export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:null
    };

    this.sampleStore = {
      email: "",
      gender: "",
      regno: '',
      name: "",
      district: "",
      address: "",
      State: "",  
      pincode:'',
      nameOfParent: "",
      dateOfBirth: "",
      nativity:'',
      citizenship: "",
      placeOfBirth: "",
      religion: "",
      motherTongue: "",
      mobileno: "",
      telephoneno: "",
      nameOfCommunity: "",
      nameOfCaste: "",
      casteCode: "",
      sriLankanRefugee: "",
      differentlyAbled: "",
      qualifyingDegree: "",
      patternOfStudy: "",
      appearanceInTheFinal: "",
      tancentMarks: "",
      XyearOfPassing: "",
      XnameOfSchool: "",
      Xstate: "",
      Xdistrict: "",
      XIIyearOfPassing: "",
      XIInameOfSchool: "",
      XIIstate: "",
      XIIdistrict: "",
      degreeYearOfPassing: "",
      degreeNameOfSchool: "",
      degreeState: "",
      degreeDistrict: "",
      ugDegree: "",
      collegeName: "",
      collegeAddress: "",
      universityAddress: "",
      universityName: "",
      IsemMonth: "",
      Isemyop: "",
      Isemmaxmarks: 0,
      Isemmarks: 0,
      IIsemMonth: "",
      IIsemyop: "",
      IIsemmaxmarks: 0,
      IIsemmarks: 0,
      IIIsemMonth: "",
      IIIsemyop: "",
      IIIsemmaxmarks: 0,
      IIIsemmarks: 0,
      IVsemMonth: "",
      IVsemyop: "",
      IVsemmaxmarks: 0,
      IVsemmarks: 0,
      VsemMonth: "",
      Vsemyop: "",
      Vsemmaxmarks: 0,
      Vsemmarks: 0,
      VIsemMonth: "",
      VIsemyop: "",
      VIsemmaxmarks: 0,
      VIsemmarks: 0,
      VIIsemMonth: "",
      VIIsemyop: "",
      VIIsemmaxmarks: 0,
      VIIsemmarks: 0,
      VIIIsemMonth: "",
      VIIIsemyop: "",
      VIIIsemmaxmarks: 0,
      VIIIsemmarks: 0,
      IXsemMonth: "",
      IXsemyop: "",
      IXsemmaxmarks: 0,
      IXsemmarks: 0,
      XsemMonth: "",
      XsemyopL: "",
      Xsemmaxmarks: 0,
      Xsemmarks: 0,
      overalltot: 0,
      overallmarks: 0,
      totalpermark: 0,

      previewImage:'',
      savedToCloud: false
    };
  }

  componentDidMount() {
    Axios.get('/api/users/current')
      .then(res =>{
       const users = res.data;
       this.setState({users});
      })
  }
  
  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update
    };
  }

  render() {
    const steps = [
      {
        name: "Step1",
        component: (
          <Step1
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u);
            }}
          />
        )
      },
      {
        name: "Step2",
        component: (
          <Step2
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u);
            }}
          />
        )
      },
      {
        name: "Step3",
        component: (
          <Step3
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u);
            }}
          />
        )
      },
      {
        name: "step4",
        component: (
          <Step4
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u);
            }}
          />
        )
      },
      {
        name: "Step5",
        component: (
          <Step5
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u);
            }}
          />
        )
      },
      {
        name: "Step6",
        component: (
          <Step6
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u);
            }}
          />
        )
      }
      // {
      //   name: "Step7",
      //   component: (
      //     <Step7
      //       getStore={() => this.getStore()}
      //       updateStore={u => {
      //         this.updateStore(u);
      //       }}
      //     />
      //   )
      // }
      // {
      //   name: "Step8",
      //   component: (
      //     <Step8
      //       getStore={() => this.getStore()}
      //       updateStore={u => {
      //         this.updateStore(u);
      //       }}
      //     />
      //   )
      // },
      // {
      //   name: "Step9",
      //   component: (
      //     <Step9
      //       getStore={() => this.getStore()}
      //       updateStore={u => {
      //         this.updateStore(u);
      //       }}
      //     />
      //   )
      // },
      // {
      //   name: "Step10",
      //   component: (
      //     <Step10
      //       getStore={() => this.getStore()}
      //       updateStore={u => {
      //         this.updateStore(u);
      //       }}
      //     />
      //   )
      // }
    ];
    if(this.state.users === null){
      return(
       <Loading />
      )
    }
    if(this.state.users !== null){
    this.sampleStore.regno = this.state.users.regno;
    this.sampleStore.name = this.state.users.name;
    this.sampleStore.email = this.state.users.email;
    this.sampleStore.mobileno = this.state.users.phonenumber;
    this.sampleStore.tancentMarks = this.state.users.tancentmarks;
    return (
      <div className="example">
        <div className="step-progress">
          <StepZilla
            className="multi-step"
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Review Details"}
            hocValidationAppliedTo={[6]}
            startAtStep={
              window.sessionStorage.getItem("step")
                ? parseFloat(window.sessionStorage.getItem("step"))
                : 0
            }
            onStepChange={step => window.sessionStorage.setItem("step", step)}
          />
        </div>
      </div>
    );
    }
  }
}
