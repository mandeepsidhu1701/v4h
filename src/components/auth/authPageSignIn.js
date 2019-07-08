import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import SignInModal from './signin';

class AuthSignInPage extends Component {
  render() {
    return (
      <div>
        <SignInModal />
      </div>
    );
  }
}

export default withRouter(AuthSignInPage);