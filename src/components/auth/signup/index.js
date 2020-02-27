import {connect} from 'react-redux';
import {signUp, verifySignUp, checkAuthenticateUser} from '../../../actions/auth';
import {withRouter} from 'react-router';

import SignUp, {SIGN_UP, VERIFY, IS_VERIFIED} from './SignUp';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    serverError: state.auth.serverError,
    processingRequest: state.auth.processing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUp(username, password, email, phone_number, callback = null) {
      dispatch(signUp(username, password, email, phone_number, callback));
    },
    handleVerifySignUp(username, code, callback = null) {
      dispatch(verifySignUp(username, code, callback));
    },
    handleCheckUserIsLoggedIn(callback = null) {
      dispatch(checkAuthenticateUser(callback));
    }
  };
};

export {SIGN_UP, VERIFY, IS_VERIFIED};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));