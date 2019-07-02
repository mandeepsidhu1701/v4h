import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import { IS_LOGGED_IN } from '../SignIn';

class SignInForm extends Component {
  handleSignIn = event => {
    event.preventDefault();
    const { loginname, password } = this.props.inputs;
    // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
    Auth.signIn({ loginname, password })
      .then(user => console.log(user))
      .then(() => this.props.switchComponent(IS_LOGGED_IN))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="login-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label for="loginname" className="login-label">E-mail</label>
              <input 
                id="loginname" 
                type="text"
                name="loginname"
                value={this.props.username}
                placeholder="Enter Email"
                onChange={this.props.handleFormInput}
                className="form-control login-input"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label for="password" className="login-label">Password</label>
              <input 
                id="password" 
                type="password"
                name="password"
                value={this.props.password}
                placeholder="Password"
                onChange={this.props.handleFormInput}
                className="form-control login-input"
                />
            </div>
          </div>

          <div className="row margin-divider-vertical">
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div 
                className="custom-control custom-checkbox login-checkbox-container"
              >
                <input 
                  type="checkbox" 
                  onChange={this.props.handleFormInput}
                  className="custom-control-input login-checkbox" 
                  id="remember-me" 
                  name="rememberme" 
                  checked={this.props.rememberme}
                />
                <label 
                  className="custom-control-label login-checkbox-label" 
                  for="remember-me"
                >
                  Remember Me
                </label>
              </div>
              
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