import React, { Component } from "react";
import StepZilla from "react-stepzilla";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Loading from "../common/Loading";
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
      users: null,
    };

    this.sampleStore = {
      email: null,
      gender: null,
      regno: null,
      name: null,
      district: null,
      address: null,
      State: null,
      pincode: null,
      nameOfParent: null,
      dateOfBirth: null,
      nativity: null,
      citizenship: null,
      placeOfBirth: null,
      religion: null,
      motherTongue: null,
      mobileno: null,
      telephoneno: null,
      nameOfCommunity: null,
      nameOfCaste: null,
      casteCode: null,
      sriLankanRefugee: null,
      differentlyAbled: null,
      qualifyingDegree: null,
      patternOfStudy: null,
      appearanceInTheFinal: null,
      tancentMarks: null,
      XyearOfPassing: null,
      XnameOfSchool: null,
      Xstate: null,
      Xdistrict: null,
      XIIyearOfPassing: null,
      XIInameOfSchool: null,
      XIIstate: null,
      XIIdistrict: null,
      degreeYearOfPassing: null,
      degreeNameOfSchool: null,
      degreeState: null,
      degreeDistrict: null,
      ugDegree: null,
      collegeName: null,
      collegeAddress: null,
      universityAddress: null,
      universityName: null,
      IsemMonth: null,
      Isemyop: null,
      Isemmaxmarks: 0,
      Isemmarks: 0,
      IIsemMonth: null,
      IIsemyop: null,
      IIsemmaxmarks: 0,
      IIsemmarks: 0,
      IIIsemMonth: null,
      IIIsemyop: null,
      IIIsemmaxmarks: 0,
      IIIsemmarks: 0,
      IVsemMonth: null,
      IVsemyop: null,
      IVsemmaxmarks: 0,
      IVsemmarks: 0,
      VsemMonth: null,
      Vsemyop: null,
      Vsemmaxmarks: 0,
      Vsemmarks: 0,
      VIsemMonth: null,
      VIsemyop: null,
      VIsemmaxmarks: 0,
      VIsemmarks: 0,
      VIIsemMonth: null,
      VIIsemyop: null,
      VIIsemmaxmarks: 0,
      VIIsemmarks: 0,
      VIIIsemMonth: null,
      VIIIsemyop: null,
      VIIIsemmaxmarks: 0,
      VIIIsemmarks: 0,
      IXsemMonth: null,
      IXsemyop: null,
      IXsemmaxmarks: 0,
      IXsemmarks: 0,
      XsemMonth: null,
      Xsemyop: null,
      Xsemmaxmarks: 0,
      Xsemmarks: 0,
      overalltotalmarks: 0,
      overallmarksobtained: 0,
      totalpermark: 0,

      previewImage: null,
      savedToCloud: false,
    };
  }

  componentDidMount() {
    Axios.get("/api/users/current").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    };
  }

  render() {
    const steps = [
      {
        name: "Basic Details",
        component: (
          <Step1
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u);
            }}
          />
        ),
      },
      {
        name: "Address Details",
        component: (
          <Step2
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u);
            }}
          />
        ),
      },
      {
        name: "Community Details",
        component: (
          <Step3
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u);
            }}
          />
        ),
      },
      {
        name: "U.G Details",
        component: (
          <Step4
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u);
            }}
          />
        ),
      },
      {
        name: "Photo Upload",
        component: (
          <Step5
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u);
            }}
          />
        ),
      },
      {
        name: "Preview Details",
        component: (
          <Step6
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u);
            }}
          />
        ),
      },
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
    if (this.state.users === null) {
      return <Loading />;
    }
    if (this.state.users !== null) {
      this.sampleStore.regno = this.state.users.regno;
      this.sampleStore.name = this.state.users.name;
      this.sampleStore.email = this.state.users.email;
      this.sampleStore.mobileno = this.state.users.phonenumber;
      this.sampleStore.tancentMarks = this.state.users.tancentmarks;
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
              onStepChange={(step) =>
                window.sessionStorage.setItem("step", step)
              }
            />
          </div>
        </div>
      );
    }
  }
}
