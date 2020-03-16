import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {withStyles, Grid, FormGroup, InputLabel, Checkbox, TextField, Button} from '@material-ui/core';
import ErrorBar from '../../ui/ErrorBar';
import CheckboxOutlineCheckedIcon from '../../ui/CheckboxOutlineCheckedIcon';
import {
  VERIFY
} from '../sign-up-constant';
import {MIN_PASSWORD_LENGTH, PASSWORD_REGEX, PHONE_REGEX} from '../../formConstants';
import {signUpFormStyles} from './Styles';
import intl from 'react-intl-universal';
import * as messageKeys from '@/locales';

class SignUpForm extends Component {
  handleSignUp = (event) => {
    event.preventDefault();
    const {username, password, email, phone_number} = this.props.inputs;
    const callback = () => {
      this.props.switchComponent(VERIFY);
      this.props.handleVerifyNotice(true);
    };
    this.props.handleSignUp(username, password, email, phone_number, callback);
  };

  render() {
    let errorMessage;
    if (this.props.serverError) {
      const error = this.props.serverError;
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (
        error.code === 'InvalidPasswordException' ||
        error.message.includes("Value at 'password' failed to satisfy constraint")
      ) {
        errorMessage = intl.get(messageKeys.AUTH_SIGN_UP_FORM_ERROR_INVALID_PASSWORD, {MIN_PASSWORD_LENGTH});
      } else if (error.message.includes('Invalid phone number format')) {
        errorMessage = intl.get(messageKeys.AUTH_SIGN_UP_FORM_ERROR_INVALID_PHONE_NUMBER);
      } else if (error.message.includes('Invalid email address format')) {
        errorMessage = intl.get(messageKeys.AUTH_SIGN_UP_FORM_ERROR_INVALID_EMAIL_ADDRESS);
      } else {
        errorMessage = error.message;
      }
    } else if (this.props.inputs.error) {
      errorMessage = this.props.inputs.error;
    } else {
      errorMessage = null;
    }

    const {classes} = this.props;

    return (
      <form className={classes.signUpForm} onSubmit={this.handleSignUp}>
        <Grid container>
          {errorMessage ? (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ErrorBar error={errorMessage} />
            </Grid>
          ) : null}

          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_NAME_LABEL)}</InputLabel>
                <TextField
                  id="username"
                  name="username"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.username}
                  onChange={this.props.handleFormInput}
                  title={intl.get(messageKeys.AUTH_SIGN_UP_FORM_NAME_TITLE)}
                  placeholder={intl.get(messageKeys.AUTH_SIGN_UP_FORM_NAME_PLACEHOLDER)}
                  inputProps={{
                    className: classes.inputBase
                  }}
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_PHONE_LABEL)}</InputLabel>
                <TextField
                  id="phone"
                  name="phone_number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.phone_number}
                  onChange={this.props.handleFormInput}
                  title={intl.get(messageKeys.AUTH_SIGN_UP_FORM_PHONE_TITLE)}
                  placeholder={intl.get(messageKeys.AUTH_SIGN_UP_FORM_PHONE_PLACEHOLDER)}
                  inputProps={{
                    className: classes.inputBase,
                    type: 'tel',
                    pattern: PHONE_REGEX
                  }}
                  required
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_EMAIL_LABEL)}</InputLabel>
                <TextField
                  id="email"
                  name="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.email}
                  onChange={this.props.handleFormInput}
                  title={intl.get(messageKeys.AUTH_SIGN_UP_FORM_EMAIL_TITLE)}
                  placeholder={intl.get(messageKeys.AUTH_SIGN_UP_FORM_EMAIL_PLACEHOLDER)}
                  inputProps={{
                    className: classes.inputBase,
                    type: 'email'
                  }}
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_PASSWORD_LABEL)}</InputLabel>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.password}
                  onChange={this.props.handleFormInput}
                  title={intl.get(messageKeys.AUTH_SIGN_UP_FORM_PASSWORD_TITLE)}
                  placeholder={intl.get(messageKeys.AUTH_SIGN_UP_FORM_PASSWORD_PLACEHOLDER)}
                  inputProps={{
                    className: classes.inputBase,
                    minLength: MIN_PASSWORD_LENGTH,
                    pattern: PASSWORD_REGEX
                  }}
                  required
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <RouterLink
              to="#"
              onClick={() => {
                this.props.handleVerifyNotice(false);
                this.props.switchComponent(VERIFY);
              }}
              className={classes.signUpLink}
            >
              {intl.get(messageKeys.AUTH_VERIFY_EXISTING_ACCOUNT)}
            </RouterLink>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <section>
              <p className={classes.signUpTextHeading}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_TEXT_HEADING)}</p>
              <p className={`${classes.signUpText} ${classes.textJustify}`}>
                {intl.get(messageKeys.AUTH_SIGN_UP_FORM_TEXT_CONTENT)}
              </p>
            </section>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FormGroup row className={classes.checkboxInputGroup}>
              <Checkbox
                color="default"
                id="donate-igen"
                classes={{root: classes.checkbox, checked: classes.checkboxChecked}}
                checkedIcon={<CheckboxOutlineCheckedIcon />}
                checked={this.props.donate}
                onChange={this.props.handleFormInput}
                name="donate"
              />
              <InputLabel className={classes.checkBoxLabel}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_DONATE_BOX)}</InputLabel>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FormGroup row className={classes.checkboxInputGroup}>
              <Checkbox
                color="default"
                id="sanctuary-sign-up"
                classes={{root: classes.checkbox, checked: classes.checkboxChecked}}
                checkedIcon={<CheckboxOutlineCheckedIcon />}
                checked={this.props.sanctuarySignUp}
                onChange={this.props.handleFormInput}
                name="sanctuarySignUp"
              />
              <InputLabel className={classes.checkBoxLabel}>{intl.get(messageKeys.AUTH_SIGN_UP_FORM_PERMISSION_BOX)}</InputLabel>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <section>
              <p className={`${classes.signUpText} mt-3 mb-5`}>
                {intl.getHTML(messageKeys.AUTH_SIGN_UP_FORM_TEXT_PRIVACY)}
              </p>
            </section>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Button type="submit" className={classes.submitButton}>
              {intl.get(messageKeys.AUTH_SIGN_UP_FORM_BUTTON)}
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(signUpFormStyles)(SignUpForm);
