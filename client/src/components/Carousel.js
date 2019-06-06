import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from "react-bootstrap/CarouselItem";

class carousel extends Component{
   constructor(){
       return(
            React.createElement("img")
       );
   }
    render(){
        return(
                <Carousel interval="3000" wrap="true">
                        
                        <Carousel.Item>
                            
                        </Carousel.Item>
                        }
                </Carousel>
        );
    }
}
export default Carousel;