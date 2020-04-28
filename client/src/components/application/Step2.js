import React, { Component } from "react";
import { Col, Row, FormGroup, Card, CardHeader, CardBody } from "reactstrap";
import { states, districts } from './dataset';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: props.getStore().address,
      State: props.getStore().State,
      district: props.getStore().district,
      pincode: props.getStore().pincode,
      mobileno: props.getStore().mobileno,
      telephoneno: props.getStore().telephoneno,
      email: props.getStore().email,
      selected_state_name: "",
      state_names: []
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
    this.setState({
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
        this.props.getStore().address !== userinput.address ||
        this.props.getStore().State !== userinput.State ||
        this.props.getStore().district !== userinput.district ||
        this.props.getStore().pincode !== userinput.pincode ||
        this.props.getStore().mobileno !== userinput.mobileno ||
        this.props.getStore().telephoneno !== userinput.telephoneno
        // this.props.getStore().email !== userinput.email
      ) {
        // only update store of something changed
        this.props.updateStore({
          ...userinput,
          savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        }); // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation state but NOT the UI Data State
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

    this.setState(
      Object.assign(
        userinput,
        validateNewinput,
        this._validationErrors(validateNewinput)
      )
    );
  }

  _validateData(data) {
    return {
      addressVal: data.address != 0,
      StateVal: data.State != 0,
      districtVal: data.district != 0,
      pincodeVal: /^[1-9][0-9]{5}$/.test(data.pincode),
      // mobilenoVal: /^\d{5}([- ]*)\d{6}/.test(data.mobileno),
      // telephonenoVal: data.telephoneno != 0,
      // emailVal: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
      //   data.email
      // )
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      addressValMsg: val.addressVal ? "" : "* Field Required",
      StateValMsg: val.StateVal ? "" : "* Field Required",
      districtValMsg: val.districtVal ? "" : "* Field Required",
      pincodeValMsg: val.pincodeVal ? "" : "* Enter Valid Pin Code",
      // mobilenoValMsg: val.mobilenoVal
      //   ? ""
      //   : "* Enter Valid Mobile Number | Country Code Required ex-91",
      // telephonenoValMsg: val.telephonenoVal ? "" : "* Field Required",
      // emailValMsg: val.emailVal ? "" : "* Enter Valid Email"
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      address: this.refs.address.value,
      State: this.refs.State.value,
      district: this.refs.district.value,
      pincode: this.refs.pincode.value,
      mobileno: this.refs.mobileno.value,
      telephoneno: this.refs.telephoneno.value,
      email: this.refs.email.value
    };
  }

  listen_to_state_name_change = ({ target: { value } }) => {
    if (value === "Tamil Nadu") {
      this.setState({ selected_state_name: value });
    } else {
      this.setState({ selected_state_name: "Other" });
    }
  };

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    //address
    if (typeof this.state.addressVal === "undefined" || this.state.addressVal) {
      notValidClasses.addressCls = "no-error col-md-10";
    } else {
      notValidClasses.addressCls = "has-error col-md-10";
      notValidClasses.addressValGrpCls = "val-err-tooltip";
    }

    //state
    if (typeof this.state.StateVal === "undefined" || this.state.StateVal) {
      notValidClasses.StateCls = "no-error col-md-8";
    } else {
      notValidClasses.StateCls = "has-error col-md-8";
      notValidClasses.StateValGrpCls = "val-err-tooltip";
    }

    //district
    if (
      typeof this.state.districtVal === "undefined" ||
      this.state.districtVal
    ) {
      notValidClasses.districtCls = "no-error col-md-10";
    } else {
      notValidClasses.districtCls = "has-error col-md-10";
      notValidClasses.districtValGrpCls = "val-err-tooltip";
    }

    //pincode
    if (typeof this.state.pincodeVal === "undefined" || this.state.pincodeVal) {
      notValidClasses.pincodeCls = "no-error col-md-8";
    } else {
      notValidClasses.pincodeCls = "has-error col-md-8";
      notValidClasses.pincodeValGrpCls = "val-err-tooltip";
    }

    const ditrict_list = districts;

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
    const { selected_state_name } = this.state;
    const district_names = ditrict_list[selected_state_name];

    return (
      <div className="step step2">
        <Card>
          <CardHeader>Address Details</CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="address">
                    <span className="asterix_color">*</span>Address
                  </label>
                  <div
                    className={notValidClasses.addressCls}
                    className="error_color"
                  >
                    <input
                      ref="address"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.address}
                    />
                    <div className={notValidClasses.addressValGrpCls}>
                      {this.state.addressValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="State">
                    <span className="asterix_color">*</span>State
                  </label>
                  <div
                    className={notValidClasses.StateCls}
                    className="error_color"
                  >
                    <select
                      ref="State"
                      autoComplete="off"
                      type="select"
                      onChange={this.listen_to_state_name_change}
                      className="form-control"
                      required
                      defaultValue={this.state.State}
                    >
                      {state_names_List}
                    </select>
                    <div className={notValidClasses.StateValGrpCls}>
                      {this.state.StateValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="district">
                    <span className="asterix_color">*</span>District
                  </label>
                  <div
                    className={notValidClasses.districtCls}
                    className="error_color"
                  >
                    <select
                      ref="district"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.district}
                    >
                      {district_names &&
                        district_names.map(district_name => (
                          <option
                            key={district_name.id}
                            value={district_name.id}
                          >
                            {district_name.text}
                          </option>
                        ))}
                    </select>
                    <div className={notValidClasses.districtValGrpCls}>
                      {this.state.districtValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="pincode">
                    <span className="asterix_color">*</span>Pincode
                  </label>
                  <div
                    className={notValidClasses.pincodeCls}
                    className="error_color"
                  >
                    <input
                      ref="pincode"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.pincode}
                    />
                    <div className={notValidClasses.pincodeValGrpCls}>
                      {this.state.pincodeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Contact Details</CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="mobileno">
                    Mobile No
                  </label>
                  <div
                    className={notValidClasses.mobilenoCls}
                    className="error_color"
                  >
                    <input
                      ref="mobileno"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      readOnly
                      required
                      defaultValue={this.state.mobileno}
                    />
                    <div className={notValidClasses.mobilenoValGrpCls}>
                      {this.state.mobilenoValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="telephoneno">
                    Telephone No
                  </label>
                  <div
                    className={notValidClasses.telephonenoCls}
                    className="error_color"
                  >
                    <input
                      ref="telephoneno"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      defaultValue={this.state.telephoneno}
                    />
                    <div className={notValidClasses.telephonenoValGrpCls}>
                      {this.state.telephonenoValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="email">
                    Email
                  </label>
                  <div
                    className={notValidClasses.emailCls}
                    className="error_color"
                  >
                    <input
                      ref="email"
                      autoComplete="off"
                      type="email"
                      className="form-control"
                      readOnly
                      required
                      defaultValue={this.state.email}
                    />
                    <div className={notValidClasses.emailValGrpCls}>
                      {this.state.emailValMsg}
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
