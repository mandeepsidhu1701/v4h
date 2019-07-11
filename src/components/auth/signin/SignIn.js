import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import SignInForm from "./forms/SignInForm";
import { withStyles } from "@material-ui/core";
import { containerStyles } from './styles';

import { Auth } from "aws-amplify";

const SIGN_IN = "SignIn";
const IS_LOGGED_IN = "WelcomeUser";

class SignIn extends Component {

  state = {
    username: "",
    password: "",
    rememberme: false,
    status: SIGN_IN,
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

    const signInForm = 
      <SignInForm
        switchComponent={this.switchComponent}
        handleFormInput={this.handleFormInput}
        serverError={this.props.serverError}
        handleSignIn={this.props.handleSignIn}
        inputs={this.state}
      />

    switch (this.state.status) {
      case SIGN_IN:
        return (
          signInForm
        );
      case IS_LOGGED_IN:
        return (
          <Redirect to="/" />
        );
      default:
        return (
          signInForm
        );
    };
  };

  switchComponent = status => {
    this.setState({ status });
  };
  render() {

    const {classes} = this.props;
    return ( 
      <section className={classes.loginBase} >
        <div className={classes.loginCard}>
          <div className={classes.triangle} />
          <div className={classes.cardBorderBottom} />
          <div className={classes.cardBorderTopA} />
          <div className={classes.cardBorderTopB} />
          <div className={classes.cardBorderLeft} />
          <div className={classes.cardBorderRight} />
          {this.AuthComponent()}
        </div>
      </section>
    );
  }
}

SignIn.propTypes = {
  user: PropTypes.object,
  serverError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  processingRequest: PropTypes.bool,
  handleSignIn: PropTypes.func.isRequired,
}

export { IS_LOGGED_IN };

export default withStyles(containerStyles)(SignIn);