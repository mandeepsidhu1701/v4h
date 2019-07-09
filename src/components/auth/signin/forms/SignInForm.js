import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { withStyles, FormGroup, InputLabel, TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { IS_LOGGED_IN } from '../SignIn';
import { MIN_PASSWORDLENGTH, PASSWORD_REGEX } from '../../formConstants';
import { formStyles } from '../styles';

import CheckboxOutlineCheckedIcon from '../../ui/CheckboxOutlineCheckedIcon';

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

    const {classes} = this.props;

    let errorMessage;
    if (this.props.inputs.serverError) {
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
    else if (this.props.inputs.error) {
      errorMessage = this.props.inputs.error;
    } else {
      errorMessage = null;
    }

    console.log(errorMessage);

    return (
      <form className={classes.loginForm}>
        <Grid container>
          { 
            errorMessage ?
            <Grid item xs={12} sm={12}>
              <ErrorBar error={errorMessage} />
            </Grid> :
            null
          }
          <Grid item xs={12} sm={12} md={6}>
            <FormGroup column className={classes.loginInputGroup}>
              <InputLabel className={classes.loginLabel}>E-mail</InputLabel>
              <TextField 
                id="username"  
                name="username"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.loginInput}
                value={this.props.username}
                onChange={this.props.handleFormInput}
                title="Please enter your username here."
                placeholder="Enter Email"
                inputProps={{
                  className: classes.loginInputBase
                }}
                required
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FormGroup column className={classes.loginInputGroup}>
              <InputLabel className={classes.loginLabel}>Password</InputLabel>
              <TextField 
                id="password"  
                name="password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.loginInput}
                value={this.props.password}
                placeholder="Password"
                title="must have lower case, upper case, numbers and special chars, and a minimum length of 12."
                onChange={this.props.handleFormInput}
                required
                inputProps={{
                  className: classes.loginInputBase,
                  minLength: MIN_PASSWORDLENGTH,
                  pattern: PASSWORD_REGEX
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
                checked={this.props.rememberme}
                onChange={this.props.handleFormInput}
                name="rememberme"
              />
              <InputLabel className={classes.loginLabel}>Remember Me</InputLabel>
            </FormGroup>
            
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RouterLink to="#" className={classes.loginLink}>Forgot Password</RouterLink>
          </Grid>

      
          <Grid item xs={12} sm={12}>
            <Button
              onClick={this.handleSignIn}
              className={classes.loginButton}
            >
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(formStyles)(SignInForm);