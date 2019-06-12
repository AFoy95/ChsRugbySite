import React, { Component } from "react";
import uploadphoto from "../actions/authActions"
import { Buffer } from "buffer";
import PropTypes from "prop-types";
import "./upload.css";
class photos extends Component{
    constructor() {
        super();
        this.img = {
          data:Buffer,
          contentType:String
        };

      }

      photoSubmit = e =>{
          
          console.log(this.img);
         this.uploadphoto(this.img);
          
      }
    
    render(){
        return(
    
                    <div className="upload" id="upload">
                   <form action="/photos" encType="multipart/form-data">    
                 <input id="file" type="file" name="myImage" accept="image/PNG" value={this.img}/>
                       
                 <div>
                     
                 <button type="button" className="btn btn-large" onClick={this.photoSubmit()} >Upload</button>
                 </div>
                 </form>
                </div>
            
        );
    }
}
export default photos;