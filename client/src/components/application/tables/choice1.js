import React, { Component } from "react";
import { Col, Row, FormGroup, Card, CardHeader, CardBody, Table } from "reactstrap";

const Choice1 = (props) =>{
    <div className="step step4">
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
                  defaultValue={props.ugDegree}
                />
                <div className={notValidClasses.ugDegreeValGrpCls}>
                  {props.ugDegreeValMsg}
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
                  defaultValue={props.collegeName}
                />
                <div className={notValidClasses.collegeNameValGrpCls}>
                  {props.collegeNameValMsg}
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
                  defaultValue={props.collegeAddress}
                />
                <div className={notValidClasses.collegeAddressValGrpCls}>
                  {props.collegeAddressValMsg}
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
                  defaultValue={props.nameOfUniversity}
                />
                <div className={notValidClasses.nameOfUniversityValGrpCls}>
                  {props.nameOfUniversityValMsg}
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
                  defaultValue={props.universityAddress}
                />
                <div className={notValidClasses.universityAddressValGrpCls}>
                  {props.universityAddressValMsg}
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
                  defaultValue={props.IsemMonth}
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
                  defaultValue={props.Isemyop}
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
                  ref="Isemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.Isemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="Isemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.Isemmarks}
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
                  defaultValue={props.IIsemMonth}
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
                  defaultValue={props.IIsemyop}
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
                  ref="IIsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.IIsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="IIsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.IIsemmarks}
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
                  defaultValue={props.IIIsemMonth}
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
                  defaultValue={props.IIIsemyop}
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
                  ref="IIIsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.IIIsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="IIIsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.IIIsemmarks}
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
                  defaultValue={props.IVsemMonth}
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
                  defaultValue={props.IVsemyop}
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
                  ref="IVsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.IVsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="IVsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.IVsemmarks}
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
                  defaultValue={props.VsemMonth}
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
                  defaultValue={props.Vsemyop}
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
                  ref="Vsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.Vsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="Vsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.Vsemmarks}
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
                  defaultValue={props.VIsemMonth}
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
                  defaultValue={props.VIsemyop}
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
                  ref="VIsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.VIsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="VIsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.VIsemmarks}
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
                  defaultValue={props.VIIsemMonth}
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
                  defaultValue={props.VIIsemyop}
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
                  ref="VIIsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.VIIsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="VIIsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.VIIsemmarks}
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
                  defaultValue={props.VIIIsemMonth}
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
                  defaultValue={props.VIIIsemyop}
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
                  ref="VIIIsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.VIIIsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="VIIIsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.VIIIsemmarks}
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
                  defaultValue={props.IXsemMonth}
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
                  defaultValue={props.IXsemyop}
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
                  ref="IXsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.IXsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="IXsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.IXsemmarks}
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
                  defaultValue={props.XsemMonth}
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
                  defaultValue={props.Xsemyop}
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
                  ref="Xsemmaxmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_max_marks_change}
                  className="form-control"
                  required
                  defaultValue={props.Xsemmaxmarks}
                />
              </td>
              <td>
                <input
                  ref="Xsemmarks"
                  autoComplete="off"
                  type="number"
                  onChange={this.listen_to_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.Xsemmarks}
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
                  readOnly
                  onChange={this.listen_to_total_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.overalltot}
                />
              </td>
              <td>
                <input
                  ref="overallmarks"
                  autoComplete="off"
                  type="number"
                  readOnly
                  onChange={this.listen_to_total_marks_obtained_change}
                  className="form-control"
                  required
                  defaultValue={props.overallmarks}
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
                  readOnly
                  className="form-control"
                  required
                  defaultValue={props.totalpermark}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </div>
}

export default Choice1;