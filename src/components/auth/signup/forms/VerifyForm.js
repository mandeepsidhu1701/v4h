import React, { Component } from "react";
import { withStyles, Grid, FormGroup, InputLabel, TextField, Button } from "@material-ui/core";

import { IS_VERIFIED } from '../SignUp';

import ErrorBar from '../../ui/ErrorBar';

import { verifyFormStyles } from '../styles';

class VerifyForm extends Component {

  handleVerification = event => {
    event.preventDefault();
    this.props.handleVerifyNotice(false);
    const { username, code } = this.props.inputs;
    const callback = () => {
      this.props.switchComponent(IS_VERIFIED)
    };
    this.props.handleVerifySignUp(username, code, callback);
  };

  render() {
    let errorMessage;
    if (this.props.serverError) {
      const error = this.props.serverError;
      console.log(error)
      if (typeof error === 'string') {
        errorMessage = error;
      }
      else if (error.code === "CodeMismatchException") {
        errorMessage = "The validation code provided was not correct. Please enter the correct code and try again";
      }
      else if (error.code === "LimitExceededException") {
        errorMessage = "Verification attempt limit exceeded. Please wait a few minutes and try again";
      }
      else if (error.message.includes("Current status is CONFIRMED")) {
        errorMessage = "This user has already been confirmed. Have you entered the correct username?";
      }
      else if (error.code === "UserNotFoundException" || error.message.includes("User is disabled")) {
        errorMessage = "This user was not recognized. Have you entered the correct username?";
      }
      else {
        errorMessage = error.message;
      }
    }
    else if (this.props.inputs.error) {
      errorMessage = this.props.inputs.error
      console.log(errorMessage);
    } else {
      errorMessage = null;
    }

    const {classes} = this.props;

    return (
      <form 
        className={classes.signUpForm}
        onSubmit={this.handleVerification}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
          { 
            errorMessage ? 
            <ErrorBar error={errorMessage} /> :
            <p className={`${classes.signUpText} ${classes.textAlert}`}>
              An verification code has been sent to the email you provided. Please enter the code below.
            </p>
          }
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>Name</InputLabel>
                <TextField
                  id="username"
                  name="username"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.inputs.username}
                  onChange={this.props.handleFormInput}
                  title="This username must match the one you signed up with"
                  placeholder="John Doe"
                  inputProps={{
                    className: classes.inputBase
                  }}
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup className={classes.inputGroup}>
                <InputLabel className={classes.label}>Verification Code</InputLabel>
                <TextField
                  id="verify-code"
                  name="code"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.inputs.code}
                  onChange={this.props.handleFormInput}
                  title="The Verification code in the email you received"
                  placeholder="John Doe"
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
              <p className={classes.signUpTextHeading}>
                become a vfh global citizen
              </p>

              <p className={`${classes.signUpText} ${classes.textJustify}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>

              <p className={`${classes.signUpText} ${classes.textJustify}`}>
                <strong>Data Privacy Statement:</strong> In being a part of HCN your data is kept private and confidential, bring used only for the purpose you signed up for.
              </p>
            </section>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              type="submit"
              className={classes.submitButton}
            >
              VERIFY
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(verifyFormStyles)(VerifyForm);