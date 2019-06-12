import React, { Component } from "react";
import {BrowserRouter as Router, Route,Link,Redirect } from "react-router-dom";
import Register from "../../containers/auth/Register";
import Login from "../../containers/auth/Login";


class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: null
    }
    
  }
  
  
  transferToReg(){
    this.props.history.push("/register");
 }
 transferToLog(){
   this.props.history.push("/login");
 }
 
  render() {
    return (
        <Router>
        
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> if you are a returning user please login, or sign up to recieve extra options in the menu{" "}
              <span style={{ fontFamily: "monospace" }}>Thank You</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              enjoy!
            </p>
            <div className="row s6 ceneter-align">
            <br />
            <div className="col s6">
              <Link
                to="/Register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              onClick={this.transferToReg} 
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/Login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                onClick={this.transferToLog}
              >
                Log In
              </Link>
                 
              <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </div>
            </div>
            
          </div>
        </div>
      </div>
      </Router>
    );
  }
}
export default Landing;