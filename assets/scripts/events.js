'use strict'
const getFormFields = require('./../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
// const gameEvents = require('./game')
// const store = require('./store')

const onBtnForSignUpClick = function (event) {
  event.preventDefault()
  $('#sign-in-form').hide()
  $('#sign-up-form').show()
  console.log('hello')
}

// Handles sign on click and sends information to API
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // api.signUp(data)
  //   .then(ui.onSignUpSuccess)
  //   .catch(ui.onSignUpFailure)
}

// Handles sign in click and sends information to API
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // api.signIn(data)
  //   .then(ui.onSignInSuccess)
  //   .catch(ui.onSignInFailure)
}

// Handles change password click and sends information to API
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // api.changePassword(data)
  //   .then(ui.onChangePasswordSuccess)
  //   .catch(ui.onChangePasswordFailure)
}

// Handles sign out click by user and sends to API and to game.js file
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // gameEvents.signOut()
  // api.signOut(data)
  //   .then(ui.onSignOutSuccess)
  //   .catch(ui.onSignOutFailure)
}

module.exports = {
  onBtnForSignUpClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
