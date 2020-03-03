import React from "react";
import { PDFViewer, Document, Page } from "@react-pdf/renderer";
import { Button, Jumbotron, Container } from "reactstrap";
import MyDoc from "./document";
import axios from "axios";

const Submit = () => {
  return (
    <div className="centerdiv">
      <PDFViewer
        style={{
          width: "45rem",
          height: "68rem"
        }}
        filename="Applicationform.pdf"
      >
        {/* document={<MyDoc />}
          fileName="application.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          } */}
        <MyDoc />
      </PDFViewer>
    </div>
  );
};

export default Submit;
