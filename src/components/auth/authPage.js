import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import SignUpModal from './signup';
import SignInModal from './signin';

const LOGIN = "login";
const SIGNUP = "signup";

class AuthPage extends Component {
  state = {
    modalShown: SIGNUP
  }

  showModal = (modalName) => {
    this.setState({modalShown: modalName})
  }

  render() {
    const {modalShown} = this.state;
    return (
      <section>
        <div>
          <p><button type="button" onClick={() => this.showModal(LOGIN)}>Login Modal</button></p>
          <p><button type="button" onClick={() => this.showModal(SIGNUP)}>Signup Modal</button></p>
          <p>Modal To Show: {modalShown}</p>
        </div>
        <br/>

        <div>
          {modalShown === LOGIN ? <SignInModal /> : <SignUpModal /> }
        </div>
  
      </section>
    );
  }
}

export default withRouter(AuthPage);