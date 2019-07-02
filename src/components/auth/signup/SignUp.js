import React, { Component } from "react";
import { withRouter } from 'react-router';
import SignUpForm from "./forms/SignUpForm";
import VerifyForm from "./forms/VerifyForm";
import SignUpSidebar from "./SignUpSidebar";

import { Auth } from "aws-amplify";

import './SignUp.css';


const SIGN_UP = "SignUp";
const VERIFY = "Verify";
const IS_VERIFIED = "Verified";


class SignUp extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    phone_number: "",
    code: "",
    user: null, // will contain our user data object when signed in
    status: SIGN_UP
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser({
      // bypassCache: false, check against local cache.
      // bypassCache: true, force request to server for check. guarantees accuracy.
      bypassCache: true 
    })
      .then(data => {
        let user = {username:data.username,...data.attributes};
        console.log('currentAuthenticatedUser:', user);
        if(user.email_verified) {
          // TODO: how to verify email and what to do if not / if is
          // change location href???
        }
      })
      .catch(err => console.log(err));
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  AuthComponent = () => {
    switch (this.state.status) {
      case SIGN_UP:
        return (
          <SignUpForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
      case VERIFY:
        return (
          <VerifyForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
      default:
        return (
          <SignUpForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
    }
  };
  switchComponent = status => {
    this.setState({ status });
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
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-8">
                {this.AuthComponent()}
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

export { VERIFY, SIGN_UP, IS_VERIFIED };

export default withRouter(SignUp);