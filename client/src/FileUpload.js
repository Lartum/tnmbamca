import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { PDFViewer } from '@react-pdf/renderer';

class FileUpload extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selectedFile: null,
		}
	}

	singleFileChangedHandler = ( event, choice ) => {
		this.setState({
			selectedFile: event.target.files[0]
		});
	};

	singleFileUploadHandler = ( event, route ) => {
		const data = new FormData();
    // If file selected
		if ( this.state.selectedFile ) {
			data.append( 'fileUploads', this.state.selectedFile, this.state.selectedFile.name );
			axios.post( `/api/fileupload/${route}`, data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
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

	render() {
		return(
			<div className="container">
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h3 style={{ color: '#555', marginLeft: '12px' }}>Single File Upload</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
					</div>
					
          <div className="card-body">
						<p className="card-text">Please upload your Plus Two Marksheet</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'plustwomarksheet')}/>
						<div className="mt-5">
           
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'plustwomarksheet')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload your All Semester Marksheet</p>
            <input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'allsemmarksheet')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'allsemmarksheet')}>Upload!</button>
						</div>
					</div>
          
          <div className="card-body">
						<p className="card-text">Please upload your Degree Certificate</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'degreecertificate')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'degreecertificate')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload your Transfer Certificate</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'transfercertificate')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'transfercertificate')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload your Permanent Community Card</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'permanentcommunitycard')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'permanentcommunitycard')}>Upload!</button>
						</div>
					</div>
          
          <div className="card-body">
						<p className="card-text">Please upload your TANCET Hall Ticket</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'tancethallticket')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'tancethallticket')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload your TANCET Mark Sheet</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'tancetmarksheet')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'tancetmarksheet')}>Upload!</button>
						</div>
					</div>


          <div className="card-body">
						<p className="card-text">Please upload your Nativity Certificate</p>
            <input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'nativitycertificate')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'nativitycertificate')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload your Distric Medical Board</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'districtmedicalboard')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'districtmedicalboard')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload Your Sri Lankan Tamil Refugee Proof</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'srilankantamilrefugee')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'srilankantamilrefugee')}>Upload!</button>
						</div>
					</div>

          <div className="card-body">
						<p className="card-text">Please upload your Demand Draft</p>
						<input type="file" onChange={(event) => this.singleFileChangedHandler(event, 'demanddraft')}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={(event) => this.singleFileUploadHandler(event, 'demanddraft')}>Upload!</button>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default FileUpload;