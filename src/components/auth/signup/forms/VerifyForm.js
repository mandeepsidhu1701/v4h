import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { IS_VERIFIED } from '../SignUp';

import ErrorBar from '../../ui/ErrorBar';

class VerifyForm extends Component {
  handleVerification = event => {
    event.preventDefault();
    const { username, code } = this.props.inputs;
    Auth.confirmSignUp(username, code)
      .then(() => {
          this.props.clearErrors();
          this.props.switchComponent(IS_VERIFIED);
        }
      )
      .catch(err => {
          console.log(err);
          this.props.handleErrors(err);
        }
      );
  };

  render() {
    let errorMessage;
    if (this.props.inputs.serverError !== null) {
      const error = this.props.inputs.serverError;
      if(error.code === "InvalidPasswordException" || error.message.includes(
        "Value at 'password' failed to satisfy constraint"
      )) {
        errorMessage = "Password must have at least {MIN_PASSWORDLENGTH} characters, and be made of lower case, upper case, special chars and numerals."
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
    else if (this.props.inputs.error !== null) {
      errorMessage = this.props.inputs.error
    } else {
      errorMessage = null;
    }

    return (
      <form className="sign-up-form">
        <div className="container">
          <div className="row">
          <ErrorBar error={errorMessage} />
            <div className="col-md-12">
              <p className="sign-up-text text-medium mt-3 mb-5">An verification code has been sent to the email you provided. Please enter the code below.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <label className="sign-up-label" htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={this.props.inputs.username}
                placeholder="Username"
                onChange={this.props.handleFormInput}
                className="form-control sign-up-input"
                required
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <label className="sign-up-label" htmlFor="verify-code">Verification Code</label>
              <input
                type="text"
                id="verify-code"
                name="code"
                value={this.props.code}
                placeholder="Verification Code"
                onChange={this.props.handleFormInput}
                className="form-control sign-up-input"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <section>
                <p className="sign-up-text-heading">become a vfh global citizen</p>
                <p className="sign-up-text text-small text-justify mb-5">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <p className="sign-up-text text-small text-justify mb-5">
                <strong>Data Privacy Statement:</strong> In being a part of HCN your data is kept private and confidential, bring used only for the purpose you signed up for.
                </p>
                </section>
            

              <input
                type="submit"
                value="SUBMIT VERIFICATION"
                onClick={this.handleVerification}
                className="btn sign-up-button"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default VerifyForm;