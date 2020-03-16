import React, {Component} from 'react';
import {withStyles, Grid, FormGroup, InputLabel, TextField, Button} from '@material-ui/core';
import {
  IS_VERIFIED
} from '../sign-up-constant';
import ErrorBar from '../../ui/ErrorBar';
import {verifyFormStyles} from './Styles';
import intl from 'react-intl-universal';
import * as messageKeys from '@/locales';

class VerifyForm extends Component {
  handleVerification = (event) => {
    event.preventDefault();
    this.props.handleVerifyNotice(false);
    const {username, code} = this.props.inputs;
    const callback = () => {
      this.props.switchComponent(IS_VERIFIED);
    };
    this.props.handleVerifySignUp(username, code, callback);
  };

  render() {
    const {classes} = this.props;

    let errorMessage;
    if (this.props.serverError) {
      const error = this.props.serverError;
      console.log(error);
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (error.code === 'CodeMismatchException') {
        errorMessage = intl.get(messageKeys.AUTH_VERIFY_FORM_ERROR_CODE_MISMATCH);
      } else if (error.code === 'LimitExceededException') {
        errorMessage = intl.get(messageKeys.AUTH_VERIFY_FORM_ERROR_LIMIT_EXCEEDED);
      } else if (error.message.includes('Current status is CONFIRMED')) {
        errorMessage = intl.get(messageKeys.AUTH_VERIFY_FORM_ERROR_CONFIRMED);
      } else if (error.code === 'UserNotFoundException' || error.message.includes('User is disabled')) {
        errorMessage = intl.get(messageKeys.AUTH_VERIFY_FORM_ERROR_USER_NOT_FOUND);
      } else {
        errorMessage = error.message;
      }
    } else if (this.props.inputs.error) {
      errorMessage = this.props.inputs.error;
      console.log(errorMessage);
    } else {
      errorMessage = null;
    }

    return (
      <form className={classes.signUpForm} onSubmit={this.handleVerification}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {errorMessage ? (
              <ErrorBar error={errorMessage} />
            ) : (
              <p className={`${classes.signUpText} ${classes.textAlert}`}>{intl.get(messageKeys.AUTH_VERIFICATION_CODE_MESSAGE)}</p>
            )}
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>{intl.get(messageKeys.AUTH_VERIFY_FORM_NAME_LABEL)}</InputLabel>
                <TextField
                  id="username"
                  name="username"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.inputs.username}
                  onChange={this.props.handleFormInput}
                  title={intl.get(messageKeys.AUTH_VERIFY_FORM_NAME_TITLE)}
                  placeholder={intl.get(messageKeys.AUTH_VERIFY_FORM_NAME_PLACEHOLDER)}
                  inputProps={{
                    className: classes.inputBase
                  }}
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>{intl.get(messageKeys.AUTH_VERIFY_FORM_CODE_LABEL)}</InputLabel>
                <TextField
                  id="verify-code"
                  name="code"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.inputs.code}
                  onChange={this.props.handleFormInput}
                  title={intl.get(messageKeys.AUTH_VERIFY_FORM_CODE_TITLE)}
                  placeholder={intl.get(messageKeys.AUTH_VERIFY_FORM_CODE_PLACEHOLDER)}
                  inputProps={{
                    className: classes.inputBase
                  }}
                  required
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <section>
              <p className={classes.signUpTextHeading}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_TEXT_HEADING)}</p>
              <p className={`${classes.signUpText} ${classes.textJustify}`}>
                {intl.get(messageKeys.AUTH_SIGN_UP_FORM_TEXT_CONTENT)}
              </p>
              <p className={`${classes.signUpText} ${classes.textJustify}`}>
                {intl.getHTML(messageKeys.AUTH_SIGN_UP_FORM_TEXT_PRIVACY)}
              </p>
            </section>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button type="submit" className={classes.submitButton}>
              {intl.get(messageKeys.AUTH_VERIFY_FORM_BUTTON)}
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(verifyFormStyles)(VerifyForm);