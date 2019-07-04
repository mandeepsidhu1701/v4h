import React, { Component } from "react";
import { withRouter } from 'react-router';
import VerifyForm from "./signup/forms/VerifyForm";
import SignUpSidebar from "./signup/SignUpSidebar";

import './signup/SignUp.css';


/* WARNING #DEVELOPMENT remove this component once The Verify Auth Form is complete */

class AuthPageVerifyForm extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    phone_number: "",
    code: "",
    donate: false,
    sanctuarySignUp: false,
    user: null, // will contain our user data object when signed in
    status: null
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = event => {
    const {target} = event;
    const {type, checked, value, name} = target;
    console.log(type, name, value, checked);
    if (type === "checkbox") {
      this.setState({
        [name]: checked
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  AuthComponent = () => {
    return (
      <VerifyForm
        switchComponent={() => {}}
        handleFormInput={this.handleFormInput}
        inputs={this.state}
      />
    );
  };

  render() {
    console.log(this.state)
    return ( 
      <section className="sign-up-base sign-up-textbackground p-3">
        <div className="card sign-up-card">
          <div className="triangle" />
          <div className="card-border-bottom" />
          <div className="card-border-top-1" />
          <div className="card-border-top-2" />
          <div className="card-border-left" />
          <div className="card-border-right" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-7">
                {this.AuthComponent()}
              </div>
              <div className="col-sm-12 col-md-1">
                <div className="card-divider-vertical"></div>
              </div>
              <div className="col-sm-12 col-md-4">
                <SignUpSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(AuthPageVerifyForm);