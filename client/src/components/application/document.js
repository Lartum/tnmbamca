import React from "react";
import axios from "axios";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function Mydoc () {

axios.get('/api/pdfgenerate')
     .then((res) =>{
      const data = res.data.data;
      console.log(data);
      return data;
    })
  
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
    }
  });
  return (
    <Document fileName="applicationdetails.pdf">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>APPLICATION FORM FOR ADMISSION TO MBA COURSE</Text>
        </View>
        <View style={styles.right}>
          <Text>Application Number : </Text>
        </View>
        <View style={styles.photo}></View>
        <View style={styles.left}>
          <Text>1.{"     "} TANCENT 2020 Registeration Number :</Text>
          <Text>2.{"     "} Name : </Text>
          <Text>3.{"     "} Name of Parent/Guardian : </Text>
          <Text>4.{"     "} Address for Communication : </Text>
          <Text>5.{"     "} Email Id : </Text>
          <Text>6.{"     "} Contact Telephone No : </Text>
          <Text>7.{"     "} Mobile No : </Text>
          <Text>8.{"     "} Sex : </Text>
          <Text>9.{"     "} Citizenship : </Text>
          <Text>10.{"   "} Nativity : </Text>
          <Text>11.{"   "} Srilankan Tamil Refugee : </Text>
          <Text>12.{"   "} Place of Birth : </Text>
          <Text>13.{"   "} Mother Tongue : </Text>
          <Text>14.{"   "} Date of Birth : </Text>
          <Text>15.{"   "} Name of the Community : </Text>
          <Text>16.{"   "} Caste Code : </Text>
          <Text>17.{"   "} Religion : </Text>
          <Text>18.{"   "} Name of the Caste : </Text>
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
                <Text style={styles.tableCell}>XI</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>XII/Diploma</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Degree</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>data goes here</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftpage2}>
          <Text>
            25.{"   "} Details of Marks in UG Degree Qualifying Examinations
          </Text>
          <Text style={styles.text_indent}>(a) UG Degree : </Text>
          <Text style={styles.text_indent}>
            (b) Name of the College with Address :{" "}
          </Text>
          <Text style={styles.text_indent}>(c) Name of the University : </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>Semester/Year</Text>
              </View>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>
                  Month and Year of Passing
                </Text>
              </View>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>Maximum Marks</Text>
              </View>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>Marks Obtained</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>I</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>II</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>III</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>IV</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>V</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>VI</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>VII</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>VIII</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>IX</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>X</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol3}>
                <Text style={styles.tableCell2}>Overall Total</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>Data goes here </Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>Date goes here</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol4}>
                <Text style={styles.tableCell2}>Total % Marks</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>Data goes here </Text>
              </View>
            </View>
          </View>
          <Text>
            26.{"   "} Average Percentage of Marks upto Pre-final Semester/Year{" "}
          </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader3}>
                <Text style={styles.tableCellHeader2}>
                  Total Marks Obtained
                </Text>
              </View>
              <View style={styles.tableColHeader3}>
                <Text style={styles.tableCellHeader2}>Total Maximum Marks</Text>
              </View>
              <View style={styles.tableColHeader3}>
                <Text style={styles.tableCellHeader2}>Percentage of Marks</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol5}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
          </View>
          <Text>27.{"   "} Demand Draft Details </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>DD Number</Text>
              </View>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>DD Amount (Rs.)</Text>
              </View>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>DD Date</Text>
              </View>
              <View style={styles.tableColHeader2}>
                <Text style={styles.tableCellHeader2}>
                  Bank Name and Branch
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>Data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell2}>data goes here</Text>
              </View>
            </View>
          </View>
          <Text></Text>
        </View>
      </Page>
    </Document>
  );
}
