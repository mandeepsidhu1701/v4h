import React, { Component } from "react";
import { withStyles, Grid, FormGroup, InputLabel, Checkbox, TextField, Button } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { VERIFY } from '../SignUp';
import { MIN_PASSWORDLENGTH, PASSWORD_REGEX, PHONE_REGEX } from '../../formConstants';

import ErrorBar from '../../ui/ErrorBar';

import CheckboxOutlineCheckedIcon from '../../ui/CheckboxOutlineCheckedIcon';

import { signUpFormStyles } from '../styles';

class SignUpForm extends Component {
  handleSignUp = event => {
    event.preventDefault();
    const { username, email, password, phone_number } = this.props.inputs;
    Auth.signUp({
      username,
      password,
      attributes: {
        email, 
        phone_number 
      },
      validationData: [] 
    })
      .then(data => {
          // returns object containing cognito user, and if user is verified.
        }
      ) 
      .then(() => {
          this.props.clearErrors();
          this.props.switchComponent(VERIFY);
          }
        )
      .catch(err => {
          this.props.handleErrors(err);
        }
      )
  };

  render() {
    let errorMessage;
    if (this.props.inputs.serverError) {
      const error = this.props.inputs.serverError;
      if(error.code === "InvalidPasswordException" || error.message.includes(
        "Value at 'password' failed to satisfy constraint"
      )) {
        errorMessage = `Password must have at least ${MIN_PASSWORDLENGTH} characters, and be made of lower case, upper case, special chars and numerals.`;
      }
      else if (error.message.includes("Invalid phone number format")) {
        errorMessage = "Contact Number has an invalid format.";
      }
      else if (error.message.includes("Invalid email address format")) {
        errorMessage = "Email address has an invalid format.";
      }
      else {
        errorMessage = error.message;
      }
    }
    else if (this.props.inputs.error) {
      errorMessage = this.props.inputs.error
    } else {
      errorMessage = null;
    }

    const { classes } = this.props;
    
    return (
      <form className={classes.signUpForm}>
        <Grid container>
          
          { 
            errorMessage ? 
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ErrorBar error={errorMessage} />
            </Grid> :
            null
          }
            
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup column className={classes.inputGroup}>
                <InputLabel className={classes.label}>Name</InputLabel>
                <TextField
                  id="username"
                  name="username"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.username}
                  onChange={this.props.handleFormInput}
                  title="This username will be permanent"
                  placeholder="John Doe"
                  inputProps={{
                    className: classes.inputBase
                  }}
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup column className={classes.inputGroup}>
                <InputLabel className={classes.label}>Phone</InputLabel>
                <TextField
                  id="phone"
                  name="phone_number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.phone_number}
                  onChange={this.props.handleFormInput}
                  title="For example: +6421555217 or +642571755555. Used for verification and account recovery"
                  placeholder="+642255005500"
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
              <FormGroup column className={classes.inputGroup}>
                <InputLabel className={classes.label}>E-mail</InputLabel>
                <TextField
                  id="email"
                  name="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.email}
                  onChange={this.props.handleFormInput}
                  title="Enter a valid email. This email will be used for account verification and recovery"
                  placeholder="error@mail.com"
                  inputProps={{
                    className: classes.inputBase,
                    type: 'email'
                  }}
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormGroup column className={classes.inputGroup}>
                <InputLabel className={classes.label}>Password</InputLabel>
                <TextField
                  id="password"
                  name="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  className={classes.input}
                  value={this.props.password}
                  onChange={this.props.handleFormInput}
                  title="Must have lower case, upper case, numbers and special chars, and a minimum length of 12"
                  inputProps={{
                    className: classes.inputBase,
                    type: 'password',
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
            <section>
              <p className={classes.signUpTextHeading}>become a vfh global citizen</p>
              <p className={`${classes.signUpText} ${classes.textJustify}`}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
              </p>
            </section>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FormGroup row className={classes.inputGroup}>
              <Checkbox
                color="default"
                id="donate-igen"
                classes={{root: classes.checkbox, checked: classes.checkboxChecked}}
                checkedIcon={<CheckboxOutlineCheckedIcon />}
                checked={this.props.donate}
                onChange={this.props.handleFormInput}
                name="donate"
              />
              <InputLabel className={classes.label}>
                Donate $1.00 to the Inter-Generational Equity Fund
              </InputLabel>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FormGroup row className={classes.inputGroup}>
              <Checkbox
                color="default"
                id="sanctuary-sign-up"
                classes={{root: classes.checkbox, checked: classes.checkboxChecked}}
                checkedIcon={<CheckboxOutlineCheckedIcon />}
                checked={this.props.sanctuarySignUp}
                onChange={this.props.handleFormInput}
                name="sanctuarySignUp"
              />
              <InputLabel className={classes.label}>
                Permission to please also sign me up to the Sanctuary Apps and Services
              </InputLabel>
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <section>
              <p className={`${classes.signUpText} mt-3 mb-5`}>
                <strong>Data Privacy Statement</strong>: In being a part of HCN your data is kept private and confidential, being used only for the purpose you signed up for.
              </p>
            </section>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Button
              onClick={this.handleSignUp}
              className={classes.submitButton}
            >
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(signUpFormStyles)(SignUpForm);