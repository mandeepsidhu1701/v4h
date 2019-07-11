
import { Auth } from 'aws-amplify';

export const AUTH_SIGNEDUP = 'AUTH_SIGNEDUP';
export const AUTH_VERIFIED = 'AUTH_VERIFIED';
export const AUTH_SIGNEDIN = 'AUTH_SIGNEDIN';
export const AUTH_SIGNEDOUT = 'AUTH_SIGNEDOUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_PROCESSING = 'AUTH_PROCESSING';
export const AUTH_RESEND_SIGNUP = 'AUTH_RESEND_SIGNUP';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const AUTH_AUTHENTICATED = 'AUTH_AUTHENTICATED';
export const AUTH_FORGOT_PASSWORD_SUBMIT = 'AUTH_FORGOT_PASSWORD_SUBMIT';
export const AUTH_FORGOT_PASSWORD_REQUEST = 'AUTH_FORGOT_PASSWORD_REQUEST';


/**
 * Invoke AWS Cognito sign up with username, password and attributes.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} username 
 * @param {string} password
 * @param {string} email
 * @param {string} phone_number
 * @param {function} callback
 */
export function signUp(username, password, email, phone_number, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.signUp(
      {
        username, 
        password, 
        attributes: {
          email, 
          phone_number
        },
        validationData: []
      }
    ).then(data => {
      dispatch(userSignedUp(data));
      if (callback !== null && callback !== undefined) {
        callback();
      }
    }).catch(err => {
      dispatch(userSignUpError(err));
    });
  }
}

function userSignedUp(user) {
  return {
    type: AUTH_SIGNEDUP,
    payload: {user: user}
  }
}

function userSignUpError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}

/**
 * Invoke AWS Cognito confirm sign up with username and confirmation code.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {String} username 
 * @param {String} code 
 */
export function verifySignUp(username, code, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.confirmSignUp(
      username, 
      code, 
      {
        forceAliasCreation: true
      }
    ).then(data => {
      dispatch(userVerified(data));
      if (callback !== null && callback !== undefined) {
        callback();
      }
    }).catch(err => {
      dispatch(userVerifiedError(err));
    });
  }
}

function userVerified(user) {
  return {
    type: AUTH_VERIFIED,
    payload: {user: user}
  }
}

function userVerifiedError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}

/**
 * Invoke AWS Cognito sign in with username and password.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} username
 * @param {string} password
 */
export function signIn(username, password, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.signIn({
      username,
      password,
    }).then(data => {
      dispatch(userSignedIn(data));
      if (callback !== null && callback !== undefined) {
        callback();
      }
    }).catch(err => {
      dispatch(userSignedInError(err));
    });
  }
}

function userSignedIn(user) {
  return {
    type: AUTH_SIGNEDIN,
    payload: {user: user}
  }
}

function userSignedInError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}

export function signOut() {
  return dispatch => {
    Auth.signOut()
      .then(data => {
        console.log("signOut action, SUCCESS. Returned data:", data);
        dispatch(userSignedOut());
      })
      .catch(err => {
        console.log("signout action, ERROR.", err);
        dispatch(userSignedOutError(err));
      });
  }
}

function userSignedOut() {
  return {
    type: AUTH_SIGNEDOUT
  }
}

function userSignedOutError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}



function beginAuthRequest() {
  return {
    type: AUTH_PROCESSING
  }
}


/**
 * Invoke AWS Cognito resend sign up with username, AWS will resend the confirmation code.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} username 
 */
export function resendSignUp(username) {
  return dispatch => Auth.resendSignUp(username)
    .then(() => {
      dispatch(userResendSignUp());
    }).catch(err => {
      dispatch(userResendSignUpError(err));
  });
}

function userResendSignUp() {
  return {
    type: AUTH_RESEND_SIGNUP
  }
}

function userResendSignUpError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}   
  }
}

/**
 * Invoke AWS Cognito change password
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} oldPassword
 * @param {string} newPassword
 */
export function changePassword(oldPassword, newPassword) {
  return dispatch => {
    Auth.currentAuthenticatedUser()
      .then(
        user => {
          dispatch(beginAuthRequest());
          Auth.changePassword(user, oldPassword, newPassword)
            .then(dispatch(userChangedPassword(user)))
            .catch(err => dispatch(userChangedPasswordError(err)))
        })
    .catch(err => dispatch(userAuthenticatedError(err)));
  }
}

function userChangedPassword(user) {
  return {
    type: AUTH_CHANGE_PASSWORD,
    payload: {user: user}
  }
}

function userChangedPasswordError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}



export function checkAuthenticateUser() {
  return dispatch => {
    Auth.currentAuthenticatedUser()
      .then(
        user => {
          dispatch(userAuthenticated(user));
        })
      .catch(err => 
        dispatch(userAuthenticatedError(err))
      );
  }
}

function userAuthenticated(user) {
  return {
    type: AUTH_AUTHENTICATED,
    payload: {user: user}
  }
}

function userAuthenticatedError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}

export function userRequestForgotPassword(username) {
  return dispatch => {
    Auth.forgotPassword(username)
      .then(
        user => {
          dispatch(userForgotPasswordBegin(user));
        })
      .catch(err => 
        dispatch(userForgotPasswordError(err))
      );
  }
}

function userForgotPasswordBegin(user) {
  return {
    type: AUTH_FORGOT_PASSWORD_REQUEST,
    payload: {user: user}
  }
}


export function userRequestForgotPasswordSubmit(username, code, newPassword) {
  return dispatch => {
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(
        user => {
          dispatch(userForgotPasswordSubmitted(user));
        })
      .catch(err => 
        dispatch(userForgotPasswordError(err))
      );
  }
}

function userForgotPasswordSubmitted(user) {
  return {
    type: AUTH_FORGOT_PASSWORD_SUBMIT,
    payload: {user: user}
  }
}

function userForgotPasswordError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}
