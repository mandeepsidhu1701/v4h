import React, { Component } from "react";
import { withRouter } from 'react-router';
import SignUpForm from "./forms/SignUpForm";
import VerifyForm from "./forms/VerifyForm";

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
    if(this.state.status === IS_VERIFIED) {
      this.props.history.push("/protoauth/signin");
    }
  };
  render() {
    console.log(this.state)
    return ( 
      <section>
        {this.AuthComponent()}
      </section>
    );
  }
}

export { VERIFY, SIGN_UP, IS_VERIFIED };

export default withRouter(SignUp);