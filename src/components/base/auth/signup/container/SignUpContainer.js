import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {signUp, verifySignUp, checkAuthenticateUser} from '../../../../../store/actions/auth';
import SignUp from './SignUp';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
