import React from "react";
import axios from "axios";
import Loading from "../common/Loading";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../img/tnlogo.png";
import square_icon from "../../img/square.png";

export default class Pdf extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null,
      image: null,
    };
  }

  componentDidMount() {
    axios.get("/api/pdfgenerate").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
    axios.get("/api/fileupload/userimage").then((res) => {
      const image = res.data;
      this.setState({ image });
    });
  }
  render() {
    const styles = StyleSheet.create({
      page: { backgroundColor: "white" },
      header: { textAlign: "center", margin: 30 },
      body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      left: {
        textAlign: "left",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "70px",
        marginLeft: "10px",
      },
      leftPara: {
        textAlign: "left",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "70px",
        marginLeft: "30px",
        marginRight: "30px"
      },
      leftpage2: {
        textAlign: "left",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "50px",
        marginLeft: "10px",
      },
      right: {
        textAlign: "right",
        fontSize: "10pt",
        position: "absolute",
        marginTop: "60px",
        marginRight: "100px",
      },
      text_indent: {
        textIndent: "1cm",
      },
      photo: {
        border: "2pt solid black",
        marginRight: "2cm",
        marginTop: "10px",
        alignSelf: "flex-end",
        width: "4cm",
        height: "4cm",
      },
      logo: {
        marginRight: "15pt",
        marginLeft: "15pt",
        marginTop: "25pt",
        position: "absolute",
        alignSelf: "flex-start",
        width: "1cm",
        height: "1cm",
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
        borderBottomWidth: 0,
      },
      tableRow: {
        margin: "auto",
        flexDirection: "row",
      },
      tableColHeader: {
        width: "20%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableColHeader2: {
        width: "25%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableColHeader3: {
        width: "33.3%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderBottomColor: "#000",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol2: {
        width: "25%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCellHeader: {
        margin: "auto",
        margin: 5,
        fontSize: 8,
        fontWeight: 500,
      },
      tableCell: {
        margin: "auto",
        margin: 5,
        fontSize: 8,
      },
      tableCellHeader2: {
        margin: "auto",
        margin: 5,
        fontSize: 12,
        fontWeight: 500,
      },
      tableCell2: {
        margin: "auto",
        margin: 5,
        fontSize: 8,
      },
      tableCell4: {
        margin: "auto",
        margin: 10,
        width: "25%",
        fontSize: 8,
      },
      tableCol3: {
        width: "50%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol4: {
        width: "75%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      tableCol5: {
        width: "33.3%",
        borderStyle: "solid",
        borderColor: "#bfbfbf",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
      },
      data_center_align_page_1: {
        marginLeft: "40%",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "70px",
      },
      data_center_align_page_2: {
        marginLeft: "40%",
        fontSize: "9pt",
        position: "absolute",
        lineHeight: "2.5pt",
        marginTop: "50px",
      },
      text: {
        textAlign: "justify",
      },
      left_align: {
        textAlign: "left",
      },
      subheader: {
        textAlign: "center",
        fontSize: "11pt",
        marginBottom: "40px",
        marginTop: "20px",
        fontWeight: "bold",
      },
      declarationPara: {
        marginLeft: "10px",
        lineHeight: "2pt",
        marginRight: "10px",
      },
      page3Content: {
        fontSize: "10pt",
        alignContent: "center",
      },
      checkBox: {
        alignSelf: "flex-end",
        width: "0.5cm",
        height: "0.5cm",
      },
    });

    let newLine;
    if (this.state.users === null) {
      return <Loading />;
    } else if (this.state.users !== null) {
      const castename = this.state.users.nameOfCaste;
      if (castename.length > 391) {
        newLine = "\n\n\n\n\n\n\n";
      } else if (castename.length > 135) {
        newLine = "\n\n\n\n\n";
      } else if (castename.length > 84) {
        newLine = "\n\n";
      } else {
        console.log("else condition running");
      }

      //   switch(castename){
      //   case castename.length>78:
      //         newLine = "\n\n"
      //         break;
      //    case castename.length>135:
      //       newLine = "\n\n\n\n"
      //       break
      //    case castename.length> 300:
      //       newLine = "\n\n\n\n\n"
      //   }
    }
    const MyDoc1 = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>
              APPLICATION FORM FOR ADMISSION TO {this.state.users.choice} COURSE
            </Text>
          </View>
          <View style={styles.right}>
            <Text>Application Number : {this.state.users.applicationno} </Text>
          </View>
          <Image style={styles.logo} src={logo}></Image>
          <Image
            style={styles.photo}
            src={this.state.image.imageData}
          />
          <View style={styles.left}>
            <Text style={styles.text}>
              {""}1.{""} TANCET 2020 Registration Number
            </Text>
            <Text>
              {""}2.{""}Name
            </Text>
            <Text>3.{""} Name of Parent/Guardian </Text>
            <Text>4.{""} Address for Communication </Text>
            <Text>5.{""} Email Id</Text>
            <Text>6.{""} Contact Telephone No</Text>
            <Text>7.{""} Mobile No</Text>
            <Text>8.{""} Sex</Text>
            <Text>9.{""} Citizenship</Text>
            <Text>10.{"   "} Nativity</Text>
            <Text>11.{"   "} Srilankan Tamil Refugee</Text>
            <Text>12.{"   "} Place of Birth</Text>
            <Text>13.{"   "} Mother Tongue</Text>
            <Text>14.{"   "} Date of Birth</Text>
            <Text>15.{"   "} Name of the Community</Text>
            <Text>16.{"   "} Caste Code</Text>
            <Text>17.{"   "} Religion</Text>
            <Text>
              18.{"   "} Name of the Caste{newLine}
            </Text>
            <Text>19.{"   "} Differently abled Quota </Text>
            <Text>20.{"   "} Qualifying Degree </Text>
            <Text>21.{"   "} Pattern of Study </Text>
            <Text>22.{"   "} Appearance in the Final Year Exam </Text>
            <Text>
              23.{"   "} TANCET Marks in {new Date().getFullYear()}{" "}
            </Text>
            <Text>24.{"   "} School/College Study information </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Class/Degree</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Year of Passing</Text>
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
                  <Text style={styles.tableCell}>X</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XyearOfPassing}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XnameOfSchool}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.Xdistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.Xstate}
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
                    {this.state.users.XIIdistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XIIstate}
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
                    {this.state.users.degreeDistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.degreeState}
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
            <Text>
              : {this.state.users.nameOfCommunity}
              
            </Text>
            <Text>: {this.state.users.casteCode}</Text>
            <Text>: {this.state.users.religion}</Text>
            <Text>:{this.state.users.nameOfCaste}{newLine}</Text>
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
              25.{"   "} Details of Marks in UG Degree Qualifying Examinations
            </Text>
            <Text style={styles.text_indent}>
              (a) UG Degree: {this.state.users.ugDegree}
            </Text>
            <Text style={styles.text_indent}>
              (b) Name of the College with Address:{" "}
              {this.state.users.collegeName}
              {"  "}
              {this.state.users.collegeAddress}
            </Text>

            <Text style={styles.text_indent}>
              (c) Name of the University: {this.state.users.universityName}
              {"     "}
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
                <View style={styles.tableCol3}>
                  <Text style={styles.tableCell2}>Overall Total</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.overalltotalmarks}
                  </Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.overallmarksobtained}
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
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemoverallmarksobtained}
                  </Text>
                </View>
                <View style={styles.tableCol5}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemoveralltotalmarks}
                  </Text>
                </View>
                <View style={styles.tableCol5}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemtotalpermark}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Page>

        <Page style={styles.page3Content}>
          <View>
            <View style={styles.subheader}>
              <Text>Declaration By The Applicant</Text>
            </View>
            <View style={styles.declarationPara}>
              <Text>
                All the information furnished prepage are true to the best of my
                knowledge. I am aware that any wrong information or suppression
                of information may result in punitive action in addition to
                summary cancellation of my candidature for admission and
                forfeiture of the fee paid
              </Text>
              <Text>
                • I have the required qulification for admission to MBA/MCA
                Degree Programme as prescribed
              </Text>

              <Text>
                • I have studied Bachelors Degree course in 10+2+3/4/5 years
                pattern (or) 10 + 3 years Diploma + 3 years pattern
              </Text>

              <Text>
                • I have not studied B.E / B.Tech Degree through distance / week
                end mode
              </Text>

              <Text>
                I am also aware that a pass in recognized bachelor's degree of
                minimum 3 years duration in 10+2+3/4/5 years pattern and
                obtained at least 50% (45% in case of candidates belonging to
                reserved category) at the qualifying examination is the minimum
                eligibility required for admission to PG course as per AICTE
                norms
              </Text>
              <Text style={styles.left_align}>Place:</Text>
              <Text style={styles.left_align}>
                Date:
                {"                                     "}
                {"                                     "}
                {"                                     "}
                {"                                     "}
                Signature of the Applicant
              </Text>
            </View>

            <View style={styles.declarationPara}>
              <Text style={styles.subheader}>CHECK LIST</Text>
              <Text>To be filled by the Applicant</Text>
              <Text>
                1. Self Attested Photograph affixing on the Application
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                2. Self Attested Photograph of Plus Two Mark Sheet / Diploma
                certificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>

              <Text>
                3. Self Attested photocopy of All Semester Marksheets(All
                Apperances) of qualifying Examination (Xeroxing both sides)
                {"                "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                4. Self Attested Photocopy of Degree or Provisional Cerificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                5. Self Attested Photocopy of Transfer certificate{" "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                6. Self Attested Photocopy of permanent community card for
                SC,ST,SCA,MBC & DNC,BC,BCM
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                7. Self Attested Photocopy of TANCET 2020 Hall Ticket
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                8. Self Attested Photocopy of TANCET 2020 Mark Sheet{" "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                9. Self Attested Photocopy of TANCET Nativity Certificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                10.District Medical Board Certificate (for differntly abled
                Persons Only)
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                11.Sri Lankan Refugee Certificate - IF Applicable
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );

    //2nd Document Choice

    const MyDoc2 = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>
              APPLICATION FORM FOR ADMISSION TO {this.state.users.choice} COURSE
            </Text>
          </View>
          <View style={styles.right}>
            <Text>Application Number : {this.state.users.applicationno} </Text>
          </View>
          <Image style={styles.logo} src={logo}></Image>
          <Image
            style={styles.photo}
            src={this.state.image.imageData}
          />
          <View style={styles.left}>
            <Text style={styles.text}>
              {""}1.{""} TANCET 2020 Registration Number
            </Text>
            <Text>
              {""}2.{""}Name
            </Text>
            <Text>3.{""} Name of Parent/Guardian </Text>
            <Text>4.{""} Address for Communication </Text>
            <Text>5.{""} Email Id</Text>
            <Text>6.{""} Contact Telephone No</Text>
            <Text>7.{""} Mobile No</Text>
            <Text>8.{""} Sex</Text>
            <Text>9.{""} Citizenship</Text>
            <Text>10.{"   "} Nativity</Text>
            <Text>11.{"   "} Srilankan Tamil Refugee</Text>
            <Text>12.{"   "} Place of Birth</Text>
            <Text>13.{"   "} Mother Tongue</Text>
            <Text>14.{"   "} Date of Birth</Text>
            <Text>15.{"   "} Name of the Community</Text>
            <Text>16.{"   "} Caste Code</Text>
            <Text>17.{"   "} Religion</Text>
            <Text>
              18.{"   "} Name of the Caste{newLine}
            </Text>
            <Text>19.{"   "} Differently abled Quota </Text>
            <Text>20.{"   "} Qualifying Degree </Text>
            <Text>21.{"   "} Pattern of Study </Text>
            <Text>22.{"   "} Appearance in the Final Year Exam </Text>
            <Text>
              23.{"   "} TANCET Marks in {new Date().getFullYear()}{" "}
            </Text>
            <Text>24.{"   "} School/College Study information </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Class/Degree</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Year of Passing</Text>
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
                  <Text style={styles.tableCell}>X</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XyearOfPassing}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XnameOfSchool}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.Xdistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.Xstate}
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
                    {this.state.users.XIIdistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XIIstate}
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
                    {this.state.users.degreeDistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.degreeState}
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
    <Text>: {this.state.users.nameOfCaste}{newLine}</Text>
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
              25.{"   "} Details of Marks in UG Degree Qualifying Examinations
            </Text>
            <Text style={styles.text_indent}>
              (a) UG Degree: {this.state.users.ugDegree}
            </Text>
            <Text style={styles.text_indent}>
              (b) Name of the College with Address:{" "}
              {this.state.users.collegeName}
              {"  "}
              {this.state.users.collegeAddress}
            </Text>

            <Text style={styles.text_indent}>
              (c) Name of the University: {this.state.users.universityName}
              {"     "}
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
                <View style={styles.tableCol3}>
                  <Text style={styles.tableCell2}>Overall Total</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.overalltotalmarks}
                  </Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.overallmarksobtained}
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
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemoveralltotalmarks}
                  </Text>
                </View>
                <View style={styles.tableCol5}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemoverallmarksobtained}
                  </Text>
                </View>
                <View style={styles.tableCol5}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemtotalpermark}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Page>

        <Page style={styles.page3Content}>
          <View>
            <View style={styles.subheader}>
              <Text>Declaration By The Applicant</Text>
            </View>
            <View style={styles.declarationPara}>
              <Text>
                All the information furnished prepage are true to the best of my
                knowledge. I am aware that any wrong information or suppression
                of information may result in punitive action in addition to
                summary cancellation of my candidature for admission and
                forfeiture of the fee paid
              </Text>
              <Text>
                • I have the required qulification for admission to MBA/MCA
                Degree Programme as prescribed
              </Text>

              <Text>
                • I have studied Bachelors Degree course in 10+2+3/4/5 years
                pattern (or) 10 + 3 years Diploma + 3 years pattern
              </Text>

              <Text>
                • I have not studied B.E / B.Tech Degree through distance / week
                end mode
              </Text>

              <Text>
                I am also aware that a pass in recognized bachelor's degree of
                minimum 3 years duration in 10+2+3/4/5 years pattern and
                obtained at least 50% (45% in case of candidates belonging to
                reserved category) at the qualifying examination is the minimum
                eligibility required for admission to PG course as per AICTE
                norms
              </Text>
              <Text style={styles.left_align}>Place:</Text>
              <Text style={styles.left_align}>
                Date:
                {"                                     "}
                {"                                     "}
                {"                                     "}
                {"                                     "}
                Signature of the Applicant
              </Text>
            </View>

            <View style={styles.declarationPara}>
              <Text style={styles.subheader}>CHECK LIST</Text>
              <Text>To be filled by the Applicant</Text>
              <Text>
                1. Self Attested Photograph affixing on the Application
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                2. Self Attested Photograph of Plus Two Mark Sheet / Diploma
                certificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>

              <Text>
                3. Self Attested photocopy of All Semester Marksheets(All
                Apperances) of qualifying Examination (Xeroxing both sides)
                {"                "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                4. Self Attested Photocopy of Degree or Provisional Cerificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                5. Self Attested Photocopy of Transfer certificate{" "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                6. Self Attested Photocopy of permanent community card for
                SC,ST,SCA,MBC & DNC,BC,BCM
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                7. Self Attested Photocopy of TANCET 2020 Hall Ticket
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                8. Self Attested Photocopy of TANCET 2020 Mark Sheet{" "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                9. Self Attested Photocopy of TANCET Nativity Certificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                10.District Medical Board Certificate (for differntly abled
                Persons Only)
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                11.Sri Lankan Refugee Certificate - IF Applicable
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );

    const MyDoc3 = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text>
              APPLICATION FORM FOR ADMISSION TO {this.state.users.choice} COURSE
            </Text>
          </View>
          <View style={styles.right}>
            <Text>Application Number : {this.state.users.applicationno} </Text>
          </View>
          <Image style={styles.logo} src={logo}></Image>
          <Image
            style={styles.photo}
            src={this.state.image.imageData}
          ></Image>
          <View style={styles.left}>
            <Text style={styles.text}>
              1.{"     "} TANCET {new Date().getFullYear()} Registration Number
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
            <Text>
              18.{"   "} Name of the Caste{newLine}
            </Text>
            <Text>19.{"   "} Differently abled Quota </Text>
            <Text>20.{"   "} Qualifying Degree : </Text>
            <Text>21.{"   "} Pattern of Studied : </Text>
            <Text>22.{"   "} Appearance in the Final Year Exam </Text>
            <Text>
              23.{"   "} TANCET Marks in {new Date().getFullYear()} :{" "}
            </Text>
            <Text>24.{"   "} School/College Study information </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Class/Degree</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Year of Passing</Text>
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
                  <Text style={styles.tableCell}>X</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XyearOfPassing}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XnameOfSchool}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.Xdistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.Xstate}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>XII</Text>
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
                    {this.state.users.XIIdistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.XIIstate}
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
                    {this.state.users.degreeDistrict}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {this.state.users.degreeState}
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
    <Text>: {this.state.users.nameOfCaste}{newLine}</Text>
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
              25.{"   "} Details of Marks in UG Degree Qualifying Examinations
            </Text>
            <Text style={styles.text_indent}>
              (a) UG Degree: {this.state.users.ugDegree}
            </Text>
            <Text style={styles.text_indent}>
              (b) Name of the College with Address:{" "}
              {this.state.users.collegeName}
              {"  "}
              {this.state.users.collegeAddress}
            </Text>

            <Text style={styles.text_indent}>
              (c) Name of the University: {this.state.users.universityName}
              {"     "}
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
                <View style={styles.tableCol3}>
                  <Text style={styles.tableCell2}>Overall Total</Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.overalltotalmarks}
                  </Text>
                </View>
                <View style={styles.tableCol2}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.overallmarksobtained}
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
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemoverallmarksobtained}
                  </Text>
                </View>
                <View style={styles.tableCol5}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemoveralltotalmarks}
                  </Text>
                </View>
                <View style={styles.tableCol5}>
                  <Text style={styles.tableCell2}>
                    {this.state.users.prefinalsemtotalpermark}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Page>

        <Page style={styles.page3Content}>
          <View>
            <View style={styles.subheader}>
              <Text>Declaration By The Applicant</Text>
            </View>
            <View style={styles.declarationPara}>
              <Text>
                All the information furnished prepage are true to the best of my
                knowledge. I am aware that any wrong information or suppression
                of information may result in punitive action in addition to
                summary cancellation of my candidature for admission and
                forfeiture of the fee paid
              </Text>
              <Text>
                • I have the required qulification for admission to MBA/MCA
                Degree Programme as prescribed
              </Text>

              <Text>
                • I have studied Bachelors Degree course in 10+2+3/4/5 years
                pattern (or) 10 + 3 years Diploma + 3 years pattern
              </Text>

              <Text>
                • I have not studied B.E / B.Tech Degree through distance / week
                end mode
              </Text>

              <Text>
                I am also aware that a pass in recognized bachelor's degree of
                minimum 3 years duration in 10+2+3/4/5 years pattern and
                obtained at least 50% (45% in case of candidates belonging to
                reserved category) at the qualifying examination is the minimum
                eligibility required for admission to PG course as per AICTE
                norms
              </Text>
              <Text style={styles.left_align}>Place:</Text>
              <Text style={styles.left_align}>
                Date:
                {"                                     "}
                {"                                     "}
                {"                                     "}
                {"                                     "}
                Signature of the Applicant
              </Text>
            </View>

            <View style={styles.declarationPara}>
              <Text style={styles.subheader}>CHECK LIST</Text>
              <Text>To be filled by the Applicant</Text>
              <Text>
                1. Self Attested Photograph affixing on the Application
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                2. Self Attested Photograph of Plus Two Mark Sheet / Diploma
                certificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>

              <Text>
                3. Self Attested photocopy of All Semester Marksheets(All
                Apperances) of qualifying Examination (Xeroxing both sides)
                {"                "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                4. Self Attested Photocopy of Degree or Provisional Cerificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                5. Self Attested Photocopy of Transfer certificate{" "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                6. Self Attested Photocopy of permanent community card for
                SC,ST,SCA,MBC & DNC,BC,BCM
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                7. Self Attested Photocopy of TANCET 2020 Hall Ticket
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                8. Self Attested Photocopy of TANCET 2020 Mark Sheet{" "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                9. Self Attested Photocopy of TANCET Nativity Certificate
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                10.District Medical Board Certificate (for differntly abled
                Persons Only)
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
              <Text>
                11.Sri Lankan Refugee Certificate - IF Applicable
                {"                                        "}
                {"                                        "}
                {"                                        "}
                {"                                        "}
                <Image style={styles.checkBox} src={square_icon} />
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    );

    if (this.state.users === null || this.state.image === null) {
      return <Loading />;
    }

    if (this.state.users !== null && this.state.image !== null) {
      console.log(this.state.users);
      if (
        this.state.users.patternOfStudy === "10 + Plus Two + 3 Years Degree"
      ) {
        return (
          <div>
            <h1>
              {" "}
              {this.state.users.choice} Application No:{" "}
              {this.state.users.applicationno}
            </h1>
            <PDFDownloadLink
              className="btn btn-block"
              color="limegreen"
              style={{
                backgroundColor: "DodgerBlue",
                border: "none",
                color: "white",
                padding: "12px 30px",
                cursor: "pointer",
                fontSize: "20px",
                width: "100%",
              }}
              document={<MyDoc1 />}
              fileName="fee_acceptance.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download"
              }
            </PDFDownloadLink>
            <PDFViewer
              style={{
                width: "100%",
                height: "100rem",
              }}
            >
              <MyDoc1 />
            </PDFViewer>
          </div>
        );
      }

      if (
        this.state.users.patternOfStudy ===
        "10 + 3 Years Diploma + 3 Years Degree"
      ) {
        return (
          <div>
            <h1>
              {" "}
              {this.state.users.choice} Application No:{" "}
              {this.state.users.applicationno}
            </h1>
            <PDFDownloadLink
              className="btn btn-block"
              color="limegreen"
              style={{
                backgroundColor: "DodgerBlue",
                border: "none",
                color: "white",
                padding: "12px 30px",
                cursor: "pointer",
                fontSize: "20px",
                width: "100%",
              }}
              document={<MyDoc2 />}
              fileName="fee_acceptance.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download"
              }
            </PDFDownloadLink>
            <PDFViewer
              style={{
                width: "100%",
                height: "100rem",
              }}
            >
              <MyDoc2 />
            </PDFViewer>
          </div>
        );
      }

      if (
        this.state.users.patternOfStudy === "10 + Plus Two + 4 Years Degree"
      ) {
        return (
          <div>
            <h1>
              {" "}
              {this.state.users.choice} Application No:{" "}
              {this.state.users.applicationno}
            </h1>
            <PDFDownloadLink
              className="btn btn-block"
              color="limegreen"
              style={{
                backgroundColor: "DodgerBlue",
                border: "none",
                color: "white",
                padding: "12px 30px",
                cursor: "pointer",
                fontSize: "20px",
                width: "100%",
              }}
              document={<MyDoc3 />}
              fileName="fee_acceptance.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download"
              }
            </PDFDownloadLink>
            <PDFViewer
              style={{
                width: "100%",
                height: "100rem",
              }}
            >
              <MyDoc3 />
            </PDFViewer>
          </div>
        );
      }
    }
  }
}
