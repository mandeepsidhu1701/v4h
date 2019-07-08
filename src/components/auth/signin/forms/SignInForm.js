import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import { IS_LOGGED_IN } from '../SignIn';
import { MIN_PASSWORDLENGTH, PASSWORD_REGEX } from '../../formConstants';

import CustomCheckBox from '../../ui/CheckBox';
import ErrorBar from '../../ui/ErrorBar';

class SignInForm extends Component {
  handleSignIn = event => {
    event.preventDefault();
    const { username, password } = this.props.inputs;
    Auth.signIn({ username, password })
      .then(user => {
        // TODO record user into global state

        console.log(user);
      })
      .then(() => {
        this.props.clearErrors();
        this.props.switchComponent(IS_LOGGED_IN);
      })
      .catch(err => {
        this.props.handleErrors(err);
      });
  };

  
  render() {

    let errorMessage;
    if (this.props.inputs.serverError !== null) {
      const error = this.props.inputs.serverError;
      if(error.code === "InvalidPasswordException" || error.message.includes(
        "Value at 'password' failed to satisfy constraint"
      )) {
        errorMessage = `Password must have at least ${MIN_PASSWORDLENGTH} characters, and be made of lower case, upper case, special chars and numerals.`;
      }
      else if (error.code === "UserNotFoundException") {
        errorMessage = "Incorrect username or password.";
      }
      else if (error.message === "The username should either be a string or one of the sign in types") {
        errorMessage = "Incorrect username or password.";
      }
      else {
        errorMessage = error.message;
      }
    }
    else if (this.props.inputs.error !== null) {
      errorMessage = this.props.inputs.error;
    } else {
      errorMessage = null;
    }

    return (
      <form className="login-form">
        <div className="container">
          <div className="row">
          <ErrorBar error={errorMessage} />
            <div className="col-sm-12 col-md-6">
              <label htmlFor="username" className="login-label">E-mail</label>
              <input 
                id="username" 
                type="text"
                name="username"
                title="Please enter your username here."
                value={this.props.username}
                placeholder="Enter Email"
                onChange={this.props.handleFormInput}
                className="form-control login-input"
                required
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="password" className="login-label">Password</label>
              <input 
                id="password" 
                type="password"
                name="password"
                value={this.props.password}
                placeholder="Password"
                minLength={MIN_PASSWORDLENGTH}
                pattern={PASSWORD_REGEX}
                title="must have lower case, upper case, numbers and special chars, and a minimum length of 12."
                onChange={this.props.handleFormInput}
                className="form-control login-input"
                required
                />
            </div>
          </div>

          <div className="row margin-divider-vertical">
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6">
              <CustomCheckBox 
                onChange={this.props.handleFormInput}
                id="remember-me" 
                name="rememberme" 
                checked={this.props.rememberme}
                variant="login-checkbox-label"
                label="Remember Me"
              />
              
            </div>
            <div className="col-sm-12 col-md-6">
              <RouterLink to="#" className="float-right login-link">Forgot Password</RouterLink>
            </div>
          </div>

          <div className="row margin-divider-vertical" />
        
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <input
                type="submit"
                value="LOGIN"
                onClick={this.handleSignIn}
                className="btn login-button"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignInForm;