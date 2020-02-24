import React from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";

const EducationalDetails = ({ setForm, formData, navigation }) => {
  const {
    qualifyingDegree,
    patternOfStudy,
    appearanceInTheFinalExam,
    tancentMarks,
    XIyearOfPassing,
    XInameOfSchool,
    XIstate,
    XIdistrict,
    XIIyearOfPassing,
    XIInameOfSchool,
    XIIstate,
    XIIdistrict,
    degreeYearOfPassing,
    degreeNameOfSchool,
    degreeState,
    degreeDistrict
  } = formData;

  const { next, previous } = navigation;

  console.log(XIyearOfPassing);
  return (
    <Form>
      <Card>
        <CardHeader>Educational Details</CardHeader>
        <CardBody>
          <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="qualifyingDegree">Qualifying Degree</Label>
                <Input
                  type="qualifyingDegree"
                  name="qualifyingDegree"
                  id="qualifyingDegree"
                  key="qualifyingDegree"
                  value={qualifyingDegree}
                  onChange={setForm}
                  placeholder="Qualifying Degree"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="patternOfStudy">Pattern Of Study</Label>
                <Input
                  type="patternOfStudy"
                  name="patternOfStudy"
                  id="patternOfStudy"
                  key="patternOfStudy"
                  value={patternOfStudy}
                  onChange={setForm}
                  placeholder="Pattern Of Study"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="appearanceInTheFinalExam">
                  Appearance In The Final
                </Label>
                <Input
                  type="text"
                  name="appearanceInTheFinalExam"
                  id="appearanceInTheFinalExam"
                  key="appearanceInTheFinalExam"
                  value={appearanceInTheFinalExam}
                  onChange={setForm}
                  placeholder="Appearance in the final exam"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="tancentMarks">Tancent Marks In 2020</Label>
                <Input
                  type="text"
                  name="tancentMarks"
                  id="tancentMarks"
                  key="tancentMarks"
                  value={tancentMarks}
                  onChange={setForm}
                  placeholder="Parent Name"
                />
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
                  <th scope="row">XI</th>
                  <td>
                    <Input
                      type="text"
                      className="form-control"
                      name="XIyearOfPassing"
                      id="XIyearOfPassing"
                      key="XIyearOfPassing"
                      value={XIyearOfPassing}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="XInameOfSchool"
                      id="XInameOfSchool"
                      key="XInameOfSchool"
                      value={XInameOfSchool}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="XIstate"
                      id="XIstate"
                      key="XIstate"
                      value={XIstate}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="XIdistrict"
                      id="XIdistrict"
                      key="XIdistrict"
                      value={XIdistrict}
                      onChange={setForm}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">XII</th>
                  <td>
                    <Input
                      type="text"
                      className="form-control"
                      name="XIIyearOfPassing"
                      id="XIIyearOfPassing"
                      key="XIIyearOfPassing"
                      value={XIIyearOfPassing}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="XIInameOfSchool"
                      id="XIInameOfSchool"
                      key="XIInameOfSchool"
                      value={XIInameOfSchool}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="XIIstate"
                      id="XIIstate"
                      key="XIIstate"
                      value={XIIstate}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="XIIdistrict"
                      id="XIIdistrict"
                      key="XIIdistrict"
                      value={XIIdistrict}
                      onChange={setForm}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Degree</th>
                  <td>
                    <Input
                      type="text"
                      className="form-control"
                      name="degreeYearOfPassing"
                      id="degreeYearOfPassing"
                      key="degreeYearOfPassing"
                      value={degreeYearOfPassing}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="degreeNameOfSchool"
                      id="degreeNameOfSchool"
                      key="degreeNameOfSchool"
                      value={degreeNameOfSchool}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="degreeState"
                      id="degreeState"
                      key="degreeState"
                      value={degreeState}
                      onChange={setForm}
                    />
                  </td>
                  <td>
                    {" "}
                    <Input
                      type="text"
                      className="form-control"
                      name="degreeDistrict"
                      id="degreeDistrict"
                      key="degreeDistrict"
                      value={degreeDistrict}
                      onChange={setForm}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <div>
            <Button onClick={previous}>Previous</Button>
            <Button onClick={next}>Next</Button>
          </div>
        </CardBody>
      </Card>
    </Form>
  );
};

export default EducationalDetails;
