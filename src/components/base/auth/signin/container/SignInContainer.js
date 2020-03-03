import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {signIn, checkAuthenticateUser, signOut} from '../../../../../store/actions/auth';
import SignIn from './SignIn';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    serverError: state.auth.serverError,
    processingRequest: state.auth.processing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn(username, password, callback = null) {
      dispatch(signIn(username, password, callback));
    },

    handleSignOut(callback = null) {
      dispatch(signOut(callback));
    },

    handleCheckUserIsLoggedIn(callback = null) {
      dispatch(checkAuthenticateUser(callback));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
