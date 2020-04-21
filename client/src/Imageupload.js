import React, { Component } from 'react'
import axios from 'axios'
import ImageUploader from 'react-images-upload';
import { response } from 'express';

export default class Imageupload extends Component {
    
    constructor(){
        super();
        this.state = {
            picture:null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }



    onSubmit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('myImage', this.state.picture);

      axios.post('/api/application/imageupload', formData)
         .then(response=>{
          alert('file successfully uploaded')
         })
         .catch((err =>{
           console.log(err);
         })
    }

    onChange(e) {
      this.setState({file:e.target.files[0]});
  }
    // componentDidMount(){
    //     axios.get('/api/application/images')
    //       .then(res =>{
    //           const Image = res.data;
    //           this.setState({ Images: Image });
    //       })
    // }

    // uploadImage = (e) =>{

    //     let imageFormObj = new FormData();

    //     imageFormObj.append("imageName", "multer-image-" + Date.now());
    //     imageFormObj.append("imageData", e.target.files[0]);
  
    //     // stores a readable instance of 
    //     // the image being uploaded using multer
    //     this.setState({
    //       multerImage: URL.createObjectURL(e.target.files[0])
    //     });
  
    //     axios.post(`/api/application/uploadmulter`, imageFormObj)
    //       .then((data) => {
    //          console.log(data) 
    //         if (data.data.success) {
    //           alert("Image has been successfully uploaded using multer");
              
    //         }
    //       })
    //       .catch((err) => {
    //         alert("Error while uploading image using multer");
           
    //       });
    // }
    render(){
      console.log(this.state.Images);
    return(
        <div>
        {/* {this.state.Images === null &&
              <p>Loading...</p>
        }
        {this.state.Images !== null && */}
            <div>
            <img 
            src={this.state.Images}
            alt="Downloaded Image"
            />    
            <div>Multer Image</div>
            <p >Upload Image to a node server, connected to mongodb</p>
            <input  type="file"  onChange={(e) => this.uploadImage(e)} />
            <img src={this.state.multerImage} alt='upload-image' />
            </div>
        
        </div>
        )
    }
   
}
