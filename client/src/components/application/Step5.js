import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Progress } from 'reactstrap';
class Step5 extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			loaded:0,
			loaded1:0,
			loaded2:0,
			loaded3:0,
			loaded4:0,
			loaded5:0,
			loaded6:0,
			loaded7:0,
			loaded8:0,
			loaded9:0,
			loaded10:0,
			loaded11:0,
			loaded12:0,
			imageUpload: null,
			imageUploadpreview:null,
			imageUploads: null,
			plustwomarksheet:null,
			previewplustwomarksheet:null,
			allsemmarksheet:null,
			previewallsemmarksheet:null,
			degreecertificate:null,
			previewdegreecertificate:null,
			transfercertificate:null,
			previewtransfercertificate:null,
			permanentcommunitycard:null,
			previewpermanentcommunitycard:null,
			tancethallticket:null,
			previewtancethallticket:null,
			tancetmarksheet:null,
			previewtancetmarksheet:null,
			nativitycertificate:null,
			previewnativitycertificate:null,
			districtmedicalboard:null,
			previewdistrictmedicalboard:null,
			srilankantamilrefugee:null,
			previewsrilankantamilrefugee:null,
			demanddraft:null,
			previewdemanddraft:null
		}
	}

	singleFileChangedHandler = ( event, choice ) => {
		if(choice === 'imageUpload'){
		this.setState({
			imageUpload: event.target.files[0],
			imageUploadpreview: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'plustwomarksheet'){
		this.setState({
			plustwomarksheet: event.target.files[0],
			previewplustwomarksheet: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'degreecertificate'){
		this.setState({
			degreecertificate: event.target.files[0],
			previewdegreecertificate: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'allsemmarksheet'){
		this.setState({
			allsemmarksheet: event.target.files[0],
			previewallsemmarksheet: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'transfercertificate'){
		this.setState({
			transfercertificate: event.target.files[0],
			previewtransfercertificate: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'permanentcommunitycard'){
		this.setState({
			permanentcommunitycard: event.target.files[0],
			previewpermanentcommunitycard: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'tancethallticket'){
		this.setState({
			tancethallticket: event.target.files[0],
			previewtancethallticket: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'tancetmarksheet'){
		this.setState({
			tancetmarksheet: event.target.files[0],
			previewtancetmarksheet: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'nativitycertificate'){
		this.setState({
			nativitycertificate: event.target.files[0],
			previewnativitycertificate: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'districtmedicalboard'){
		this.setState({
			districtmedicalboard: event.target.files[0],
			previewdistrictmedicalboard: URL.createObjectURL(event.target.files[0])
		});
	 }

	 else if(choice === 'srilankantamilrefugee'){
		this.setState({
			srilankantamilrefugee: event.target.files[0],
			previewsrilankantamilrefugee: URL.createObjectURL(event.target.files[0])
		});
	 }
	 else if(choice === 'demanddraft'){
		this.setState({
			demanddraft: event.target.files[0],
			previewdemanddraft: URL.createObjectURL(event.target.files[0])
		});
	 }
	};

	singleStep5Handler = ( event, choice ) => {
		const data = new FormData();
		// If file selected
		if ( this.state[choice]) {
			data.append( 'profileImage', this.state[choice] );
			axios.post( `/api/fileupload/${choice}`, data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				},
				onUploadProgress: ProgressEvent => {
					if(choice === 'imageUpload'){
						this.setState({
							loaded1: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'plustwomarksheet'){
						this.setState({
							loaded2: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'allsemmarksheet'){
						this.setState({
							loaded3: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'degreecertificate'){
						this.setState({
							loaded4: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'transfercertificate'){
						this.setState({
							loaded5: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'permanentcommunitycard'){
						this.setState({
							loaded6: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'tancethallticket'){
						this.setState({
							loaded7: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'tancetmarksheet'){
						this.setState({
							loaded8: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'nativitycertificate'){
						this.setState({
							loaded9: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'districtmedicalboard'){
						this.setState({
							loaded10: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'srilankantamilrefugee'){
						this.setState({
							loaded11: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
					else if(choice === 'demanddraft'){
						this.setState({
							loaded12: (ProgressEvent.loaded / ProgressEvent.total*100),
						})
					}
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
			<div className="container" style={{textAlign:"center"}}>
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h3 style={{ color: '#555', marginLeft: '12px' }}>File Uploads</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Image Upload Size: 250px x 250px ( Max 2MB )</p>
						<p className="text-muted" style={{ marginLeft: '12px' }}>PDF Upload Size : 2MB</p>
					</div>
					<div className="card-body">
						<img 
							height='250px'
							width='250px'
							src={this.state.imageUploadpreview}
							className='mb-4'
							/>
							 <Progress 
                   				 max="100"   
                    			 color="success" 
                    			 value={this.state.loaded1} >
                     			{Math.round(this.state.loaded1,2) }%
                  			</Progress>
							<p className="card-text mt-5"> 1. Self Attested Photograph affixing on the Application</p>
						<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'imageUpload')}/>
						<div className="mt-5">
							<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'imageUpload')}>Upload</button>
						</div>
					
				

			
				<p className="card-text mt-5">2. Self Attested Photograph of Plus Two Mark Sheet / Diploma
                certificate</p>
				<a href={this.state.previewplustwomarksheet} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'plustwomarksheet')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded2} >
                      {Math.round(this.state.loaded2,2) }%
                  </Progress>
              </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'plustwomarksheet')}>Upload</button>
				</div>

				<p className="card-text mt-5">3. Self Attested photocopy of All Semester Marksheets(All
                Apperances) of qualifying Examination (Xeroxing both sides)</p>
				<a href={this.state.previewallsemmarksheet} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'allsemmarksheet')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded3} >
                      {Math.round(this.state.loaded3,2) }%
                  </Progress>
              </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'allsemmarksheet')}>Upload</button>
				</div>

		
				<p className="card-text mt-5">4. Self Attested Photocopy of Degree or Provisional Cerificate</p>
				<a href={this.state.previewdegreecertificate} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'degreecertificate')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded4} >
                      {Math.round(this.state.loaded4,2) }%
                  </Progress>
              </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'degreecertificate')}>Upload</button>
				</div>


				<p className="card-text mt-5">5. Self Attested Photocopy of Transfer certificate</p>
				<a href={this.state.previewtransfercertificate} target='_blank' className="mr-4">View PDF</a>
				<input 
				 type="file" 
				 onChange={(event, choice) =>
				 this.singleFileChangedHandler(event,'transfercertificate')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded5} >
                      {Math.round(this.state.loaded5,2) }%
                  </Progress>
              </div>
				<button 
				className="btn btn-block btn-info" 
				onClick={(event, choice) => 
				this.singleStep5Handler(event,'transfercertificate')}>Upload</button>
				</div>

				<p className="card-text mt-5">6. Self Attested Photocopy of permanent community card for
                SC,ST,SCA,MBC & DNC,BC,BCM</p>
				<a href={this.state.previewpermanentcommunitycard} target='_blank' className="mr-4">View PDF</a>
				<input 
				 type="file" 
				 onChange={(event, choice) =>
				 this.singleFileChangedHandler(event,'permanentcommunitycard')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded6} >
                      {Math.round(this.state.loaded6,2) }%
                  </Progress>
              </div>
				<button 
				className="btn btn-block btn-info" 
				onClick={(event, choice) => 
				this.singleStep5Handler(event,'permanentcommunitycard')}>Upload</button>
				</div>

				
				<p className="card-text mt-5">7. Self Attested Photocopy of TANCET {new Date().getFullYear()} Hall Ticket</p>
				<a href={this.state.previewtancethallticket} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'tancethallticket')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded7} >
                      {Math.round(this.state.loaded7,2) }%
                  </Progress>
              </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'tancethallticket')}>Upload</button>
				</div>

				<p className="card-text mt-5">8. Self Attested Photocopy of TANCET 2020 Mark Sheet</p>
				<a href={this.state.previewtancetmarksheet} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'tancetmarksheet')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded8} >
                      {Math.round(this.state.loaded8,2) }%
                  </Progress>
                </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'tancetmarksheet')}>Upload</button>
				</div>


				<p className="card-text mt-5">9. Self Attested Photocopy of TANCET Nativity Certificate</p>
				<a href={this.state.previewnativitycertificate} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'nativitycertificate')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded9} >
                      {Math.round(this.state.loaded9,2) }%
                  </Progress>
                </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'nativitycertificate')}>Upload</button>
				</div>

				<p className="card-text mt-5"> 10.District Medical Board Certificate (for differntly abled
                Persons Only)</p>
				<a href={this.state.previewdistrictmedicalboard} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'districtmedicalboard')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded10} >
                      {Math.round(this.state.loaded10,2) }%
                  </Progress>
                </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'districtmedicalboard')}>Upload</button>
				</div>

				<p className="card-text mt-5">11.Sri Lankan Refugee Certificate - IF Applicable</p>
				<a href={this.state.previewsrilankantamilrefugee} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'srilankantamilrefugee')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded11} >
                      {Math.round(this.state.loaded11,2) }%
                  </Progress>
                </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'srilankantamilrefugee')}>Upload</button>
				</div>

				<p className="card-text mt-5">12. Included Original Demand Draft</p>
				<a href={this.state.previewdemanddraft} target='_blank' className="mr-4">View PDF</a>
				<input type="file" onChange={(event, choice) =>this.singleFileChangedHandler(event,'demanddraft')}/>
				<div className="mt-5">
				<div class="form-group">
                 <Progress 
                    max="100"   
                    color="success" 
                    value={this.state.loaded12} >
                      {Math.round(this.state.loaded12,2) }%
                  </Progress>
                </div>
				<button className="btn btn-block btn-info" onClick={(event, choice) => this.singleStep5Handler(event,'demanddraft')}>Upload</button>
				</div>

				</div>
				</div>
			</div>
		);
	}
}

export default Step5;