import React, { Component } from "react";
import axios from 'axios'
import $ from 'jquery';
import { Progress } from 'reactstrap';

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewImage: props.getStore().previewImage,
      selectedFile: null,
      loaded:0,
      uploadResponse:''
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
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
        this.props.getStore().selectedFile !== userinput.selectedFile
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
      selectedFileVal: data.selectedFile !== "",
      uploadResponse: data.selectedFile !== "",
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      selectedFileValMsg: val.selectedFileVal ? "" : "* Please Upload An Image",
      uploadResponse: val.selectedFile ? "" : "* Please Upload An Image",
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      selectedFile: this.refs.selectedFile.value,
     
    };
  }

	singleFileChangedHandler = ( event ) => {
		this.setState({
      selectedFile: event.target.files[0],
			previewImage: URL.createObjectURL(event.target.files[0])
		});
	};
   
  singleFileUploadHandler = ( event ) => {
		const data = new FormData();
// If file selected
		if ( this.state.selectedFile ) {
			data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
			axios.post( '/api/application/imageupload', data, {
        headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
        })
      },
			})
				.then( ( response ) => {
					if ( 200 === response.status ) {
						// If file size is larger than expected.
						if( response.data.error ) {
							if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
								this.ocShowAlert( 'Max size: 2MB', 'red' );
							} else {
								console.log( response.data );
// If not the given file type
								this.ocShowAlert( response.data.error, 'red' );
							}
						} else {
							// Success
							let fileName = response.data;
							console.log( 'filedata', fileName );
              this.ocShowAlert( 'File Uploaded', '#3089cf' );
              this.setState({
                uploadResponse: fileName
              })  
						}
					}
				}).catch( ( error ) => {
				// If another error
				this.ocShowAlert( error, 'red' );
			});
		} else {
			// if file not selected throw error
			this.ocShowAlert( 'Please upload file', 'red' );
		}
	};
    // ShowAlert Function
	ocShowAlert = ( message, background = '#3089cf' ) => {
		let alertContainer = document.querySelector( '#oc-alert-container' ),
			alertEl = document.createElement( 'div' ),
			textNode = document.createTextNode( message );
		alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
		$( alertEl ).css( 'background', background );
		alertEl.appendChild( textNode );
		alertContainer.appendChild( alertEl );
		setTimeout( function () {
			$( alertEl ).fadeOut( 'slow' );
			$( alertEl ).remove();
		}, 3000 );
  };

    render(){
  
      let notValidClasses = {};

  
       if (typeof this.state.selectedFileVal === "undefined" || this.state.selectedFileVal) {
        notValidClasses.selectedFileCls = "no-error col-md-10";
      } else {
        notValidClasses.selectedFileCls = "has-error col-md-10";
        notValidClasses.selectedFileValGrpCls = "val-err-tooltip";
      }


      return(
      <div className="step step5">
      <div className="container">
				
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
            {/* For Alert box*/}
		        <div id="oc-alert-container"></div>
				    {/* Single File Upload*/}
						<h3 style={{ color: '#555', marginLeft: '12px' }}>Image Upload</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
					</div>
					<div className="card-body">
						<p className="card-text">Upload Your Image</p>
            <div className='mt-3 mb-3'>
              <img 
                ref="PreviewImage"
                height='250px'
                width='250px'
                alt='userImg'
                src={this.state.previewImage}
                />
              </div>
              <div
                className={notValidClasses.selectedFileCls}
                className="error_color"
              >
              <input 
                ref='selectedFile'
                type="file"
                onChange={this.singleFileChangedHandler}
             />
            <div 
            className={notValidClasses.selectedFileValGrpCls}>
                      {this.state.selectedFileValMsg}
                    </div>
                    </div>
						  <div className="mt-5">
              <div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded} >
                      {Math.round(this.state.loaded,2) }%
                  </Progress>
              </div>
							<button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
						</div>
					</div>
				</div>
        </div>
        </div>
      )
    }
}

