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
      XIyearOfPassing: "",
      XInameOfSchool: "",
      XIstate: "",
      XIdistrict: "",
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
      nameOfUniversity: "",
      IsemMonth: "",
      Isemyop: "",
      Isemmaxmarks: "",
      Isemmarks: "",
      IIsemMonth: "",
      IIsemyop: "",
      IIsemmaxmarks: "",
      IIsemmarks: "",
      IIIsemMonth: "",
      IIIsemyop: "",
      IIIsemmaxmarks: "",
      IIIsemmarks: "",
      IVsemMonth: "",
      IVsemyop: "",
      IVsemmaxmarks: "",
      IVsemmarks: "",
      VsemMonth: "",
      Vsemyop: "",
      Vsemmaxmarks: "",
      Vsemmarks: "",
      VIsemMonth: "",
      VIsemyop: "",
      VIsemmaxmarks: "",
      VIsemmarks: "",
      VIIsemMonth: "",
      VIIsemyop: "",
      VIIsemmaxmarks: "",
      VIIsemmarks: "",
      VIIIsemMonth: "",
      VIIIsemyop: "",
      VIIIsemmaxmarks: "",
      VIIIsemmarks: "",
      IXsemMonth: "",
      IXsemyop: "",
      IXsemmaxmarks: "",
      IXsemmarks: "",
      XsemMonth: "",
      Xsemyop: "",
      Xsemmaxmarks: "",
      Xsemmarks: "",
      overalltot: "",
      overallmarks: "",
      totalpermark: "",
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
    console.log(this.state.users);
    
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
