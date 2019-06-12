import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Switch,Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "./about";
import coaches from "./coaches";
import calendar from "./calendar";
import scores from "./scores";
import Landing from "../authcomponents/layout/Landing";
import photos from "./photos";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import store from "../store";
import { logoutUser } from "../actions/authActions";
import {isLoggedin} from "../actions/authActions";
import {getUser} from "../actions/authActions";
import Carousel from "react-bootstrap/Carousel";
import Instagram from "../components/Instagram";
import {carousel} from "../components/Carousel";
import { connect } from "react-redux";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from "cloudinary-core"; 
import CarouselItem from "react-bootstrap/CarouselItem";
import photo1 from "./mainPhotos/photo1.jpg";
import photo2 from "./mainPhotos/photo2.jpg";
import photo3 from "./mainPhotos/photo3.PNG";
import photo4 from "./mainPhotos/photo4.jpg";
import photo5 from "./mainPhotos/photo5.jpg";
import "./top-level.css";

class Dashboard extends Component{
constructor(props) {
    super(props)
    this.state = {
      images: null
    }
    
  }

  

 
  /*componentDidMount() {
    // #1. First of all you have to fetch the images.
    fetch('https://www.dropbox.com/home/mainPhotos')
      .then(images => this.setState({ images })) // #2. After that you have to keep the images in the component's state.
  }
  */
 onLogoutClick =()=>{
  this.props.logoutUser();
  this.props.history.push("/");
}

  render() {
    var cl = new cloudinary.Cloudinary({cloud_name: "chsrugby", secure: true});
    
    

    return (
      <Provider store={store}>
      <Router> 
        <div className="container-fluid">
          <h2>CHS Rugby</h2>
        </div>
        <div id="navigation">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-row">

        <Link to="/Dashboard" className="navbar-brand">Dashboard</Link>
        <div className="navbar-collapse collapse">
              <ul className="navbar-nav mr-auto nav-justified">
              <li className="navbar-item">
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/coaches" className="nav-link">Coaches Bio's</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/calendar" className="nav-link">Calendar</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/scores" className="nav-link">Scores</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Summer/Fall 7's</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Spring 15's</Link>
                </li>
                
                <li className="navbar-item" id="don_lock">
                  <Link to="/" className="nav-link"
                  >Donations</Link>
                </li>
                <li className="navbar-item" id="pho_lock">
                  <Link to="/photos" className="nav-link">Photos</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="navbar-brand">Contact Info</Link>
             <div id="login/logout"> 
    <button onClick={this.onLogoutClick} >Logout</button>
            </div>
            
           
        </nav>
       

    </div>
        <Route path="/about" component={about} />
        <Route path="/coaches" component={coaches} />
        <Route path="/calendar" component={calendar} />
        <Route path="/scores" component={scores}/>
        <Route path="/Landing" component={Landing}/>
        <Route path="/photos" component={photos}/>
      </Router>
      </Provider>  
    );
    
  }

}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);