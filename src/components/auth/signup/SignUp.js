import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { withStyles, Grid } from '@material-ui/core';
import SignUpForm from "./forms/SignUpForm";
import VerifyForm from "./forms/VerifyForm";
import SignUpSidebar from "./ui/SignUpSidebar";
import { containerStyles } from './styles';

import { Auth } from "aws-amplify";

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
    status: SIGN_UP,
  }

  componentDidMount() {
    // double check with server for existing logged-in user.
    if (this.props.user == null) {
      //TODO: move checking current authenticated user to under Redux.
      Auth.currentAuthenticatedUser({
        // bypassCache: false, check against local cache.
        // bypassCache: true, force request to server for check. guarantees accuracy.
        bypassCache: true 
      })
        .then(user => {
          console.log("currentAuthenticatedUser returned:", user);
          if(user.email_verified) {
            // TODO record user into global state
          } 
        })
        .catch(err => {
          // ignore error, as there should not be a logged in user, if signing up / in.
        });
    }

    if(this.props.debugVerify) {
      this.setState({status: VERIFY});
    }
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

  AuthComponent = () => {

    const signUpForm = 
      <SignUpForm
        switchComponent={this.switchComponent}
        handleFormInput={this.handleFormInput}
        handleSignUp={this.props.handleSignUp}
        inputs={this.state}
        serverError={this.props.serverError}
      />

    switch (this.state.status) {
      case SIGN_UP:
        return (
          signUpForm
        );
      case VERIFY:
        return (
          <VerifyForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleVerifySignUp={this.props.handleVerifySignUp}
            inputs={this.state}
            serverError={this.props.serverError}
          />
        );
      case IS_VERIFIED:
        return <Redirect to="/auth/sign-in" />
      default:
        return (
          signUpForm
        );
    }
  };
  switchComponent = status => {
    this.setState({ status });
  };

  render() {
    const {classes} = this.props;
    return ( 
      <section className={classes.signUpBase}>
        <div className={classes.signUpCard}>
          <div className={classes.triangle} />
          <div className={classes.cardBorderBottom} />
          <div className={classes.cardBorderTopA} />
          <div className={classes.cardBorderTopB} />
          <div className={classes.cardBorderLeft} />
          <div className={classes.cardBorderRight} />
          <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={7}>
                {this.AuthComponent()}
              </Grid>
              <Grid item xs={12} sm={12} md={1} lg={1}>
                <div className={classes.cardDivider}></div>
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={4}>
                <SignUpSidebar />
              </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

SignUp.propTypes = {
  user: PropTypes.object,
  serverError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  processingRequest: PropTypes.bool,
  handleSignUp: PropTypes.func.isRequired,
  handleVerifySignUp: PropTypes.func.isRequired,
}

export { VERIFY, SIGN_UP, IS_VERIFIED };

export default withStyles(containerStyles)(SignUp);