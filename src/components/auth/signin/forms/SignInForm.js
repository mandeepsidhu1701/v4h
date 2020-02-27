import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {withStyles, FormGroup, InputLabel, TextField, Button, Checkbox, Grid} from '@material-ui/core';
import CheckboxOutlineCheckedIcon from '../../ui/CheckboxOutlineCheckedIcon';
import ErrorBar from '../../ui/ErrorBar';
import {
  IS_LOGGED_IN,
  SIGN_IN_EMAIL_LABEL,
  SIGN_IN_EMAIL_PLACEHOLDER,
  SIGN_IN_EMAIL_TITLE,
  SIGN_IN_PASSWORD_LABEL,
  SIGN_IN_PASSWORD_PLACEHOLDER,
  SIGN_IN_PASSWORD_TITLE
} from '../sign-in-constant';
import {formStyles} from './SignInFormStyles';

class SignInForm extends Component {
  handleSignIn = (event) => {
    event.preventDefault();
    const {username, password} = this.props.inputs;
    const callback = () => {
      this.props.switchComponent(IS_LOGGED_IN);
    };

    //TODO find better way of handling sign in when user is already signed in.
    this.props.handleSignOut();
    this.props.handleSignIn(username, password, callback);
  };

  render() {
    const {classes} = this.props;

    let errorMessage;
    if (this.props.serverError) {
      const error = this.props.serverError;
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (error.code === 'UserNotFoundException') {
        errorMessage = 'Incorrect username or password.';
      } else if (error.message.includes('User is disabled')) {
        errorMessage = 'The user has been disabled. Please contact the administrator if you believe this is in error.';
      } else if (error.message === 'The username should either be a string or one of the sign in types') {
        errorMessage = 'Incorrect username or password.';
      } else {
        errorMessage = error.message;
      }
    } else if (this.props.inputs.error) {
      errorMessage = this.props.inputs.error;
    } else {
      errorMessage = null;
    }

    return (
      <form className={classes.loginForm} onSubmit={this.handleSignIn}>
        <Grid container>
          {errorMessage ? (
            <Grid item xs={12} sm={12}>
              <ErrorBar error={errorMessage} />
            </Grid>
          ) : null}
          <Grid item xs={12} sm={12} md={6}>
            <FormGroup className={classes.loginInputGroup}>
              <InputLabel className={classes.loginLabel}>{SIGN_IN_EMAIL_LABEL}</InputLabel>
              <TextField
                id="username"
                name="username"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.loginInput}
                value={this.props.username}
                onChange={this.props.handleFormInput}
                title={SIGN_IN_EMAIL_TITLE}
                placeholder={SIGN_IN_EMAIL_PLACEHOLDER}
                inputProps={{
                  className: classes.loginInputBase
                }}
                required
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FormGroup className={classes.loginInputGroup}>
              <InputLabel className={classes.loginLabel}>{SIGN_IN_PASSWORD_LABEL}</InputLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.loginInput}
                value={this.props.password}
                title={SIGN_IN_PASSWORD_TITLE}
                placeholder={SIGN_IN_PASSWORD_PLACEHOLDER}
                onChange={this.props.handleFormInput}
                required
                inputProps={{
                  className: classes.loginInputBase
                }}
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <FormGroup row className={classes.loginInputGroup}>
              <Checkbox
                color="default"
                classes={{root: classes.loginCheckbox, checked: classes.loginCheckboxChecked}}
                checkedIcon={<CheckboxOutlineCheckedIcon />}
                checked={this.props.rememberMe}
                onChange={this.props.handleFormInput}
                name="rememberme"
              />
              <InputLabel className={classes.loginLabel}>Remember Me</InputLabel>
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RouterLink to="#" className={classes.loginLink}>
              Forgot Password
            </RouterLink>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button type="submit" className={classes.loginButton}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(formStyles)(SignInForm);