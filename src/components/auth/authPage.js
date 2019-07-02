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
          <span className="mr-4"><button type="button" onClick={() => this.showModal(LOGIN)}>Login Modal</button></span>
          <span className="mr-4"><button type="button" onClick={() => this.showModal(SIGNUP)}>Signup Modal</button></span>
          <span className="mr-4">Modal To Show: {modalShown}</span>

        <div>
          {modalShown === LOGIN ? <SignInModal /> : <SignUpModal /> }
        </div>
  
      </section>
    );
  }
}

export default withRouter(AuthPage);