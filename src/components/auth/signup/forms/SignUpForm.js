import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { VERIFY } from '../SignUp';

import CustomCheckBox from '../../ui/CheckBox';

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
      .then(data => console.log(data))
      .then(()=>this.props.switchComponent(VERIFY)) // switches Sign Up to Verification
      .catch(err => console.log(err))
  };

  render() {
    return (
      <form className="sign-up-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label className="sign-up-label" for="username">Name</label>
              <input
                id="username"
                type="text"
                name="username"
                title="This username will be permanent"
                value={this.props.username}
                placeholder="John Doe"
                onChange={this.props.handleFormInput}
                className="form-control sign-up-input"
                required
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="sign-up-label" for="username">Phone</label>
              <input
                type="tel"
                pattern="+[0-9]{2}[0-9]{2}[0-9]{4}[0-9]{4}"
                name="phone_number"
                value={this.props.phone_number}
                placeholder="+642255005500"
                title="For example: +6421555217 or +642571755555. Used for verification and account recovery"
                onChange={this.props.handleFormInput}
                className="form-control sign-up-input"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label className="sign-up-label" for="username">E-mail</label>
              <input
                type="email"
                name="email"
                value={this.props.email}
                placeholder="error@mail.com"
                onChange={this.props.handleFormInput}
                className="form-control sign-up-input"
                title="enter a valid email. This email will be used for account verification and recovery"
                required
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="sign-up-label" for="username">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={this.props.password}
                placeholder="Password"
                minlength="12"
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                title="must have lower case, upper case, numbers and special chars, and a minimum length of 12"
                onChange={this.props.handleFormInput}
                className="form-control sign-up-input"
                required
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <section>

                <p className="sign-up-text-heading">become a vfh global citizen</p>
                <p className="sign-up-text-small text-justify">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                </p>

                <CustomCheckBox 
                  id="donate-igen" 
                  name="donate" 
                  label="Donate $1.00 to the Inter-Generational Equity Fund"
                  onChange={this.props.handleFormInput}
                  variant="sign-up-label text-bold-md my-2"
                  checked={this.props.donate}
                />

                <CustomCheckBox 
                  id="sanctuary-sign-up" 
                  name="sanctuarySignUp" 
                  label="Permission to please also sign me up to the Sanctuary Apps and Services"
                  onChange={this.props.handleFormInput}
                  variant="sign-up-label text-bold-md my-2"
                  checked={this.props.sanctuarySignUp}
                />

                <p className="sign-up-text-small mt-3 mb-5">
                  <strong>Data Privacy Statement</strong>: In being a part of HCN your data is kept private and confidential, being used only for the purpose you signed up for.
                </p>

              </section>

              <input
                type="submit"
                value="SIGN UP"
                onClick={this.handleSignUp}
                className="btn sign-up-button"
              />

            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUpForm;