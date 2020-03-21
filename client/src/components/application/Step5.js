import React, { Component } from "react";
import {
  Col,
  Row,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ugDegree: this.refs.ugDegree,
      collegeName: this.refs.collegeName,
      collegeAddress: this.refs.collegeAddress,
      nameOfUniversity: this.refs.nameOfUniversity,
      universityAddress: this.refs.universityAddress,
      IsemMonth: this.refs.IsemMonth,
      Isemyop: this.refs.Isemyop,
      Isemmaxmarks: this.refs.Isemmaxmarks,
      Isemmarks: this.refs.Isemmarks,
      IIsemMonth: this.refs.IIsemMonth,
      IIsemyop: this.refs.IIsemyop,
      IIsemmaxmarks: this.refs.IIsemmaxmarks,
      IIsemmarks: this.refs.IIsemmarks,
      IIIsemMonth: this.refs.IIIsemMonth,
      IIIsemyop: this.refs.IIIsemyop,
      IIIsemmaxmarks: this.refs.IIIsemmaxmarks,
      IIIsemmarks: this.refs.IIIsemmarks,
      IVsemMonth: this.refs.IVsemMonth,
      IVsemyop: this.refs.IVsemyop,
      IVsemmaxmarks: this.refs.IVsemmaxmarks,
      IVsemmarks: this.refs.IVsemmarks,
      VsemMonth: this.refs.VsemMonth,
      Vsemyop: this.refs.Vsemyop,
      Vsemmaxmarks: this.refs.Vsemmaxmarks,
      Vsemmarks: this.refs.Vsemmarks,
      VIsemMonth: this.refs.VIsemMonth,
      VIsemyop: this.refs.VIsemyop,
      VIsemmaxmarks: this.refs.VIsemmaxmarks,
      VIsemmarks: this.refs.VIsemmarks,
      VIIsemMonth: this.refs.VIIsemMonth,
      VIIsemyop: this.refs.VIIsemyop,
      VIIsemmaxmarks: this.refs.VIIsemmaxmarks,
      VIIsemmarks: this.refs.VIIsemmarks,
      VIIIsemMonth: this.refs.VIIIsemMonth,
      VIIIsemyop: this.refs.VIIIsemyop,
      VIIIsemmaxmarks: this.refs.VIIIsemmaxmarks,
      VIIIsemmarks: this.refs.VIIIsemmarks,
      IXsemMonth: this.refs.IXsemMonth,
      Xsemyop: this.refs.IXsemyop,
      IXsemmaxmarks: this.refs.IXsemmaxmarks,
      IXsemmarks: this.refs.IXsemmarks,
      XsemMonth: this.refs.XsemMonth,
      Xsemyop: this.refs.Xsemyop,
      Xsemmaxmarks: this.refs.Xsemmaxmarks,
      Xsemmarks: this.refs.Xsemmarks,
      overalltot: this.refs.overalltot,
      overallmarks: this.refs.overallmarks,
      totalpermark: this.refs.totalpermark,

      month_names: []
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
    this.setState({
      month_names: [
        { id: "", name: "Please Select" },
        { id: "January", name: "January" },
        { id: "February", name: "February" },
        { id: "March", name: "March" },
        { id: "April", name: "April" },
        { id: "May", name: "May" },
        { id: "June", name: "June" },
        { id: "July", name: "July" },
        { id: "August", name: "August" },
        { id: "September", name: "September" },
        { id: "October", name: "October" },
        { id: "November", name: "November" },
        { id: "December", name: "December" }
      ]
    });
  }

  componentWillUnmount() {}

  isValidated() {
    const userInput = this._grabUserinput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewInput).every(k => {
        return validateNewInput[k] === true;
      })
    ) {
      if (
        this.props.getStore().ugDegree != userInput.ugDegree ||
        this.props.getStore().collegeName != userInput.collegeName ||
        this.props.getStore().collegeAddress != userInput.collegeAddress ||
        this.props.getStore().nameOfUniversity != userInput.nameOfUniversity ||
        this.props.getStore().universityAddress != userInput.universityAddress
      ) {
        this.props.updateStore({
          ...userInput,
          savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        }); // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation state but NOT the UI Data State
      this.setState(
        Object.assign(
          userInput,
          validateNewInput,
          this._validationErrors(validateNewInput)
        )
      );
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand) return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(
      Object.assign(
        userInput,
        validateNewInput,
        this._validationErrors(validateNewInput)
      )
    );
  }
  _validateData(data) {
    return {
      ugDegreeVal: data.ugDegree != 0,
      collegeNameVal: data.collegeName != 0,
      collegeAddressVal: data.collegeAddress != 0,
      nameOfUniversityVal: data.nameOfUniversity != 0,
      universityAddressVal: data.universityAddress != 0
      // ugDegreeVal: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      //   data.ugDegree
      // ) // required: regex w3c uses in html5
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      ugDegreeValMsg: val.ugDegreeVal ? "" : "* Field Required",
      collegeNameValMsg: val.collegeNameVal ? "" : "* Field Required",
      collegeAddressValMsg: val.collegeAddressVal ? "" : "* Field Required",
      nameOfUniversityValMsg: val.nameOfUniversityVal ? "" : "* Field Required",
      universityAddressValMsg: val.universityAddressVal
        ? ""
        : "* Field Required"
      // ugDegreeValMsg: val.ugDegreeVal ? "" : "A valid ugDegree is required"
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      ugDegree: this.refs.ugDegree.value,
      collegeName: this.refs.collegeName.value,
      collegeAddress: this.refs.collegeAddress.value,
      nameOfUniversity: this.refs.nameOfUniversity.value,
      universityAddress: this.refs.universityAddress.value,
      IsemMonth: this.refs.IsemMonth.value,
      Isemyop: this.refs.Isemyop.value,
      Isemmaxmarks: this.refs.Isemmaxmarks.value,
      Isemmarks: this.refs.Isemmarks.value,
      IIsemMonth: this.refs.IIsemMonth.value,
      IIsemyop: this.refs.IIsemyop.value,
      IIsemmaxmarks: this.refs.IIsemmaxmarks.value,
      IIsemmarks: this.refs.IIsemmarks.value,
      IIIsemMonth: this.refs.IIIsemMonth.value,
      IIIsemyop: this.refs.IIIsemyop.value,
      IIIsemmaxmarks: this.refs.IIIsemmaxmarks.value,
      IIIsemmarks: this.refs.IIIsemmarks.value,
      IVsemMonth: this.refs.IVsemMonth.value,
      IVsemyop: this.refs.IVsemyop.value,
      IVsemmaxmarks: this.refs.IVsemmaxmarks.value,
      IVsemmarks: this.refs.IVsemmarks.value,
      VsemMonth: this.refs.VsemMonth.value,
      Vsemyop: this.refs.Vsemyop.value,
      Vsemmaxmarks: this.refs.Vsemmaxmarks.value,
      Vsemmarks: this.refs.Vsemmarks.value,
      VIsemMonth: this.refs.VIsemMonth.value,
      VIsemyop: this.refs.VIsemyop.value,
      VIsemmaxmarks: this.refs.VIsemmaxmarks.value,
      VIsemmarks: this.refs.VIsemmarks.value,
      VIIsemMonth: this.refs.VIIsemMonth.value,
      VIIsemyop: this.refs.VIIsemyop.value,
      VIIsemmaxmarks: this.refs.VIIsemmaxmarks.value,
      VIIsemmarks: this.refs.VIIsemmarks.value,
      VIIIsemMonth: this.refs.VIIIsemMonth.value,
      VIIIsemyop: this.refs.VIIIsemyop.value,
      VIIIsemmaxmarks: this.refs.VIIIsemmaxmarks.value,
      VIIIsemmarks: this.refs.VIIIsemmarks.value,
      IXsemMonth: this.refs.IXsemMonth.value,
      IXsemyop: this.refs.IXsemyop.value,
      IXsemmaxmarks: this.refs.IXsemmaxmarks.value,
      IXsemmarks: this.refs.IXsemmarks.value,
      XsemMonth: this.refs.XsemMonth.value,
      Xsemyop: this.refs.Xsemyop.value,
      Xsemmaxmarks: this.refs.Xsemmaxmarks.value,
      Xsemmarks: this.refs.Xsemmarks.value,

      overalltot: this.refs.overalltot.value,
      overallmarks: this.refs.overallmarks.value,
      totalpermark: this.refs.totalpermark.value
    };
  }

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    //UG Degree
    if (typeof this.state.ugDegreeVal == "text" || this.state.ugDegreeVal) {
      notValidClasses.ugDegreeCls = "no-error col-md-10";
    } else {
      notValidClasses.ugDegreeCls = "has-error col-md-10";
      notValidClasses.ugDegreeValGrpCls = "val-err-tooltip";
    }

    //College Name
    if (
      typeof this.state.collegeNameVal == "text" ||
      this.state.collegeNameVal
    ) {
      notValidClasses.collegeNameCls = "no-error col-md-8";
    } else {
      notValidClasses.collegeNameCls = "has-error col-md-8";
      notValidClasses.collegeNameValGrpCls = "val-err-tooltip";
    }

    //College Address
    if (
      typeof this.state.collegeAddressVal == "text" ||
      this.state.collegeAddressVal
    ) {
      notValidClasses.collegeAddressCls = "no-error col-md-10";
    } else {
      notValidClasses.collegeAddressCls = "has-error col-md-10";
      notValidClasses.collegeAddressValGrpCls = "val-err-tooltip";
    }

    //Name of University
    if (
      typeof this.state.nameOfUniversityVal == "text" ||
      this.state.nameOfUniversityVal
    ) {
      notValidClasses.nameOfUniversityCls = "no-error col-md-10";
    } else {
      notValidClasses.nameOfUniversityCls = "has-error col-md-10";
      notValidClasses.nameOfUniversityValGrpCls = "val-err-tooltip";
    }

    //Address of The University
    if (
      typeof this.state.universityAddressVal == "text" ||
      this.state.universityAddressVal
    ) {
      notValidClasses.universityAddressCls = "no-error col-md-10";
    } else {
      notValidClasses.universityAddressCls = "has-error col-md-10";
      notValidClasses.universityAddressValGrpCls = "val-err-tooltip";
    }

    //Get Year
    const maxyear = new Date().getFullYear();
    const maxyear_1 = maxyear - 1;
    const maxyear_2 = maxyear - 2;
    const maxyear_3 = maxyear - 3;
    const maxyear_4 = maxyear - 4;
    const maxyear_5 = maxyear - 5;
    const maxyear_6 = maxyear - 6;

    //Get Month Names
    const { month_names } = this.state;

    let month_names_List =
      month_names.length > 0 &&
      month_names.map((month, month_index) => {
        return (
          <option key={month_index} value={month.id}>
            {month.name}
          </option>
        );
      }, this);

    return (
      <div className="step step5">
        <Card>
          <CardHeader>
            Details of Marks in UG Degree Qualifying Examinations
          </CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="ugDegree">
                    <span className="asterix_color">*</span>UG Degree
                  </label>
                  <div
                    className={notValidClasses.ugDegreeCls}
                    className="error_color"
                  >
                    <input
                      ref="ugDegree"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.ugDegree}
                    />
                    <div className={notValidClasses.ugDegreeValGrpCls}>
                      {this.state.ugDegreeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="collegeName">
                    <span className="asterix_color">*</span>Name Of The College
                  </label>
                  <div
                    className={notValidClasses.collegeNameCls}
                    className="error_color"
                  >
                    <input
                      ref="collegeName"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.collegeName}
                    />
                    <div className={notValidClasses.collegeNameValGrpCls}>
                      {this.state.collegeNameValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="collegeAddress">
                    <span className="asterix_color">*</span>College Address
                  </label>
                  <div
                    className={notValidClasses.collegeAddressCls}
                    className="error_color"
                  >
                    <input
                      ref="collegeAddress"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.collegeAddress}
                    />
                    <div className={notValidClasses.collegeAddressValGrpCls}>
                      {this.state.collegeAddressValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="nameOfUniversity">
                    <span className="asterix_color">*</span>Name Of The
                    University
                  </label>
                  <div
                    className={notValidClasses.nameOfUniversityCls}
                    className="error_color"
                  >
                    <input
                      ref="nameOfUniversity"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.nameOfUniversity}
                    />
                    <div className={notValidClasses.nameOfUniversityValGrpCls}>
                      {this.state.nameOfUniversityValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={7}>
                <FormGroup>
                  <label for="universityAddress">
                    <span className="asterix_color">*</span>Address of The
                    University
                  </label>
                  <div
                    className={notValidClasses.universityAddressCls}
                    className="error_color"
                  >
                    <input
                      ref="universityAddress"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.universityAddress}
                    />
                    <div className={notValidClasses.universityAddressValGrpCls}>
                      {this.state.universityAddressValMsg}
                    </div>
                  </div>
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
                  <td>
                    <select
                      ref="IsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.IsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="Isemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.Isemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="Isemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.Isemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="Isemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.Isemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">II</th>
                  <td>
                    <select
                      ref="IIsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.IIsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="IIsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.IIsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="IIsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IIsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="IIsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IIsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">III</th>
                  <td>
                    <select
                      ref="IIIsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.IIIsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="IIIsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.IIIsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="IIIsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IIIsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="IIIsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IIIsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">IV</th>
                  <td>
                    <select
                      ref="IVsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.IVsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="IVsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.IVsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="IVsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IVsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="IVsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IVsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">V</th>
                  <td>
                    <select
                      ref="VsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.VsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="Vsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.Vsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="Vsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.Vsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="Vsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.Vsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">VI</th>
                  <td>
                    <select
                      ref="VIsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.VIsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="VIsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.VIsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="VIsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.VIsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="VIsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.VIsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">VII</th>
                  <td>
                    <select
                      ref="VIIsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="VIIsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="VIIsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="VIIsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">VIII</th>
                  <td>
                    <select
                      ref="VIIIsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIIsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="VIIIsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIIsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="VIIIsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIIsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="VIIIsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.VIIIsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">IX</th>
                  <td>
                    <select
                      ref="IXsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.IXsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="IXsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.IXsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="IXsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IXsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="IXsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.IXsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">X</th>
                  <td>
                    <select
                      ref="XsemMonth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.XsemMonth}
                    >
                      {month_names_List}
                    </select>
                  </td>
                  <td>
                    <select
                      ref="Xsemyop"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.Xsemyop}
                    >
                      <option value={maxyear}> {maxyear}</option>
                      <option value={maxyear_1}> {maxyear_1}</option>
                      <option value={maxyear_2}> {maxyear_2}</option>
                      <option value={maxyear_3}> {maxyear_3}</option>
                      <option value={maxyear_4}> {maxyear_4}</option>
                      <option value={maxyear_5}> {maxyear_5}</option>
                      <option value={maxyear_6}> {maxyear_6}</option>
                    </select>
                  </td>
                  <td>
                    <input
                      ref="Xsemmaxmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.Xsemmaxmarks}
                    />
                  </td>
                  <td>
                    <input
                      ref="Xsemmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.Xsemmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" colSpan="3">
                    Overall Total
                  </th>
                  <td>
                    <input
                      ref="overalltot"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.overalltot}
                    />
                  </td>
                  <td>
                    <input
                      ref="overallmarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.overallmarks}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" colSpan="4">
                    Total % Of Marks
                  </th>
                  <td>
                    <input
                      ref="totalpermark"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.totalpermark}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}
