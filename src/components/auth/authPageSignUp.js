import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import SignUpModal from './signup';

class AuthSignUpPage extends Component {
  render() {
    return (
      <div>
        <SignUpModal />
      </div>
    );
  }
}

export default withRouter(AuthSignUpPage);