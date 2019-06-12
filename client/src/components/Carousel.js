import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from "react-bootstrap/CarouselItem";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

class carousel extends Component{
    constructor(props) {
        super(props)
         
        this.state = {
          images: null
        }
      }

      componentDidMount() {
        // #1. First of all you have to fetch the images.
        fetch('C:\Users\afoy9\CS401\CHSBoiseRugby\mainPhotos')
          .then(response => response.json()) // If it's a JSON response, you have to parse it firstly
          .then(images => this.setState({ images })) // #2. After that you have to keep the images in the component's state.
      }
   
    render(){
       
        
           
            
            return(  <Carousel interval="3000" wrap="true">{
               
                    
                })
            }
                        
                        
                
                </Carousel>
        );
    }
}
export default Carousel;