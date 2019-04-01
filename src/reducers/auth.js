import {
  AUTH_SIGNEDUP,
  AUTH_SIGNEDIN,
  AUTH_SIGNEDOUT
} from '../actions/auth';

const auth = (state = {
  isSignedIn: false
}, action) => {
  switch (action.type) {
    case AUTH_SIGNEDUP:
      return state;
    case AUTH_SIGNEDIN:
      return Object.assign({}, state, {
        isSignedIn: !state.isSignedIn
      })
    case AUTH_SIGNEDOUT:
      return Object.assign({}, state, {
        isSignedIn: !state.isSignedIn
      });
    default:
      return state
    }
}

export default auth
