import React, { Component } from "react";
import { Col, Row, FormGroup, Card, CardHeader, CardBody, Table } from "reactstrap";
import { caste_all_list, casteList, communityNames } from "./dataset";
import { states, districts } from './dataset';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOfCommunity: props.getStore().nameOfCommunity,
      nameOfCaste: props.getStore().nameOfCaste,
      casteCode: props.getStore().casteCode,
      sriLankanRefugee: props.getStore().sriLankanRefugee,
      differentlyAbled: props.getStore().differentlyAbled,
      qualifyingDegree: props.getStore().qualifyingDegree,
      patternOfStudy: props.getStore().patternOfStudy,
      appearanceInTheFinal: props.getStore().appearanceInTheFinal,
      tancentMarks: props.getStore().tancentMarks,
      XyearOfPassing: props.getStore().XyearOfPassing,
      XnameOfSchool: props.getStore().XnameOfSchool,
      Xstate: props.getStore().Xstate,
      Xdistrict: props.getStore().Xdistrict,
      XIIyearOfPassing: props.getStore().XIIyearOfPassing,
      XIInameOfSchool: props.getStore().XIInameOfSchool,
      XIIstate: props.getStore().XIIstate,
      XIIdistrict: props.getStore().XIIdistrict,
      degreeYearOfPassing: props.getStore().degreeYearOfPassing,
      degreeNameOfSchool: props.getStore().degreeNameOfSchool,
      degreeState: props.getStore().degreeState,
      degreeDistrict: props.getStore().degreeDistrict,
      selected_state_name: "",
      selected_community_name: "",
      community_names: [],
      state_names: [],
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
    this.setState({
      community_names: communityNames,
      state_names: states
    });
  }

  componentWillUnmount() {}

  isValidated() {
    const userinput = this._grabUserinput(); // grab user entered vals
    const validateNewinput = this._validateData(userinput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewinput).every(k => {
        return validateNewinput[k] === true;
      })
    ) {
      if (
        this.props.getStore().nameOfCommunity !== userinput.nameOfCommunity ||
        this.props.getStore().nameOfCaste !== userinput.nameOfCaste ||
        this.props.getStore().casteCode !== userinput.casteCode ||
        this.props.getStore().sriLankanRefugee !== userinput.sriLankanRefugee ||
        this.props.getStore().differentlyAbled !== userinput.differentlyAbled ||
        this.props.getStore().qualifyingDegree !== userinput.qualifyingDegree ||
        this.props.getStore().patternOfStudy !== userinput.patternOfStudy ||
        this.props.getStore().appearanceInTheFinal !==
          userinput.appearanceInTheFinal ||
        this.props.getStore().tancentMarks !== userinput.tancentMarks
      ) {
        // only update store of something changed
        this.props.updateStore({
          ...userinput,
          savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        }); // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation nameOfCommunity but NOT the UI Data nameOfCommunity
      this.setState(
        Object.assign(
          userinput,
          validateNewinput,
          this._validationErrors(validateNewinput)
        )
      );
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand) return;

    const userinput = this._grabUserinput(); // grab user entered vals
    const validateNewinput = this._validateData(userinput); // run the new input against the validator

    this.setnameOfCommunity(
      Object.assign(
        userinput,
        validateNewinput,
        this._validationErrors(validateNewinput)
      )
    );
  }

  _validateData(data) {
    return {
      nameOfCommunityVal: data.nameOfCommunity != 0,
      nameOfCasteVal: data.nameOfCaste != 0,
      casteCodeVal: data.casteCode != 0,
      sriLankanRefugeeVal: data.sriLankanRefugee != 0,
      differentlyAbledVal: data.differentlyAbled != 0,
      qualifyingDegreeVal: data.qualifyingDegree != 0,
      patternOfStudyVal: data.patternOfStudy != 0,
      appearanceInTheFinalVal: data.appearanceInTheFinal != 0,
      tancentMarksVal: data.tancentMarks != 0
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      nameOfCommunityValMsg: val.nameOfCommunityVal ? "" : "* Field Required",
      nameOfCasteValMsg: val.nameOfCasteVal ? "" : "* Field Required",
      casteCodeValMsg: val.casteCodeVal ? "" : "* Field Required",
      sriLankanRefugeeValMsg: val.sriLankanRefugeeVal ? "" : "* Field Required",
      differentlyAbledValMsg: val.differentlyAbledVal ? "" : "* Field Required",
      qualifyingDegreeValMsg: val.qualifyingDegreeVal ? "" : "* Field Required",
      patternOfStudyValMsg: val.patternOfStudyVal
        ? ""
        : "* Select Study Pattern",
      appearanceInTheFinalValMsg: val.appearanceInTheFinalVal
        ? ""
        : "* Field Required",
      tancentMarksValMsg: val.tancentMarksVal ? "" : "* Field Required"
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      nameOfCommunity: this.refs.nameOfCommunity.value,
      nameOfCaste: this.refs.nameOfCaste.value,
      casteCode: this.refs.casteCode.value,
      sriLankanRefugee: this.refs.sriLankanRefugee.value,
      differentlyAbled: this.refs.differentlyAbled.value,
      qualifyingDegree: this.refs.qualifyingDegree.value,
      patternOfStudy: this.refs.patternOfStudy.value,
      appearanceInTheFinal: this.refs.appearanceInTheFinal.value,
      tancentMarks: this.refs.tancentMarks.value,
      XyearOfPassing: this.refs.XyearOfPassing.value,
      XnameOfSchool: this.refs.XnameOfSchool.value,
      Xstate: this.refs.Xstate.value,
      Xdistrict: this.refs.Xdistrict.value,
      XIIyearOfPassing: this.refs.XIIyearOfPassing.value,
      XIInameOfSchool: this.refs.XIInameOfSchool.value,
      XIIstate: this.refs.XIIstate.value,
      XIIdistrict: this.refs.XIIdistrict.value,
      degreeYearOfPassing: this.refs.degreeYearOfPassing.value,
      degreeNameOfSchool: this.refs.degreeNameOfSchool.value,
      degreeState: this.refs.degreeState.value,
      degreeDistrict: this.refs.degreeDistrict.value
    };
  }

  listen_to_community_name_change = ({ target: { value } }) => {
    this.setState({ selected_community_name: value });
  };

  listen_to_caste_name_change = ({ target: { value } }) => {
    // console.log(Object.keys());
    const Caste_All_List = caste_all_list
    const index_of_caste = (Caste_All_List.indexOf(value) + 1).toString();
    this.setState({ casteCode: index_of_caste });
  };

  
  listen_to_state_name_change_X = ({ target: { value } }) => {
    if (value === "Tamil Nadu") {
      this.setState({ selected_state_name_X: value });
    } else {
      this.setState({ selected_state_name_X: "Other" });
    }
  };

  listen_to_state_name_change_XII = ({ target: { value } }) => {
    if (value === "Tamil Nadu") {
      this.setState({ selected_state_name_XII: value });
    } else {
      this.setState({ selected_state_name_XII: "Other" });
    }
  };

  listen_to_state_name_change_Degree = ({ target: { value } }) => {
    if (value === "Tamil Nadu") {
      this.setState({ selected_state_name_Degree: value });
    } else {
      this.setState({ selected_state_name_Degree: "Other" });
    }
  };


  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    //nameofcommunity
    if (
      typeof this.state.nameOfCommunityVal === "undefined" ||
      this.state.nameOfCommunityVal
    ) {
      notValidClasses.nameOfCommunityCls = "no-error col-md-10";
    } else {
      notValidClasses.nameOfCommunityCls = "has-error col-md-10";
      notValidClasses.nameOfCommunityValGrpCls = "val-err-tooltip";
    }

    //nameofcaste
    if (
      typeof this.state.nameOfCasteVal === "undefined" ||
      this.state.nameOfCasteVal
    ) {
      notValidClasses.nameOfCasteCls = "no-error col-md-10";
    } else {
      notValidClasses.nameOfCasteCls = "has-error col-md-10";
      notValidClasses.nameOfCasteValGrpCls = "val-err-tooltip";
    }

    //castecode
    if (
      typeof this.state.casteCodeVal === "undefined" ||
      this.state.casteCodeVal
    ) {
      notValidClasses.casteCodeCls = "no-error col-md-10";
    } else {
      notValidClasses.casteCodeCls = "has-error col-md-10";
      notValidClasses.casteCodeValGrpCls = "val-err-tooltip";
    }

    //sriLankanRefugee
    if (
      typeof this.state.sriLankanRefugeeVal === "undefined" ||
      this.state.sriLankanRefugeeVal
    ) {
      notValidClasses.sriLankanRefugeeCls = "no-error col-md-10";
    } else {
      notValidClasses.sriLankanRefugeeCls = "has-error col-md-10";
      notValidClasses.sriLankanRefugeeValGrpCls = "val-err-tooltip";
    }

    //differentlyAbled
    if (
      typeof this.state.differentlyAbledVal === "undefined" ||
      this.state.differentlyAbledVal
    ) {
      notValidClasses.differentlyAbledCls = "no-error col-md-10";
    } else {
      notValidClasses.differentlyAbledCls = "has-error col-md-10";
      notValidClasses.differentlyAbledValGrpCls = "val-err-tooltip";
    }

    //Qualifying Degree
    if (
      typeof this.state.qualifyingDegreeVal === "undefined" ||
      this.state.qualifyingDegreeVal
    ) {
      notValidClasses.qualifyingDegreeCls = "no-error col-md-10";
    } else {
      notValidClasses.qualifyingDegreeCls = "has-error col-md-10";
      notValidClasses.qualifyingDegreeValGrpCls = "val-err-tooltip";
    }

    //Pattern of Study
    if (
      typeof this.state.patternOfStudyVal === "undefined" ||
      this.state.patternOfStudyVal
    ) {
      notValidClasses.patternOfStudyCls = "no-error col-md-8";
    } else {
      notValidClasses.patternOfStudyCls = "has-error col-md-8";
      notValidClasses.patternOfStudyValGrpCls = "val-err-tooltip";
    }

    //Appearance in the Final Exam
    if (
      typeof this.state.appearanceInTheFinalVal === "undefined" ||
      this.state.appearanceInTheFinalVal
    ) {
      notValidClasses.appearanceInTheFinalCls = "no-error col-md-10";
    } else {
      notValidClasses.appearanceInTheFinalCls = "has-error col-md-10";
      notValidClasses.appearanceInTheFinalValGrpCls = "val-err-tooltip";
    }

    //Tancent Marks
    if (
      typeof this.state.tancentMarksVal === "undefined" ||
      this.state.tancentMarksVal
    ) {
      notValidClasses.tancentMarksCls = "no-error col-md-10";
    } else {
      notValidClasses.tancentMarksCls = "has-error col-md-10";
      notValidClasses.tancentMarksValGrpCls = "val-err-tooltip";
    }

    //Year List
    const maxyear = new Date().getFullYear();
    const maxyear_1 = maxyear - 1;
    const maxyear_2 = maxyear - 2;
    const maxyear_3 = maxyear - 3;
    const maxyear_4 = maxyear - 4;
    const maxyear_5 = maxyear - 5;
    const maxyear_6 = maxyear - 6;
    const maxyear_7 = maxyear - 7;
    const maxyear_8 = maxyear - 8;
    const maxyear_9 = maxyear - 9;

    //District List
    const ditrict_list = districts


    //Get State Names
    const { state_names } = this.state;

    let state_names_List =
      state_names.length > 0 &&
      state_names.map((state_name, state_index) => {
        return (
          <option key={state_index} value={state_name.id}>
            {state_name.name}
          </option>
        );
      }, this);

    //Get District Names
    const { selected_state_name_X } = this.state;
    const district_names_X = ditrict_list[selected_state_name_X];

    const { selected_state_name_XII } = this.state;
    const district_names_XII = ditrict_list[selected_state_name_XII];

    const { selected_state_name_Degree } = this.state;
    const district_names_Degree = ditrict_list[selected_state_name_Degree];


    const caste_list = casteList;
    //Get Community Names
    const { community_names } = this.state;

    let community_names_List =
      community_names.length > 0 &&
      community_names.map((community_name, community_index) => {
        return (
          <option key={community_index} value={community_name.id}>
            {community_name.name}
          </option>
        );
      }, this);

    //Get Caste Names
    const { selected_community_name } = this.state;
    const caste_names = caste_list[selected_community_name];

    return (
      <div className="step step3">
        <Card>
          <CardHeader><h3 style={{textAlign:"center", color:'orange'}}>COMMUNITY DETAILS</h3></CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="nameOfCommunity">
                    <span className="asterix_color">*</span>Name Of Community
                  </label>
                  <div
                    className={notValidClasses.nameOfCommunityCls}
                    className="error_color"
                  >
                    <select
                      ref="nameOfCommunity"
                      autoComplete="off"
                      type="select"
                      onChange={this.listen_to_community_name_change}
                      className="form-control"
                      required
                      defaultValue={this.state.nameOfCommunity}
                    >
                      {community_names_List}
                    </select>
                    <div className={notValidClasses.nameOfCommunityValGrpCls}>
                      {this.state.nameOfCommunityValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="nameOfCaste">
                    <span className="asterix_color">*</span>Name Of Caste
                  </label>
                  <div
                    className={notValidClasses.nameOfCasteCls}
                    className="error_color"
                  >
                    <select
                      ref="nameOfCaste"
                      autoComplete="off"
                      type="select"
                      onChange={this.listen_to_caste_name_change}
                      className="form-control"
                      required
                      defaultValue={this.state.nameOfCaste}
                    >
                      {caste_names &&
                        caste_names.map(caste_name => (
                          <option key={caste_name.id}>{caste_name.text}</option>
                        ))}
                    </select>
                    <div className={notValidClasses.nameOfCasteValGrpCls}>
                      {this.state.nameOfCasteValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="casteCode">
                    <span className="asterix_color">*</span>Caste code
                  </label>
                  <div
                    className={notValidClasses.casteCodeCls}
                    className="error_color"
                  >
                    <input
                      ref="casteCode"
                      autoComplete="off"
                      type="text"
                      readOnly
                      className="form-control"
                      required
                      defaultValue={this.state.casteCode}
                    />
                    <div className={notValidClasses.casteCodeValGrpCls}>
                      {this.state.casteCodeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="sriLankanRefugee">
                    <span className="asterix_color">*</span>SriLankan Tamil
                    Refugee
                  </label>
                  <div
                    className={notValidClasses.sriLankanRefugeeCls}
                    className="error_color"
                  >
                    <select
                      ref="sriLankanRefugee"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.sriLankanRefugee}
                    >
                      <option value="">* Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className={notValidClasses.sriLankanRefugeeValGrpCls}>
                      {this.state.sriLankanRefugeeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="differentlyAbled">
                    <span className="asterix_color">*</span>Differently Abled
                  </label>
                  <div
                    className={notValidClasses.sriLankanRefugeeCls}
                    className="error_color"
                  >
                    <select
                      ref="differentlyAbled"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.differentlyAbled}
                    >
                      <option value="">* Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className={notValidClasses.differentlyAbledValGrpCls}>
                      {this.state.differentlyAbledValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
 
       {/* Educational Details Table */}
        <div>
        <Card>
          <CardHeader><h3 style={{textAlign:"center", color:'limegreen'}}>EDUCATIONAL DETAILS</h3></CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="qualifyingDegree">
                    <span className="asterix_color">*</span>Qualifying Degree
                  </label>
                  <div
                    className={notValidClasses.qualifyingDegreeCls}
                    className="error_color"
                  >
                    <input
                      ref="qualifyingDegree"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.qualifyingDegree}
                    />
                    <div className={notValidClasses.qualifyingDegreeValGrpCls}>
                      {this.state.qualifyingDegreeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="patternOfStudy">
                    <span className="asterix_color">*</span>Pattern Of Study
                  </label>
                  <div
                    className={notValidClasses.patternOfStudyCls}
                    className="error_color"
                  >
                    <select
                      ref="patternOfStudy"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.patternOfStudy}
                    >
                      <option value="">Please select</option>
                      <option value="10 + Plus Two + 3 Years Degree">
                        10 + Plus Two + 3 Years Degree
                      </option>
                      <option value="10 + 3 Years Diploma + 3 Years Degree">
                        10 + 3 Years Diploma + 3 Years Degree
                      </option>
                      <option value="10 + 2 + 4">
                       10 + Plus Two + 4 Years Degree
                      </option>
                    </select>
                    <div className={notValidClasses.patternOfStudyValGrpCls}>
                      {this.state.patternOfStudyValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="appearanceInTheFinal">
                    <span className="asterix_color">*</span>Appearance In The
                    Final
                  </label>
                  <div
                    className={notValidClasses.appearanceInTheFinalCls}
                    className="error_color"
                  >
                    <select
                      ref="appearanceInTheFinal"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.appearanceInTheFinal}
                    >
                      <option value="">* Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div
                      className={
                        notValidClasses.appearanceInTheFinalValGrpCls
                      }
                    >
                      {this.state.appearanceInTheFinalValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="tancentMarks">
                    Tancent Marks In {(new Date().getFullYear())}
                  </label>
                  <div
                    className={notValidClasses.tancentMarksCls}
                    className="error_color"
                  >
                    <input
                      ref="tancentMarks"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      readOnly
                      required
                      defaultValue={this.state.tancentMarks}
                    />
                    <div className={notValidClasses.tancentMarksValGrpCls}>
                      {this.state.tancentMarksValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
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
                  <tr>
                    <th scope="row">X</th>
                    <td>
                      <select
                        ref="XyearOfPassing"
                        autoComplete="off"
                        type="select"
                        className="form-control"
                        required
                        defaultValue={this.state.XyearOfPassing}
                      >
                        <option value={maxyear}> {maxyear}</option>
                        <option value={maxyear_1}> {maxyear_1}</option>
                        <option value={maxyear_2}> {maxyear_2}</option>
                        <option value={maxyear_3}> {maxyear_3}</option>
                        <option value={maxyear_4}> {maxyear_4}</option>
                        <option value={maxyear_5}> {maxyear_5}</option>
                        <option value={maxyear_6}> {maxyear_6}</option>
                        <option value={maxyear_7}> {maxyear_7}</option>
                        <option value={maxyear_8}> {maxyear_8}</option>
                        <option value={maxyear_9}> {maxyear_9}</option>
                      </select>
                    </td>
                    <td>
                      <input
                        ref="XnameOfSchool"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        required
                        defaultValue={this.state.XnameOfSchool}
                      />
                    </td>
                    <td>
                      <select
                        ref="Xstate"
                        autoComplete="off"
                        type="text"
                        onChange={this.listen_to_state_name_change_X}
                        className="form-control"
                        required
                        defaultValue={this.state.Xstate}
                      >
                        {state_names_List}
                      </select>
                    </td>
                    <td>
                      <select
                        ref="Xdistrict"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        required
                        defaultValue={this.state.Xdistrict}
                      >
                        {district_names_X &&
                          district_names_X.map(district_name => (
                            <option
                              key={district_name.id}
                              value={district_name.id}
                            >
                              {district_name.text}
                            </option>
                          ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">XII/Diploma</th>
                    <td>
                      <select
                        ref="XIIyearOfPassing"
                        autoComplete="off"
                        type="select"
                        className="form-control"
                        required
                        defaultValue={this.state.XIIyearOfPassing}
                      >
                        <option value={maxyear}> {maxyear}</option>
                        <option value={maxyear_1}> {maxyear_1}</option>
                        <option value={maxyear_2}> {maxyear_2}</option>
                        <option value={maxyear_3}> {maxyear_3}</option>
                        <option value={maxyear_4}> {maxyear_4}</option>
                        <option value={maxyear_5}> {maxyear_5}</option>
                        <option value={maxyear_6}> {maxyear_6}</option>
                        <option value={maxyear_7}> {maxyear_7}</option>
                        <option value={maxyear_8}> {maxyear_8}</option>
                        <option value={maxyear_9}> {maxyear_9}</option>
                      </select>
                    </td>
                    <td>
                      <input
                        ref="XIInameOfSchool"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        required
                        defaultValue={this.state.XIInameOfSchool}
                      />
                    </td>
                    <td>
                      <select
                        ref="XIIstate"
                        autoComplete="off"
                        type="text"
                        onChange={this.listen_to_state_name_change_XII}
                        className="form-control"
                        required
                        defaultValue={this.state.XIIstate}
                      >
                        {state_names_List}
                      </select>
                    </td>
                    <td>
                      <select
                        ref="XIIdistrict"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        required
                        defaultValue={this.state.XIIdistrict}
                      >
                        {district_names_XII &&
                          district_names_XII.map(district_name => (
                            <option
                              key={district_name.id}
                              value={district_name.id}
                            >
                              {district_name.text}
                            </option>
                          ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Degree</th>
                    <td>
                      <select
                        ref="degreeYearOfPassing"
                        autoComplete="off"
                        type="select"
                        className="form-control"
                        required
                        defaultValue={this.state.degreeYearOfPassing}
                      >
                        <option value={maxyear}> {maxyear}</option>
                        <option value={maxyear_1}> {maxyear_1}</option>
                        <option value={maxyear_2}> {maxyear_2}</option>
                        <option value={maxyear_3}> {maxyear_3}</option>
                        <option value={maxyear_4}> {maxyear_4}</option>
                        <option value={maxyear_5}> {maxyear_5}</option>
                        <option value={maxyear_6}> {maxyear_6}</option>
                        <option value={maxyear_7}> {maxyear_7}</option>
                        <option value={maxyear_8}> {maxyear_8}</option>
                        <option value={maxyear_9}> {maxyear_9}</option>
                      </select>
                    </td>
                    <td>
                      <input
                        ref="degreeNameOfSchool"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        required
                        defaultValue={this.state.degreeNameOfSchool}
                      />
                    </td>
                    <td>
                      <select
                        ref="degreeState"
                        autoComplete="off"
                        type="text"
                        onChange={this.listen_to_state_name_change_Degree}
                        className="form-control"
                        required
                        defaultValue={this.state.degreeState}
                      >
                        {state_names_List}
                      </select>
                    </td>
                    <td>
                      <select
                        ref="degreeDistrict"
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        required
                        defaultValue={this.state.degreeDistrict}
                      >
                        {district_names_Degree &&
                          district_names_Degree.map(district_name => (
                            <option
                              key={district_name.id}
                              value={district_name.id}
                            >
                              {district_name.text}
                            </option>
                          ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </CardBody>
        </Card>
      </div>
      </div>

    );
  }
}
