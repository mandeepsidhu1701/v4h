import {
  AUTH_SIGNEDUP,
  AUTH_VERIFIED,
  AUTH_SIGNEDIN,
  AUTH_SIGNEDOUT,
  AUTH_PROCESSING,
  AUTH_ERROR,
  AUTH_AUTHENTICATED,
  AUTH_CHANGE_PASSWORD,
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUBMIT,
  AUTH_RESEND_SIGNUP,
  AUTH_UPDATE_ATTRIBUTE,
  AUTH_VERIFY_ATTRIBUTE,
  AUTH_VERIFY_ATTRIBUTE_CONFIRM
} from '../actions/auth';

const auth = (
  state = {
    user: null,
    processing: false,
    serverError: null
  },
  action
) => {
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

    case AUTH_AUTHENTICATED:
      let user = null;
      if (action.payload.user.email_verified) {
        user = action.payload.user;
      }
      return {
        user: user,
        serverError: null,
        processing: false
      };

    case AUTH_CHANGE_PASSWORD:
      return {
        ...state,
        serverError: null,
        processing: false
      };

    case AUTH_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        serverError: null,
        processing: false
      };

    case AUTH_FORGOT_PASSWORD_SUBMIT:
      return {
        ...state,
        serverError: null,
        processing: false
      };

    case AUTH_RESEND_SIGNUP:
      return {
        serverError: null,
        user: null,
        processing: false
      };

    case AUTH_UPDATE_ATTRIBUTE:
      return {
        ...state,
        serverError: null,
        processing: false
      };

    case AUTH_VERIFY_ATTRIBUTE:
      return {
        ...state,
        serverError: null,
        processing: false
      };

    case AUTH_VERIFY_ATTRIBUTE_CONFIRM:
      return {
        ...state,
        serverError: null,
        processing: false
      };

    default:
      return state;
  }
};

export default auth
