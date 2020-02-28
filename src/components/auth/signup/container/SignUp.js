import React, {Component} from 'react';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import {withStyles, Grid} from '@material-ui/core';
import {SignUpForm, VerifyForm} from '../forms';
import SignUpSidebar from '../signUpSideBar/SignUpSidebar';
import {SIGN_UP, IS_VERIFIED, VERIFY} from '../sign-up-constant';
import {containerStyles} from './Styles';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    phone_number: '',
    code: '',
    donate: false,
    sanctuarySignUp: false,
    status: SIGN_UP,
    oneTimeVerifyNotice: false
  };

  componentDidMount() {
    // double check with server for existing logged-in user.
    if (this.props.user == null) {
      //TODO what to do if user already authenticated?
      //TODO for now, do nothing. Allow user to sign up. Can replace current active user at sign in.
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

  switchComponent = (status) => {
    this.setState({status});
  };

  handleVerifyNotice = (verify) => {
    if (verify) {
      this.setState({oneTimeVerifyNotice: true});
    } else {
      this.setState({oneTimeVerifyNotice: false});
    }
  };

  AuthComponent = () => {
    const signUpForm = (
      <SignUpForm
        switchComponent={this.switchComponent}
        handleFormInput={this.handleFormInput}
        handleSignUp={this.props.handleSignUp}
        inputs={this.state}
        serverError={this.props.serverError}
        handleVerifyNotice={this.handleVerifyNotice}
      />
    );

    switch (this.state.status) {
      case SIGN_UP:
        return signUpForm;
      case VERIFY:
        return (
          <VerifyForm
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            handleVerifySignUp={this.props.handleVerifySignUp}
            inputs={this.state}
            serverError={this.props.serverError}
            handleVerifyNotice={this.handleVerifyNotice}
          />
        );
      case IS_VERIFIED:
        this.props.handleCloseForm();
        return <Redirect to="/" />;
      default:
        return signUpForm;
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <section className={classes.signUpCard}>
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
            <div className={classes.cardDivider} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <SignUpSidebar />
          </Grid>
        </Grid>
      </section>
    );
  }
}

SignUp.propTypes = {
  user: PropTypes.object,
  serverError: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  processingRequest: PropTypes.bool,
  handleSignUp: PropTypes.func.isRequired,
  handleVerifySignUp: PropTypes.func.isRequired,
  handleCheckUserIsLoggedIn: PropTypes.func.isRequired,
  handleCloseForm: PropTypes.func.isRequired
};

export default withStyles(containerStyles)(SignUp);