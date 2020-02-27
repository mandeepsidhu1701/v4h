import React, {Component} from 'react';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import SignInForm from '../forms/SignInForm';
import {SIGN_IN, IS_LOGGED_IN} from '../sign-in-constant';
import {containerStyles} from './SignInStyles';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: false,
    status: SIGN_IN
  };

  componentDidMount() {
    // double check with server for existing logged-in user.
    if (this.props.user == null) {
      //TODO what to do if user is already logged in?
      //TODO check user is logged in
      //TODO if so, close the modal and redirect to home.
    }
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = (event) => {
    const {target} = event;
    const {type, checked, value, name} = target;
    if (type === 'checkbox') {
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
    const signInForm = (
      <SignInForm
        switchComponent={this.switchComponent}
        handleFormInput={this.handleFormInput}
        serverError={this.props.serverError}
        handleSignIn={this.props.handleSignIn}
        handleSignOut={this.props.handleSignOut}
        inputs={this.state}
      />
    );

    switch (this.state.status) {
      case SIGN_IN:
        return signInForm;
      case IS_LOGGED_IN:
        this.props.handleCloseForm();
        return <Redirect to="/" />;
      default:
        return signInForm;
    }
  };

  switchComponent = (status) => {
    this.setState({status});
  };

  render() {
    const {classes} = this.props;
    return (
      <section className={classes.loginCard}>
        <div className={classes.triangle} />
        <div className={classes.cardBorderBottom} />
        <div className={classes.cardBorderTopA} />
        <div className={classes.cardBorderTopB} />
        <div className={classes.cardBorderLeft} />
        <div className={classes.cardBorderRight} />
        {this.AuthComponent()}
      </section>
    );
  }
}

SignIn.propTypes = {
  user: PropTypes.object,
  serverError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  processingRequest: PropTypes.bool,
  handleSignIn: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  handleCheckUserIsLoggedIn: PropTypes.func.isRequired,
  handleCloseForm: PropTypes.func.isRequired
};

export default withStyles(containerStyles)(SignIn);