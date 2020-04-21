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

export default class Step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      XIyearOfPassing: props.getStore().XIyearOfPassing,
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
      state_names: [],
      selected_study_pattern:'',
      study_pattern:[]
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
    this.setState({
      state_names: [
        { id: "", name: "Please Select" },
        {
          id: "Andaman and Nicobar Islands",
          name: "Andaman and Nicobar Islands"
        },
        { id: "Andhra Pradesh", name: "Andhra Pradesh" },
        { id: "Arunachal Pradesh", name: "Arunachal Pradesh" },
        { id: "Assam", name: "Assam" },
        { id: "Bihar", name: "Bihar" },
        { id: "Chandigarh", name: "Chandigarh" },
        { id: "Chattisgarh", name: "Chattisgarh" },
        { id: "Dadra and Nagar Haveli", name: "Dadra and Nagar Haveli" },
        { id: "Daman & Diu", name: "Daman & Diu" },
        { id: "Delhi", name: "Delhi" },
        { id: "Goa", name: "Goa" },
        { id: "Gujara", name: "Gujara" },
        { id: "Haryana", name: "Haryana" },
        { id: "Himachal Pradesh", name: "Himachal Pradesh" },
        { id: "Jammu and Kashmir", name: "Jammu and Kashmir" },
        { id: "Jharkhand", name: "Jharkhand" },
        { id: "Karnataka", name: "Karnataka" },
        { id: "Kerala", name: "Kerala" },
        { id: "Ladakh", name: "Ladakh" },
        { id: "Lakshadweep", name: "Lakshadweep" },
        { id: "Madhya Pradesh", name: "Madhya Pradesh" },
        { id: "Maharashtra", name: "Maharashtra" },
        { id: "Manipur", name: "Manipur" },
        { id: "Meghalaya", name: "Meghalaya" },
        { id: "Mizoram", name: "Mizoram" },
        { id: "Nagaland", name: "Nagaland" },
        { id: "Odisha", name: "Odisha" },
        { id: "Puducherry", name: "Puducherry" },
        { id: "Punjab", name: "Punjab" },
        { id: "Manipur", name: "Manipur" },
        { id: "Rajasthan", name: "Rajasthan" },
        { id: "Sikkim", name: "Sikkim" },
        { id: "Rajasthan", name: "Rajasthan" },
        { id: "Tamil Nadu", name: "Tamil Nadu" },
        { id: "Telangana", name: "Telangana" },
        { id: "Tripura", name: "Tripura" },
        { id: "Uttar Pradesh", name: "Uttar Pradesh" },
        { id: "Uttarakhand", name: "Uttarakhand" },
        { id: "West Bengal", name: "West Bengal" }
      ],
      study_pattern:[
        {id:'10 + Plus Two + 3 Years Degree', name:'10 + Plus Two + 3 Years Degree'},
        {id:'10 + 3 Years Diploma + 3 Years Degree', name:'10 + 3 Years Diploma + 3 Years Degree'},
        {id:'B.E / B.Tech / B.Pharm', name:'B.E / B.Tech / B.Pharm'},
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
        this.props.getStore().qualifyingDegree !== userInput.qualifyingDegree ||
        this.props.getStore().patternOfStudy !== userInput.patternOfStudy ||
        this.props.getStore().appearanceInTheFinal !==
          userInput.appearanceInTheFinal ||
        this.props.getStore().tancentMarks !== userInput.tancentMarks
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
      qualifyingDegreeVal: data.qualifyingDegree !== 0,
      patternOfStudyVal: data.patternOfStudy !== 0,
      appearanceInTheFinalVal: data.appearanceInTheFinal !== 0,
      tancentMarksVal: data.tancentMarks !== 0
      // ugDegreeVal: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      //   data.ugDegree
      // ) // required: regex w3c uses in html5
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      qualifyingDegreeValMsg: val.qualifyingDegreeVal ? "" : "* Field Required",
      patternOfStudyValMsg: val.patternOfStudyVal
        ? ""
        : "* Select Study Pattern",
      appearanceInTheFinalValMsg: val.appearanceInTheFinalVal
        ? ""
        : "* Field Required",
      tancentMarksValMsg: val.tancentMarksVal ? "" : "* Field Required"
      // ugDegreeValMsg: val.ugDegreeVal ? "" : "A valid ugDegree is required"
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
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

  listen_to_study_pattern = ({ target: {value}}) =>{
    if(value === "10 + Plus Two + 3 Years Degree"){
      return(
        <div>

        </div>
      )
    }
  }
  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    //Qualifying Degree
    if (
      typeof this.state.qualifyingDegreeVal == "text" ||
      this.state.qualifyingDegreeVal
    ) {
      notValidClasses.qualifyingDegreeCls = "no-error col-md-10";
    } else {
      notValidClasses.qualifyingDegreeCls = "has-error col-md-10";
      notValidClasses.qualifyingDegreeValGrpCls = "val-err-tooltip";
    }

    //Pattern of Study
    if (
      typeof this.state.patternOfStudyVal == "select" ||
      this.state.patternOfStudyVal
    ) {
      notValidClasses.patternOfStudyCls = "no-error col-md-8";
    } else {
      notValidClasses.patternOfStudyCls = "has-error col-md-8";
      notValidClasses.patternOfStudyValGrpCls = "val-err-tooltip";
    }

    //Appearance in the Final Exam
    if (
      typeof this.state.appearanceInTheFinalVal == "text" ||
      this.state.appearanceInTheFinalVal
    ) {
      notValidClasses.appearanceInTheFinalCls = "no-error col-md-10";
    } else {
      notValidClasses.appearanceInTheFinalCls = "has-error col-md-10";
      notValidClasses.appearanceInTheFinalValGrpCls = "val-err-tooltip";
    }

    //Tancent Marks
    if (
      typeof this.state.tancentMarksVal == "number" ||
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

    //District List
    const ditrict_list = {
      "Tamil Nadu": [
        { id: "", text: "Please Select" },
        { id: "Ariyalur", text: "Ariyalur" },
        { id: "Chengalpattu", text: "Chengalpattu" },
        { id: "Chennai", text: "Chennai" },
        { id: "Coimbatore", text: "Coimbatore" },
        { id: "Cuddalore", text: "Cuddalore" },
        { id: "Dharmapuri", text: "Dharmapuri" },
        { id: "Dindigul", text: "Dindigul" },
        { id: "Erode", text: "Erode" },
        { id: "Kallakurichi", text: "Kallakurichi" },
        { id: "Kanchipuram", text: "Kanchipuram" },
        { id: "Kanyakumari", text: "Kanyakumari" },
        { id: "Karur", text: "Karur" },
        { id: "Krishnagiri", text: "Krishnagiri" },
        { id: "Madurai", text: "Madurai" },
        { id: "Nagapattinam", text: "Nagapattinam" },
        { id: "Namakkal", text: "Namakkal" },
        { id: "Perambalur", text: "Perambalur" },
        { id: "Pudukkottai", text: "Pudukkottai" },
        { id: "Ramanathapuram", text: "Ramanathapuram" },
        { id: "Ranipet", text: "Ranipet" },
        { id: "Salem", text: "Salem" },
        { id: "Sivagangai", text: "Sivagangai" },
        { id: "Tenkasi", text: "Tenkasi" },
        { id: "Thanjavur", text: "Thanjavur" },
        { id: "The Nilgiris", text: "The Nilgiris" },
        { id: "Theni", text: "Theni" },
        { id: "Thirupattur", text: "Thirupattur" },
        { id: "Thoothukudi", text: "Thoothukudi" },
        { id: "Tiruchirappalli", text: "Tiruchirappalli" },
        { id: "Tirunelveli", text: "Tirunelveli" },
        { id: "Tiruppur", text: "Tiruppur" },
        { id: "Tiruvallur", text: "Tiruvallur" },
        { id: "Tiruvannamalai", text: "Tiruvannamalai" },
        { id: "Tiruvarur", text: "Tiruvarur" },
        { id: "Vellore", text: "Vellore" },
        { id: "Viluppuram", text: "Viluppuram" },
        { id: "Virudhunagar", text: "Virudhunagar" }
      ],
      Other: [
        { id: "", text: "Please Select" },
        { id: "Other", text: "Other" }
      ]
    };

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

    return (
      <div className="step step4">
        <Card>
          <CardHeader><h3 style={{ color:'blue'}} className='userdashboard'>EDUCATIONAL DETAILS</h3></CardHeader>
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
                      <option value="B.E / B.Tech / B.Pharm">
                        B.E / B.Tech / B.Pharm
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
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.appearanceInTheFinal}
                    >
                      <option value="">Please select</option>
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
                      readOnly
                      type="number"
                      className="form-control"
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
                        <option value="">Please Select</option>
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
                    <th scope="row">XII</th>
                    <td>
                      <select
                        ref="XIIyearOfPassing"
                        autoComplete="off"
                        type="select"
                        className="form-control"
                        required
                        defaultValue={this.state.XIIyearOfPassing}
                      >
                        <option value="">Please Select</option>
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
                        <option value="">Please Select</option>
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
    );
  }
}
