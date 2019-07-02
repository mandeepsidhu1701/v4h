import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { IS_VERIFIED } from '../SignUp';

class VerifyForm extends Component {
  handleVerification = event => {
    event.preventDefault();
    const { username, code } = this.props.inputs;
    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    })
      .then(data => console.log(data))
      .then(()=>this.props.switchComponent(IS_VERIFIED))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="authentication__form">
        <input
          type="text"
          name="username"
          value={this.props.username}
          placeholder="Username"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="text"
          name="code"
          value={this.props.code}
          placeholder="Verification Code"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="submit"
          value="SUBMIT VERIFICATION"
          onClick={this.handleVerification}
          className="authentication__button"
        />
      </form>
    );
  }
}

export default VerifyForm;