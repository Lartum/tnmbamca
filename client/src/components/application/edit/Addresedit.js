import React, { Component } from 'react'
import { Col, Row, FormGroup, Card, CardHeader, CardBody } from "reactstrap";
import { states, districts } from '../dataset';



export default class Addresedit extends Component {
    
    componentDidMount() {
        this.setState({
          state_names: states 
        });
      }
    listen_to_state_name_change = ({ target: { value } }) => {
        if (value === "Tamil Nadu") {
          this.setState({ selected_state_name: value });
        } else {
          this.setState({ selected_state_name: "Other" });
        }
      };

    render() {
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

        return (
            <div>
         <Card>
          <CardHeader>Address Details</CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="address">
                    <span className="asterix_color">*</span>Address
                  </label>
                  
                    <input
                      name="address"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      required
                      defaultValue={this.state.address}
                    />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="State">
                    <span className="asterix_color">*</span>State
                  </label>
                  
                    <select
                      name="State"
                      autoComplete="off"
                      type="select"
                      onChange={this.listen_to_state_name_change}
                      className="form-control"
                      required
                      defaultValue={this.state.State}
                    >
                      {state_names_List}
                    </select>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="district">
                    <span className="asterix_color">*</span>District
                  </label>
                    <select
                      name="district"
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
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="pincode">
                    <span className="asterix_color">*</span>Pincode
                  </label>
                    <input
                      name="pincode"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      required
                      defaultValue={this.state.pincode}
                    /> 
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
                    <input
                      name="mobileno"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      readOnly
                      required
                      defaultValue={this.state.mobileno}
                    />  
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="telephoneno">
                    Telephone No
                  </label>
                    <input
                      name="telephoneno"
                      autoComplete="off"
                      type="number"
                      className="form-control"
                      defaultValue={this.state.telephoneno}
                    />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="email">
                    Email
                  </label>
                    <input
                      name="email"
                      autoComplete="off"
                      type="email"
                      className="form-control"
                      readOnly
                      required
                      defaultValue={this.state.email}
                    />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
            </div>
        )
    }
}
