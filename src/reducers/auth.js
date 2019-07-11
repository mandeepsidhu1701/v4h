import {
  AUTH_SIGNEDUP,
  AUTH_VERIFIED,
  AUTH_SIGNEDIN,
  AUTH_SIGNEDOUT,
  AUTH_PROCESSING,
  AUTH_ERROR
} from '../actions/auth';

const auth = (
  state = {
    user: null, 
    processing: false,
    serverError: null
  }, 
  action) => {
  switch (action.type) {
    case AUTH_PROCESSING:
      return {
        ...state,
        processing: true
      };

    case AUTH_ERROR:
      return {
        serverError: action.payload.error,
        processing: false,
        user: state.user
      };

    case AUTH_SIGNEDUP:
      return {
        user: null,
        serverError: null,
        processing: false
      };

    case AUTH_VERIFIED:
      return {
        user: null,
        serverError: null,
        processing: false
      };

    case AUTH_SIGNEDIN:
      return {
        user: action.payload.user,
        serverError: null,
        processing: false
      };

    case AUTH_SIGNEDOUT:
      return {
        user: null,
        serverError: null,
        processing: false
      };

    default:
      return state
    }
}

export default auth
