import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import { Progress } from "reactstrap";

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewImage: null,
      selectedImage: null,
      loaded: 0,
      uploadResponse: "",
      plustwomarksheet: null,
      previewplustwomarksheet: null,
      allsemmarksheet: null,
      preivewallsemmarksheet: null,
      degreecertificate: null,
      preivewdegreecertificate: null,
      transfercertificate: null,
      preivewtransfercertificate: null,
      permanentcommunitycard: null,
      preivewpermanentcommunitycard: null,
      tancethallticket: null,
      preivewtancethallticket: null,
      tancetmarksheet: null,
      preivewtancetmarksheet: null,
      nativitycertificate: null,
      preivewnativitycertificate: null,
      districtmedicalboard: null,
      preivewdistrictmedicalboard: null,
      srilankantamilrefugee: null,
      preivewsrilankantamilrefugee: null,
      demanddraft: null,
      preivewdemanddraft: null,
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  isValidated() {
    const userinput = this._grabUserinput(); // grab user entered vals
    const validateNewinput = this._validateData(userinput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewinput).every((k) => {
        return validateNewinput[k] === true;
      })
    ) {
      if (this.props.getStore().selectedImage !== userinput.selectedImage) {
        // only update store of something changed
        this.props.updateStore({
          ...userinput,
          savedToCloud: false, // use this to notify step4 that some changes took place and prompt the user to save again
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
      selectedImageVal: data.selectedImage !== "",
      uploadResponse: data.selectedImage !== "",
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      selectedImageValMsg: val.selectedImageVal
        ? ""
        : "* Please Upload An Image",
      uploadResponse: val.selectedImage ? "" : "* Please Upload An Image",
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      selectedImage: this.refs.selectedImage.value,
    };
  }

  singleFileChangedHandler = (event, choice) => {
    switch (choice) {
      case "imageupload":
        this.setState({
          selectedImage: event.target.files[0],
          previewImage: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "plustwomarksheet":
        this.setState({
          plustwomarksheet: event.target.files[0],
          previewplustwomarksheet: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "allsemmarksheet":
        this.setState({
          allsemmarksheet: event.target.files[0],
          preivewallsemmarksheet: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "degreecertificate":
        this.setState({
          degreecertificate: event.target.files[0],
          previewdegreecertificate: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "transfercertificate":
        this.setState({
          transfercertificate: event.target.files[0],
          previewtransfercertificate: URL.createObjectURL(
            event.target.files[0]
          ),
        });
        break;

      case "plustwomarksheet":
        this.setState({
          plustwomarksheet: event.target.files[0],
          previewplustwomarksheet: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "permanentcommunitycard":
        this.setState({
          permanentcommunitycard: event.target.files[0],
          previewpermanentcommunitycard: URL.createObjectURL(
            event.target.files[0]
          ),
        });
        break;

      case "tancethallticket":
        this.setState({
          tancethallticket: event.target.files[0],
          preivewtancethallticket: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "tancetmarksheet":
        this.setState({
          tancetmarksheet: event.target.files[0],
          preivewtancetmarksheet: URL.createObjectURL(event.target.files[0]),
        });
        break;

      case "nativitycertificate":
        this.setState({
          nativitycertificate: event.target.files[0],
          preivewnativitycertificate: URL.createObjectURL(
            event.target.files[0]
          ),
        });
        break;

      case "districtmedicalboard":
        this.setState({
          districtmedicalboard: event.target.files[0],
          previewdistrictmedicalboard: URL.createObjectURL(
            event.target.files[0]
          ),
        });
        break;

      case "srilankantamilrefugee":
        this.setState({
          srilankantamilrefugee: event.target.files[0],
          previewsrilankantamilrefugee: URL.createObjectURL(
            event.target.files[0]
          ),
        });
        break;

      case "demanddraft":
        this.setState({
          demanddraft: event.target.files[0],
          previewdemanddraft: URL.createObjectURL(event.target.files[0]),
        });
        break;
    }
  };

  singleFileUploadHandler = (event, route) => {
    const data = new FormData();
    // If file selected
    if (this.state[route]) {
      data.append(
        "fileuploads",
        this.state[route],
        this.state.selectedImage.name
      );
      axios
        .post(`/api/fileupload/${route}`, data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
          onUploadProgress: (ProgressEvent) => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
            });
          },
        })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                this.ocShowAlert("Max size: 2MB", "red");
              } else {
                console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              let fileName = response.data;
              console.log("filedata", fileName);
              this.ocShowAlert("File Uploaded", "#3089cf");
              this.setState({
                uploadResponse: fileName,
              });
            }
          }
        })
        .catch((error) => {
          // If another error
          this.ocShowAlert(error, "red");
        });
    } else {
      // if file not selected throw error
      this.ocShowAlert("Please upload file", "red");
    }
  };
  // ShowAlert Function
  ocShowAlert = (message, background = "#3089cf") => {
    let alertContainer = document.querySelector("#oc-alert-container"),
      alertEl = document.createElement("div"),
      textNode = document.createTextNode(message);
    alertEl.setAttribute("class", "oc-alert-pop-up");
    $(alertEl).css("background", background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function () {
      $(alertEl).fadeOut("slow");
      $(alertEl).remove();
    }, 3000);
  };

  render() {
    console.log(this.state.previewImage);
    let notValidClasses = {};

    if (
      typeof this.state.selectedImageVal === "undefined" ||
      this.state.selectedImageVal
    ) {
      notValidClasses.selectedImageCls = "no-error col-md-10";
    } else {
      notValidClasses.selectedImageCls = "has-error col-md-10";
      notValidClasses.selectedImageValGrpCls = "val-err-tooltip";
    }

    return (
      <div className="step step5">
        <div className="container">
          <div
            className="card border-light mb-3 mt-5"
            style={{ boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)" }}
          >
            <div className="card-header">
              {/* For Alert box*/}
              <div id="oc-alert-container"></div>
              {/* Single File Upload*/}
              <h3 style={{ color: "#555", marginLeft: "12px" }}>
                Image Upload
              </h3>
              <p className="text-muted" style={{ marginLeft: "12px" }}>
                Upload Size: 250px x 250px ( Max 2MB )
              </p>
            </div>
            <div className="card-body">
              <p className="card-text">Upload Your Image</p>
              <div className="mt-3 mb-3">
                <img
                  ref="PreviewImage"
                  height="250px"
                  width="250px"
                  alt="userImg"
                  src={this.state.previewImage}
                />
              </div>
              <div
                className={notValidClasses.selectedImageCls}
                className="error_color"
              >
                <input
                  ref="selectedImage"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(event) =>
                    this.singleFileChangedHandler("imageupload")
                  }
                />
                <div className={notValidClasses.selectedImageValGrpCls}>
                  {this.state.selectedImageValMsg}
                </div>
              </div>
              <div className="mt-5">
                <div class="form-group">
                  <Progress max="100" color="success" value={this.state.loaded}>
                    {Math.round(this.state.loaded, 2)}%
                  </Progress>
                </div>
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler("imageupload")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>
            <div className="card-header">
              <h3 style={{ color: "#555", marginLeft: "12px" }}>
                Single File Upload
              </h3>
              <p className="text-muted" style={{ marginLeft: "12px" }}>
                Upload Size: 250px x 250px ( Max 2MB )
              </p>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">Plus Two Marksheet</span>
              </p>
              <a
                href={this.state.previewplustwomarksheet}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "plustwomarksheet")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "plustwomarksheet")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">All Semester Marksheet</span>
              </p>
              <a
                href={this.state.previewdegreecertificate}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "allsemmarksheet")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "allsemmarksheet")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">Degree Certificate</span>
              </p>
              <a
                href={this.state.previewdegreecertificate}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "degreecertificate")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "degreecertificate")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">Transfer Certificate</span>
              </p>
              <a
                href={this.state.previewtransfercertificate}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "transfercertificate")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "transfercertificate")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">Permanent Community Card</span>
              </p>
              <a
                href={this.state.previewpermanentcommunitycard}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "permanentcommunitycard")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(
                      event,
                      "permanentcommunitycard"
                    )
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">TANCET Hall Ticket</span>
              </p>
              <a
                href={this.state.preivewtancethallticket}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "tancethallticket")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "tancethallticket")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">TANCET Mark Sheet</span>
              </p>
              <a
                href={this.state.preivewtancetmarksheet}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "tancetmarksheet")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "tancetmarksheet")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">Nativity Certificate</span>
              </p>
              <a
                href={this.state.preivewnativitycertificate}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "nativitycertificate")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "nativitycertificate")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">District Medical Board</span>
              </p>
              <a
                href={this.state.previewdistrictmedicalboard}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "districtmedicalboard")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "districtmedicalboard")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload Your{" "}
                <span className="highLightText">
                  Sri Lankan Tamil Refugee Proof
                </span>
              </p>
              <a
                href={this.state.previewsrilankantamilrefugee}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "srilankantamilrefugee")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "srilankantamilrefugee")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                Please upload your{" "}
                <span className="highLightText">Demand Draft</span>
              </p>
              <a
                href={this.state.previewdemanddraft}
                target="_blank"
                className="mr-4"
              >
                View PDF
              </a>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) =>
                  this.singleFileChangedHandler(event, "demanddraft")
                }
              />
              <div className="mt-5">
                <button
                  className="btn btn-info"
                  onClick={(event) =>
                    this.singleFileUploadHandler(event, "demanddraft")
                  }
                >
                  Upload!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
