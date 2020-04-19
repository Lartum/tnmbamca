import React from "react";
import axios from "axios";
import Loading from '../common/Loading'
import { PDFViewer } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from "@react-pdf/renderer";
import logo from "../../img/tnlogo.png";

export default class Pdf extends React.Component {
  state = {
    users: null
  };
  componentDidMount() {
    axios.get("/api/pdfgenerate")
      .then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }
  render() {
    const styles = StyleSheet.create({
      page: { backgroundColor: "white" },
      header: { textAlign: "center", margin: 30 },
      body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
      },
      left: {
        textAlign: "left",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "70px",
        marginLeft: "10px"
      },
      leftpage2: {
        textAlign: "left",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "50px",
        marginLeft: "10px"
      },
      right: {
        textAlign: "right",
        fontSize: "10pt",
        position: "absolute",
        marginTop: "60px",
        marginRight: "100px"
      },
      text_indent: {
        textIndent: "1cm"
      },
      photo: {
        border: "2pt solid black",
        marginRight: "2cm",
        marginTop: "10px",
        alignSelf: "flex-end",
        width: "4cm",
        height: "4cm"
      },
      logo: {
        marginRight: "15pt",
        marginLeft: "15pt",
        marginTop: "25pt",
        position: "absolute",
        alignSelf: "flex-start",
        width: "1cm",
        height: "1cm"
      },
      table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        marginBottom: "5mm",
        marginLeft: "5mm",
        marginRight: "5mm",
        borderRightWidth: 0,
        borderBottomWidth: 0
      },
      tableRow: {
        margin: "auto",
        flexDirection: "row"
      },
      tableColHeader: {
        width: "20%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableColHeader2: {
        width: "25%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableColHeader3: {
        width: "33.3%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableCol2: {
        width: "25%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableCellHeader: {
        margin: "auto",
        margin: 5,
        fontSize: 8,
        fontWeight: 500
      },
      tableCell: {
        margin: "auto",
        margin: 5,
        fontSize: 8
      },
      tableCellHeader2: {
        margin: "auto",
        margin: 5,
        fontSize: 12,
        fontWeight: 500
      },
      tableCell2: {
        margin: "auto",
        margin: 5,
        fontSize: 8
      },
      tableCell4: {
        margin: "auto",
        margin: 10,
        width: "25%",
        fontSize: 8
      },
      tableCol3: {
        width: "50%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableCol4: {
        width: "75%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      tableCol5: {
        width: "33.3%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
      },
      data_center_align_page_1: {
        marginLeft: "40%",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "70px"
      },
      data_center_align_page_2: {
        marginLeft: "40%",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "50px"
      },
      text: {
        textAlign: "justify"
      }
    });
    if (this.state.users === null) {
      return <Loading />
    }

    if (this.state.user !== null) {
      return(
        <div>
        <h1>{this.state.users.choice} Application No: {this.state.users.applicationno}</h1>
        <PDFViewer
        style={{
          width: "100%",
          height: "100rem"
        }}
        >
            <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.header}>
                <Text>APPLICATION FORM FOR ADMISSION TO {this.state.users.choice} COURSE</Text>
              </View>
              <View style={styles.right}>
                <Text>
                  Application Number : {this.state.users.applicationno}{" "}
                </Text>
              </View>
              <Image style={styles.logo} src={logo}></Image>
              <Image
                style={styles.photo}
                src="https://scontent.fblr4-2.fna.fbcdn.net/v/t1.0-9/54364780_2415270372040747_434833466983448576_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=joSUY1JfhR0AX8M7B_c&_nc_ht=scontent.fblr4-2.fna&oh=575268bdfb12caf3dd12f85c84eb7614&oe=5F00F862"
              ></Image>
              <View style={styles.left}>
                <Text style={styles.text}>
                  1.{"     "} TANCENT 2020 Registration Number
                </Text>
                <Text>2.{"     "} Name</Text>
                <Text>3.{"     "} Name of Parent/Guardian </Text>
                <Text>4.{"     "} Address for Communication </Text>
                <Text>5.{"     "} Email Id</Text>
                <Text>6.{"     "} Contact Telephone No</Text>
                <Text>7.{"     "} Mobile No</Text>
                <Text>8.{"     "} Sex</Text>
                <Text>9.{"     "} Citizenship</Text>
                <Text>10.{"   "} Nativity</Text>
                <Text>11.{"   "} Srilankan Tamil Refugee</Text>
                <Text>12.{"   "} Place of Birth</Text>
                <Text>13.{"   "} Mother Tongue</Text>
                <Text>14.{"   "} Date of Birth</Text>
                <Text>15.{"   "} Name of the Community</Text>
                <Text>16.{"   "} Caste Code</Text>
                <Text>17.{"   "} Religion</Text>
                <Text>18.{"   "} Name of the Caste</Text>
                <Text>19.{"   "} Differently abled Quota : </Text>
                <Text>20.{"   "} Qualifying Degree : </Text>
                <Text>21.{"   "} Pattern of Studied : </Text>
                <Text>22.{"   "} Appearance in the Final Year Exam : </Text>
                <Text>23.{"   "} TANCENT Marks in 2019 : </Text>
                <Text>24.{"   "} School/College Study information </Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>Class/Degree</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Year of Passing
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>
                        Name of the School/College
                      </Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>District</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                      <Text style={styles.tableCellHeader}>State</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>XI</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIyearOfPassing}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XInameOfSchool}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIstate}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIdistrict}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>XII/Diploma</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIIyearOfPassing}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIInameOfSchool}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIIstate}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.XIIdistrict}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>Degree</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.degreeYearOfPassing}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.degreeNameOfSchool}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.degreeState}
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>
                        {this.state.users.degreeDistrict}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.data_center_align_page_1}>
                <Text>: {this.state.users.regno}</Text>
                <Text>: {this.state.users.name}</Text>
                <Text>: {this.state.users.nameOfParent}</Text>
                <Text>: {this.state.users.address}</Text>
                <Text>: {this.state.users.email}</Text>
                <Text>: {this.state.users.telephoneno}</Text>
                <Text>: {this.state.users.phonenumber}</Text>
                <Text>: {this.state.users.gender}</Text>
                <Text>: {this.state.users.citizenship}</Text>
                <Text>: {this.state.users.nativity}</Text>
                <Text>: {this.state.users.sriLankanRefugee}</Text>
                <Text>: {this.state.users.placeOfBirth}</Text>
                <Text>: {this.state.users.motherTongue}</Text>
                <Text>: {this.state.users.dateOfBirth}</Text>
                <Text>: {this.state.users.nameOfCommunity}</Text>
                <Text>: {this.state.users.casteCode}</Text>
                <Text>: {this.state.users.religion}</Text>
                <Text>: {this.state.users.nameOfCaste}</Text>
                <Text>: {this.state.users.differentlyAbled}</Text>
                <Text>: {this.state.users.qualifyingDegree}</Text>
                <Text>: {this.state.users.patternOfStudy}</Text>
                <Text>: {this.state.users.appearanceInTheFinal}</Text>
                <Text>: {this.state.users.tancentMarks}</Text>
              </View>
            </Page>
            <Page size="A4" style={styles.page}>
              <View style={styles.leftpage2}>
                <Text>
                  25.{"   "} Details of Marks in UG Degree Qualifying
                  Examinations
                </Text>
                <Text style={styles.text_indent}>
                  (a) UG Degree : {this.state.users.ugDegree}
                </Text>
                <Text style={styles.text_indent}>
                  (b) Name of the College with Address :{" "}
                  {this.state.users.collegeName}
                  {"  "}
                  {this.state.users.collegeAddress}
                </Text>

                <Text style={styles.text_indent}>
                  (c) Name of the University :{" "}
                  {this.state.users.universityAddress}
                </Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader2}>
                      <Text style={styles.tableCellHeader}>Semester/Year</Text>
                    </View>
                    <View style={styles.tableColHeader2}>
                      <Text style={styles.tableCellHeader}>
                        Month and Year of Passing
                      </Text>
                    </View>
                    <View style={styles.tableColHeader2}>
                      <Text style={styles.tableCellHeader}>Maximum Marks</Text>
                    </View>
                    <View style={styles.tableColHeader2}>
                      <Text style={styles.tableCellHeader}>Marks Obtained</Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>I</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.IsemMonth}
                        {"  "}
                        {this.state.users.Isemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.Isemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.Isemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>II</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.IIsemMonth}
                        {"  "}
                        {this.state.users.IIsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IIsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IIsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>III</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.IIIsemMonth}
                        {"  "}
                        {this.state.users.IIIsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IIIsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IIIsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>IV</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.IVsemMonth}
                        {"  "}
                        {this.state.users.IVsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IVsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IVsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>V</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.VsemMonth}
                        {"  "}
                        {this.state.users.Vsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.Vsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.Vsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>VI</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.VIsemMonth}
                        {"  "}
                        {this.state.users.VIsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.VIsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.VIsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>VII</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.VIIsemMonth}
                        {"  "}
                        {this.state.users.VIIsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.VIIsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.VIIsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>VIII</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.VIIIsemMonth}
                        {"  "}
                        {this.state.users.VIIIsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.VIIIsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.VIIIsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>IX</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.IXsemMonth}
                        {"  "}
                        {this.state.users.IXsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IXsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.IXsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>X</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {" "}
                        {this.state.users.XsemMonth}
                        {"  "}
                        {this.state.users.Xsemyop}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.Xsemmaxmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.Xsemmarks}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol3}>
                      <Text style={styles.tableCell2}>Overall Total</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.overallmarks}
                      </Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.overalltot}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol4}>
                      <Text style={styles.tableCell2}>Total % Marks</Text>
                    </View>
                    <View style={styles.tableCol2}>
                      <Text style={styles.tableCell2}>
                        {this.state.users.totalpermark}
                      </Text>
                    </View>
                  </View>
                </View>
                <Text>
                  26.{"   "} Average Percentage of Marks upto Pre-final
                  Semester/Year{" "}
                </Text>
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <View style={styles.tableColHeader3}>
                      <Text style={styles.tableCellHeader}>
                        Total Marks Obtained
                      </Text>
                    </View>
                    <View style={styles.tableColHeader3}>
                      <Text style={styles.tableCellHeader}>
                        Total Maximum Marks
                      </Text>
                    </View>
                    <View style={styles.tableColHeader3}>
                      <Text style={styles.tableCellHeader}>
                        Percentage of Marks
                      </Text>
                    </View>
                  </View>
                  <View style={styles.tableRow}>
                    <View style={styles.tableCol5}>
                      <Text style={styles.tableCell2}> Data Goes Here</Text>
                    </View>
                    <View style={styles.tableCol5}>
                      <Text style={styles.tableCell2}></Text>
                    </View>
                    <View style={styles.tableCol5}>
                      <Text style={styles.tableCell2}></Text>
                    </View>
                  </View>
                </View>
              </View>
            </Page>
          </Document>
      </PDFViewer>
      </div>
      )
    }
  }
}
