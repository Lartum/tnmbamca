import React from "react";
import {
  Col,
  Row,
  Button,
  Form,
  CustomInput,
  FormGroup,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";

const ContactDetails = ({ setForm, formData, navigation }) => {
  const { mobileno, telephoneno, useremail } = formData;

  const { next, previous } = navigation;

  return (
    <Form>
      <Card>
        <CardHeader>Contact Details</CardHeader>
        <CardBody>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="mobileno">Mobile Number</Label>
                <Input
                  type="tel"
                  name="mobileno"
                  id="mobile"
                  key="mobile"
                  value={mobileno}
                  onChange={setForm}
                  placeholder="Tancent Register Number"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="telephoneno">Telephone No</Label>
                <Input
                  type="name"
                  name="telephoneno"
                  id="telephoneno"
                  key="telephoneno"
                  value={telephoneno}
                  onChange={setForm}
                  placeholder="Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="useremail">Email</Label>
                <Input
                  type="text"
                  name="useremail"
                  id="useremail"
                  key="useremail"
                  value={useremail}
                  onChange={setForm}
                  placeholder="Parent Name"
                />
              </FormGroup>
            </Col>
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

export default ContactDetails;
