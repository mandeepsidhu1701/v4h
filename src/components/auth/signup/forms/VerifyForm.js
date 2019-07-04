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
      <form className="auth-form">
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

        
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <section>

                <p className="sign-up-citizen-heading">Become VFH global citizen</p>
                <p className="sign-up-citizen-notice">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <div className="sign-up-checkbox-container">
                  <input type="checkbox" id="donate-igen" />
                  <label className="sign-up-label text-bold-md" for="donate-igen">Donate $1.00 to the Inter-Generational Equity Fund</label>
                </div>

                <div className="sign-up-checkbox-container">
                  <input type="checkbox" id="sanctuary-sign-up" />
                  <label className="sign-up-label text-bold-md" for="sanctuary-sign-up">Permission to please also sign me up to the Sanctuary Apps and Services</label>
                </div>

                <p className="sign-up-citizen-notice">
                  Data Privacy Statement: In being a part of HCN your data is kept private and confidential, bring used only for the purpose you signed up for.
                </p>
                </section>
            </div>
          </div>
        </div>

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