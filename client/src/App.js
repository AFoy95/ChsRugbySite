import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "./top-level/about";
import coaches from "./top-level/coaches";
import calendar from "./top-level/calendar";
import scores from "./top-level/scores";
import Landing from "./authcomponents/layout/Landing";
import Register from "./containers/auth/Register";
import Login from "./containers/auth/Login";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import carousel from "./components/Carousel";
import Instagram from "./components/Instagram";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
      <Router> 
        <div className="container-fluid">
          <h2>CHS Rugby</h2>
        </div>
        <div id="navigation">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark flex-row">

        <Link to="/" className="navbar-brand">Home</Link>
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
                  disabled={false}
                  >Donations</Link>
                </li>
                <li className="navbar-item" id="pho_lock">
                  <Link to="/" className="nav-link disabled">Photos</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="navbar-brand">Contact Info</Link>
            <Link to="/Landing" className="navbar-brand">Sign up/Login</Link>
        </nav>
        </div>
        <div className="flex-row">
          <div className="flex-column" id="carousel">

          </div>
          <div className="flex-column" id="instagram">

          </div>

        </div>
        <Route path="/about" component={about} />
        <Route path="/coaches" component={coaches} />
        <Route path="/calendar" component={calendar} />
        <Route path="/scores" component={scores}/>
        <Route path="/Landing" component={Landing}/>
        <Route path="/Login" component={Login}/>
        <Route path ="/Register" component={Register}/>
      </Router>
      </Provider>  
      
    );
    
  }
}

export default App;