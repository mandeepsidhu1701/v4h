
import { Auth } from 'aws-amplify';

import siteTypes from '../data/auth';

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
export const AUTH_VERIFY_ATTRIBUTE_CONFIRM = 'AUTH_VERIFY_ATTRIBUTE_CONFIRM';
export const AUTH_VERIFY_ATTRIBUTE = 'AUTH_VERIFY_ATTRIBUTE';
export const AUTH_UPDATE_ATTRIBUTE = 'AUTH_UPDATE_ATTRIBUTE';


//TODO: update sign in action to check that the account is for HCN or BOTH systems. sign in for Sanctuary only accounts should be rejected.


/**
 * Invoke AWS Cognito sign up with username, password and attributes.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} username 
 * @param {string} password
 * @param {string} email
 * @param {string} phone_number
 * @param {Boolean} sanctuarySignUp indicates if account is for HCN only or both HCN and Sanctuary.
 * @param {function} callback
 */
export function signUp(username, password, email, phone_number, sanctuarySignUp, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    let siteType;
    if (sanctuarySignUp) {
      /* 
        TODO: if account already exists on Sanctuary Store with this username / email / phone number combo, 
        simply change the siteType attribute to BOTH and request a new account verification.

        TODO: change safety checking for existing accounts. If account exists and is signed up to HCN or BOTH, fail.
        Otherwise, proceed with the above update.

        Otherwise create a new account.
      */

      siteType = siteTypes.BOTH;

    } else {
      siteType = siteTypes.HCN;
    }
    Auth.signUp(
      {
        username, 
        password, 
        attributes: {
          email, 
          phone_number,
          siteType
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

export function signOut(callback=null) {
  return dispatch => {
    Auth.signOut()
      .then( () => {
        dispatch(userSignedOut());
        if(callback) {
          callback();
        }
      })
      .catch(err => {
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
export function resendSignUp(username, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.resendSignUp(username)
    .then(() => {
      dispatch(userResendSignUp());
      if(callback) {
        callback();
      }
    }).catch(err => {
      dispatch(userResendSignUpError(err));
    });
  }
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
 * @param {string} oldPassword the current user password
 * @param {string} newPassword the new password to change to
 */
export function changePassword(oldPassword, newPassword, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.currentAuthenticatedUser()
      .then(
        user => {
          dispatch(beginAuthRequest());
          Auth.changePassword(user, oldPassword, newPassword)
            .then(() => {
              dispatch(userChangedPassword(user))
              if(callback) {
                callback();
              }
            })
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

/**
 * Invoke AWS Cognito currentAuthenticatedUser
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 */
export function checkAuthenticateUser(callback=null) {
  return dispatch => {
    Auth.currentAuthenticatedUser()
      .then(
        user => {
          dispatch(userAuthenticated(user));
          if(callback) {
            callback();
          }
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
    payload: {error: error},
  }
}

/**
 * Invoke AWS Cognito forgotPassword
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This begins the password recovery process. @see userRequestForgotPasswordSubmit 
 * for completing the recovery process.
 * 
 * @param {string} username
 */
export function userRequestForgotPassword(username, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.forgotPassword(username)
      .then(
        user => {
          dispatch(userForgotPasswordBegin(user));
          if(callback) {
            callback();
          }
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

/**
 * Invoke AWS Cognito forgot password confirmation
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} username
 * @param {string} code confirms the recover password request is authentic
 * @param {string} newPassword the new password to change to
 */
export function userRequestForgotPasswordSubmit(username, code, newPassword, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then(
        user => {
          dispatch(userForgotPasswordSubmitted(user));
          if(callback) {
            callback();
          }
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

/**
 * Invoke AWS Cognito verifyCurrentUserAttribute
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This will only verify the phone number.
 * 
 * This begins the verification process. @see verifyPhoneNumberSubmit
 * for completing the process.
 */
export function verifyPhoneNumber(callback=null) {
  return dispatch => dispatch(verifyAttribute('phone_number', callback));
}

/**
 * Invoke AWS Cognito verifyCurrentUserAttributeSubmit
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This will only verify the phone number.
 * 
 * @param {string} code the confirmation code
 */
export function verifyPhoneNumberSubmit(code, callback=null) {
  return dispatch => dispatch(verifyAttributeSubmit('phone_number', code, callback));
}


/**
 * Invoke AWS Cognito verifyCurrentUserAttribute
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This will only verify the email.
 * 
 * This begins the verification process. @see verifyEmailAddressSubmit
 * for completing the process.
 */
export function verifyEmailAddress(callback=null) {
  return dispatch => dispatch(verifyAttribute('email', callback));
}

/**
 * Invoke AWS Cognito verifyCurrentUserAttribute
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This will only verify the email.
 * 
 * @param {string} code the confirmation code
 */
export function verifyEmailAddressSubmit(code, callback=null) {
  return dispatch => dispatch(verifyAttributeSubmit('email', code, callback));
}

/**
 * Invoke AWS Cognito updateUserAttributes
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This will only verify the phone number.
 * 
 * This begins the verification process. @see verifyPhoneNumberSubmit
 * for completing the process.
 */
export function updateUserAttributes(attributes, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.currentAuthenticatedUser()
      .then(
        user => {
          Auth.updateUserAttributes(user, attributes)
            .then(data => {
              dispatch(updateUserAttributesBegin(data));
              if(callback) {
                callback();
              }
            })
            .catch(err => dispatch(updateUserAttributesError(err)));
        })
      .catch(err => dispatch(userAuthenticatedError(err)));
  }
}

function updateUserAttributesBegin(data) {
  return {
    type: AUTH_UPDATE_ATTRIBUTE,
    payload: {data: data}
  }
}

function updateUserAttributesError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}

/**
 * Invoke AWS Cognito verifyCurrentUserAttribute
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * This begins the verification process. @see verifyEmailAddressSubmit
 * for completing the process.
 * 
 * @param {string} attribute the attribute to verify, e.g. 'email', 'phone_number'.
 */
export function verifyAttribute(attribute, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.verifyCurrentUserAttribute(attribute)
      .then(
        () => {
          dispatch(verifyAttributeBegin());
          if(callback) {
            callback();
          }
        }
      )
      .catch(err => 
        dispatch(verifyAttributeError(err))
      );
  }
}

function verifyAttributeBegin() {
  return {
    type: AUTH_VERIFY_ATTRIBUTE,
  }
}

/**
 * Invoke AWS Cognito verifyCurrentUserAttributeSubmit
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {string} attribute the attribute to confirm updating
 * @param {string} code the confirmation code
 */
export function verifyAttributeSubmit(attribute, code, callback=null) {
  return dispatch => {
    dispatch(beginAuthRequest());
    Auth.verifyCurrentUserAttributeSubmit(attribute, code)
      .then(
        data => {
          dispatch(verifyAttributeConfirm(data));
          if(callback) {
            callback();
          }
        }
      )
      .catch(err => 
        dispatch(verifyAttributeError(err))
      );
  }
}

function verifyAttributeConfirm(data) {
  return {
    type: AUTH_VERIFY_ATTRIBUTE_CONFIRM,
    payload: {data: data}
  }
}

function verifyAttributeError(error) {
  return {
    type: AUTH_ERROR,
    payload: {error: error}
  }
}
