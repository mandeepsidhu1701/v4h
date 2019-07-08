import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router';
import SignUpForm from "./forms/SignUpForm";
import VerifyForm from "./forms/VerifyForm";
import SignUpSidebar from "../ui/SignUpSidebar";

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
    donate: false,
    sanctuarySignUp: false,
    user: null, // will contain our user data object when signed in
    status: SIGN_UP,
    serverError: null
  }

  componentDidMount() {
    // double check with server for existing logged-in user.
    Auth.currentAuthenticatedUser({
      // bypassCache: false, check against local cache.
      // bypassCache: true, force request to server for check. guarantees accuracy.
      bypassCache: true 
    })
      .then(user => {
        console.log("currentAuthenticatedUser returned:", user);
        if(user.email_verified) {
          // TODO record user into global state

          this.setState({status: IS_VERIFIED})
        } 
      })
      .catch(err => {
        // ignore error, as there should not be a logged in user, if signing up / in.
      });
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = event => {
    const {target} = event;
    const {type, checked, value, name} = target;
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

  handleErrors = (error) => {
    this.setState({serverError: error})
  }

  clearErrors = () => {
    this.setState({serverError: null})
  }

  AuthComponent = () => {
    switch (this.state.status) {
      case SIGN_UP:
        return (
          <SignUpForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleErrors={this.handleErrors}
            clearErrors={this.clearErrors}
            inputs={this.state}
          />
        );
      case VERIFY:
        return (
          <VerifyForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleErrors={this.handleErrors}
            clearErrors={this.clearErrors}
            inputs={this.state}
          />
        );
      case IS_VERIFIED:
        // navigate to sign in view, as user now exists but has not signed in.
        return <Redirect to="/auth/sign-in" />
      default:
        return (
          <SignUpForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleErrors={this.handleErrors}
            clearErrors={this.clearErrors}
            inputs={this.state}
          />
        );
    }
  };
  switchComponent = status => {
    this.setState({ status });
  };

  render() {
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
              <div className="col-sm-12 col-md-6 col-lg-7">
                {this.AuthComponent()}
              </div>
              <div className="col-sm-12 col-md-1 col-lg-1">
                <div className="card-divider"></div>
              </div>
              <div className="col-sm-12 col-md-5 col-lg-4">
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