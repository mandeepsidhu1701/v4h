import { connect } from 'react-redux';
import { signIn, checkAuthenticateUser, signOut } from '../../../actions/auth';
import { withRouter } from 'react-router';

import SignIn, { SIGN_IN, IS_LOGGED_IN } from './SignIn';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    serverError: state.auth.serverError,
    processingRequest: state.auth.processing
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleSignIn(username, password, callback=null) {
      dispatch(
        signIn(username, password, callback)
      );
    },

    handleSignOut(callback=null) {
      dispatch(
        signOut(callback)
      );
    },

    handleCheckUserIsLoggedIn(callback=null) {
      dispatch(
        checkAuthenticateUser(callback)
      );
    }
  };
}

export { SIGN_IN, IS_LOGGED_IN };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));