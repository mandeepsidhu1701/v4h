import { connect } from 'react-redux';

import { signUp, signIn, signOut } from '../../actions/auth';

import Landing from './Landing'

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (user) => {
      dispatch(signUp(user));
    },
    signIn: (user) => {
      dispatch(signIn(user));
    },
    signOut: (user) => {
      dispatch(signOut(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);