import React, { Component } from "react";
import { Col, Row, FormGroup, Card, CardHeader, CardBody } from "reactstrap";

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regno: props.getStore().regno,
      name: props.getStore().name,
      nameOfParent: props.getStore().nameOfParent,
      gender: props.getStore().gender,
      dateOfBirth: props.getStore().dateOfBirth,
      citizenship: props.getStore().citizenship,
      nativity: props.getStore().nativity,
      placeOfBirth: props.getStore().placeOfBirth,
      religion: props.getStore().religion,
      motherTongue: props.getStore().motherTongue
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

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
        this.props.getStore().name !== userInput.name ||
        this.props.getStore().nameOfParent !== userInput.nameOfParent ||
        this.props.getStore().gender !== userInput.gender ||
        this.props.getStore().dateOfBirth !== userInput.dateOfBirth ||
        this.props.getStore().citizenship !== userInput.citizenship ||
        this.props.getStore().nativity !== userInput.nativity ||
        this.props.getStore().placeOfBirth !== userInput.placeOfBirth ||
        this.props.getStore().religion !== userInput.religion ||
        this.props.getStore().motherTongue !== userInput.motherTongue
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
      nameVal: data.name != 0,
      nameOfParentVal: data.nameOfParent != 0,
      genderVal: data.gender != 0,
      dateOfBirthVal: data.dateOfBirth != 0,
      citizenshipVal: data.citizenship != 0,
      nativityVal: data.nativity != 0,
      placeOfBirthVal: data.placeOfBirth != 0,
      religionVal: data.religion != 0,
      motherTongueVal: data.motherTongue != 0
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      nameValMsg: val.nameVal ? "" : "* Field Required",
      nameOfParentValMsg: val.nameOfParentVal ? "" : "* Field Required",
      genderValMsg: val.genderVal ? "" : "* Select Gender",
      dateOfBirthValMsg: val.dateOfBirthVal ? "" : "* Pick Date",
      citizenshipValMsg: val.citizenshipVal ? "" : "* Field Required",
      nativityValMsg: val.nativityVal ? "" : "* Field Required",
      placeOfBirthValMsg: val.placeOfBirthVal ? "" : "* Field Required",
      religionValMsg: val.religionVal ? "" : "* Field Required",
      motherTongueValMsg: val.motherTongueVal ? "" : "* Field Required"
      // ugDegreeValMsg: val.ugDegreeVal ? "" : "A valid ugDegree is required"
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      regno: this.refs.regno.value,
      name: this.refs.name.value,
      nameOfParent: this.refs.nameOfParent.value,
      gender: this.refs.gender.value,
      dateOfBirth: this.refs.dateOfBirth.value,
      citizenship: this.refs.citizenship.value,
      nativity: this.refs.nativity.value,
      placeOfBirth: this.refs.placeOfBirth.value,
      religion: this.refs.religion.value,
      motherTongue: this.refs.motherTongue.value
    };
  }

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    //Name
    if (typeof this.state.nameVal === "undefined" || this.state.nameVal) {
      notValidClasses.nameCls = "no-error col-md-10";
    } else {
      notValidClasses.nameCls = "has-error col-md-10";
      notValidClasses.nameValGrpCls = "val-err-tooltip";
    }

    //Name of Parent
    if (
      typeof this.state.nameOfParentVal === "undefined" ||
      this.state.nameOfParentVal
    ) {
      notValidClasses.nameOfParentCls = "no-error col-md-10";
    } else {
      notValidClasses.nameOfParentCls = "has-error col-md-10";
      notValidClasses.nameOfParentValGrpCls = "val-err-tooltip";
    }

    //Gender
    if (typeof this.state.genderVal === "undefined" || this.state.genderVal) {
      notValidClasses.genderCls = "no-error col-md-8";
    } else {
      notValidClasses.genderCls = "has-error col-md-8";
      notValidClasses.genderValGrpCls = "val-err-tooltip";
    }

    //Date Of Birth
    if (
      typeof this.state.dateOfBirthVal === "undefined" ||
      this.state.dateOfBirthVal
    ) {
      notValidClasses.dateOfBirthCls = "no-error col-md-10";
    } else {
      notValidClasses.dateOfBirthCls = "has-error col-md-10";
      notValidClasses.dateOfBirthValGrpCls = "val-err-tooltip";
    }

    //citizenship
    if (
      typeof this.state.citizenshipVal === "undefined" ||
      this.state.citizenshipVal
    ) {
      notValidClasses.citizenshipCls = "no-error col-md-10";
    } else {
      notValidClasses.citizenshipCls = "has-error col-md-10";
      notValidClasses.citizenshipValGrpCls = "val-err-tooltip";
    }

    //Nativity
    if (
      typeof this.state.nativityVal === "undefined" ||
      this.state.nativityVal
    ) {
      notValidClasses.nativityCls = "no-error col-md-10";
    } else {
      notValidClasses.nativityCls = "has-error col-md-10";
      notValidClasses.nativityValGrpCls = "val-err-tooltip";
    }

    //Place Of Birth
    if (
      typeof this.state.placeOfBirthVal === "undefined" ||
      this.state.placeOfBirthVal
    ) {
      notValidClasses.placeOfBirthCls = "no-error col-md-10";
    } else {
      notValidClasses.placeOfBirthCls = "has-error col-md-10";
      notValidClasses.placeOfBirthValGrpCls = "val-err-tooltip";
    }

    //Religion
    if (
      typeof this.state.religionVal === "undefined" ||
      this.state.religionVal
    ) {
      notValidClasses.religionCls = "no-error col-md-10";
    } else {
      notValidClasses.religionCls = "has-error col-md-10";
      notValidClasses.religionValGrpCls = "val-err-tooltip";
    }

    //Mother Tongue
    if (
      typeof this.state.motherTongueVal === "undefined" ||
      this.state.motherTongueVal
    ) {
      notValidClasses.motherTongueCls = "no-error col-md-10";
    } else {
      notValidClasses.motherTongueCls = "has-error col-md-10";
      notValidClasses.motherTongueValGrpCls = "val-err-tooltip";
    }

    return (
      <div className="step step1">
        <Card>
          <CardHeader><h3 style={{textAlign:"center",color:'limegreen'}}>BASIC DETAILS</h3></CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="regno">Tancent Register Number: </label>
                  <input
                    ref="regno"
                    readOnly
                    autoComplete="off"
                    type="number"
                    className="form-control"
                    required
                    defaultValue={this.state.regno}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="name">
                    <span className="asterix_color">*</span>Name
                  </label>
                  <div
                    className={notValidClasses.nameCls}
                    className="error_color"
                  >
                    <input
                      ref="name"
                      autoComplete="off"
                      readOnly
                      type="name"
                      className="form-control"
                      required
                      defaultValue={this.state.name}
                    />
                    <div className={notValidClasses.nameValGrpCls}>
                      {this.state.nameValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="nameOfParent">
                    <span className="asterix_color">*</span>Name Of Parent/Guardian
                  </label>
                  <div
                    className={notValidClasses.nameOfParentCls}
                    className="error_color"
                  >
                    <input
                      ref="nameOfParent"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.nameOfParent}
                    />
                    <div className={notValidClasses.nameOfParentValGrpCls}>
                      {this.state.nameOfParentValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="gender">
                    <span className="asterix_color">*</span>Gender
                  </label>
                  <div
                    className={notValidClasses.genderCls}
                    className="error_color"
                  >
                    <select
                      ref="gender"
                      autoComplete="off"
                      className="form-control"
                      required
                      defaultValue={this.state.gender}
                    >
                      <option value="">Please select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                    </select>
                    <div className={notValidClasses.genderValGrpCls}>
                      {this.state.genderValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <label for="dateOfBirth">
                <span className="asterix_color">*</span>Date Of Birth
              </label>
              <div
                className={notValidClasses.dateOfBirthCls}
                className="error_color"
              >
                <input
                  ref="dateOfBirth"
                  autoComplete="off"
                  max="1999-12-31"
                  min='1994-01-01'
                  type="date"
                  className="form-control"
                  required
                  defaultValue={this.state.dateOfBirth}
                />
                <div className={notValidClasses.dateOfBirthValGrpCls}>
                  {this.state.dateOfBirthValMsg}
                </div>
              </div>
            </FormGroup>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><h3 style={{textAlign:"center", color:'limegreen'}}>SECONDARY DETAILS</h3></CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="citizenship">
                    <span className="asterix_color">*</span>Citizenship
                  </label>
                  <div
                    className={notValidClasses.citizenshipCls}
                    className="error_color"
                  >
                    <input
                      ref="citizenship"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.citizenship}
                    />
                    <div className={notValidClasses.citizenshipValGrpCls}>
                      {this.state.citizenshipValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="nativity">
                    <span className="asterix_color">*</span>Nativity
                  </label>
                  <div
                    className={notValidClasses.nativityCls}
                    className="error_color"
                  >
                    <input
                      ref="nativity"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.nativity}
                    />
                    <div className={notValidClasses.nativityValGrpCls}>
                      {this.state.nativityValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="placeOfBirth">
                    <span className="asterix_color">*</span>Place Of Birth
                  </label>
                  <div
                    className={notValidClasses.placeOfBirthCls}
                    className="error_color"
                  >
                    <input
                      ref="placeOfBirth"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.placeOfBirth}
                    />
                    <div className={notValidClasses.placeOfBirthValGrpCls}>
                      {this.state.placeOfBirthValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="religion">
                    <span className="asterix_color">*</span>Religion
                  </label>
                  <div
                    className={notValidClasses.religionCls}
                    className="error_color"
                  >
                    <select
                      ref="religion"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.religion}
                    >
                      <option value="">* Please select</option>
                      <option Value="Hindu">Hindu</option>
                      <option Value="Christian">Christian</option>
                      <option Value="Islam">Islam</option>
                      <option Value="Sikhism">Sikhism</option>
                      <option Value="Jainism">Jainism</option>
                      <option Value="Buddhism">Buddhism</option>
                      <option Value="Jainism">Jainism</option>
                    </select>
                    <div className={notValidClasses.religionValGrpCls}>
                      {this.state.religionValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="motherTongue">
                    <span className="asterix_color">*</span>Mother Tongue
                  </label>
                  <div
                    className={notValidClasses.motherTongueCls}
                    className="error_color"
                  >
                    <select
                      ref="motherTongue"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.motherTongue}
                    >
                      <option value="">* Please select</option>
                      <option value="Tamil">Tamil</option>
                      <option value="Telugu">Telugu</option>
                      <option value="Malayalam">Malayalam</option>
                      <option value="Kannada">Kannada</option>
                      <option value="Others">Others</option>
                    </select>
                    <div className={notValidClasses.motherTongueValGrpCls}>
                      {this.state.motherTongueValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
