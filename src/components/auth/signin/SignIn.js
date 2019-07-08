import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router';
import SignInForm from "./forms/SignInForm";

import { Auth } from "aws-amplify";

import './SignIn.css';

const SIGN_IN = "SignIn";
const IS_LOGGED_IN = "WelcomeUser";


class SignIn extends Component {

  state = {
    username: "",
    password: "",
    rememberme: false,
    user: null, // will contain our user data object when signed in
    status: SIGN_IN,
    serverError: null
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser({
      bypassCache: true // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => {
        if(user.email_verified) {
          // TODO record user into global state

          console.log(user)

          // user shouldn't be allowed to log in while already authenticated
          this.setState({user, status: IS_LOGGED_IN})
        }
      })
      .catch(err => {
        if (err !== "not authenticated") {
          console.log(err);
        }
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
      case SIGN_IN:
        return (
          <SignInForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleErrors={this.handleErrors}
            clearErrors={this.clearErrors}
            inputs={this.state}
          />
        );
      case IS_LOGGED_IN:
        return (
          <Redirect to="/" />
        );
      default:
        return (
          <SignInForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleErrors={this.handleErrors}
            clearErrors={this.clearErrors}
            inputs={this.state}
          />
        );
    };
  };

  switchComponent = status => {
    this.setState({ status });
  };
  render() {
    return ( 
      <section className="login-base login-textbackground p-3">
        <div className="card login-card">
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

export { IS_LOGGED_IN };

export default withRouter(SignIn);