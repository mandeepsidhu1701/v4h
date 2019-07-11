import { connect } from 'react-redux';
import { signIn } from '../../../actions/auth';
import { withRouter } from 'react-router';

import SignIn from './SignIn';

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
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));