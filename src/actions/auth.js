
import { Auth } from 'aws-amplify';

export const AUTH_SIGNEDUP = 'AUTH_SIGNEDUP';
export const AUTH_SIGNEDIN = 'AUTH_SIGNEDIN';
export const AUTH_SIGNEDOUT = 'AUTH_SIGNEDOUT';

/**
 * Invoke AWS Cognito sign up with username, password and attributes.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {username, password, attributes: {email, phone_number, ...}} user 
 */
export function signUp(user) {
  return dispatch => Auth.signUp(user)
    .then(data => {
      console.log(data);
      dispatch(userSignedUp(data));
    })
    .catch(err => {
      console.log(err);
    });
}

function userSignedUp(user) {
  return {
      type: AUTH_SIGNEDUP,
      user, user
  }
}

/**
 * Invoke AWS Cognito confirm sign up with username and confirmation code.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {String} username 
 * @param {String} code 
 */
export function confirmSignUp(username, code) {
  return dispatch => Auth.confirmSignUp(username, code, {
    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    forceAliasCreation: true
  }).then(data => console.log(data))
    .catch(err => console.log(err));
}

/**
 * Invoke AWS Cognito resend sign up with username, AWS will resend the confirmation code.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {String} username 
 */
export function resendSignUp(username) {
  return dispatch => Auth.resendSignUp(username).then(() => {
    console.log('code resent successfully');
  }).catch(err => {
    console.log(err);
  });
}

/**
 * Invoke AWS Cognito sign in with username and password.
 * Also @see https://aws-amplify.github.io/docs/js/authentication.
 * 
 * @param {username, password, validationData} user 
 */
export function signIn(user) {
  return dispatch => Auth.signIn(user)
    .then(data => {
      console.log(data);
      dispatch(userSignedIn(data));
    })
    .catch(err => {
      console.log(err);
    });
}

function userSignedIn(user) {
  return {
      type: AUTH_SIGNEDIN,
      user, user
  }
}

export function signOut(user) {
  return dispatch => Auth.signOut()
    .then(data => {
      console.log(data);
      dispatch(userSignedOut());
    })
    .catch(err => {
      console.log(err);
    });
}

function userSignedOut() {
  return {
      type: AUTH_SIGNEDOUT
  }
}