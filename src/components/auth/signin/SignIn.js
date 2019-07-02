import React, { Component } from "react";

import SignInForm from "./forms/SignInForm";

import { Auth } from "aws-amplify";

import './SignIn.css';

const SIGN_IN = "SignIn";
const IS_LOGGED_IN = "WelcomeUser";


class SignIn extends Component {

  state = {
    loginname: "",
    password: "",
    rememberme: false,
    user: null, // will contain our user data object when signed in
    status: SIGN_IN
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser({
      bypassCache: true // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(data => {
        let user = {username:data.username,...data.attributes}
        if(user.email_verified) {
          this.setState({user, status: IS_LOGGED_IN})
        }
      })
      .catch(err => console.log(err));
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
      <SignInForm
        switchComponent={this.switchComponent}
        handleFormInput={this.handleFormInput}
        inputs={this.state}
      />
    );
  };

  switchComponent = status => {
    this.setState({ status });
  };
  render() {
    return ( 
      <section className="sign-in-base sign-in-textbackground p-3">
        <div className="card sign-in-card">
          <div className="triangle" />
          <div className="card-border-bottom" />
          <div className="card-border-top-1" />
          <div className="card-border-top-2" />
          <div className="card-border-left" />
          <div className="card-border-right" />
          {this.AuthComponent()}
        </div>
      </section>
    );
  }
}

export { SIGN_IN, IS_LOGGED_IN };

export default SignIn;