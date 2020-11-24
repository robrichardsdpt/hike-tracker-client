'use strict'
const store = require('./store')
// const api = require('./api')
// const ui = require('./ui')

// Handles response of API to sign up
const onSignUpSuccess = function (response) {
  $('#sign-up-success').show()
  $('#sign-up-failure').hide()
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-in-failure').hide()
  // setTimeout(api.signIn(store.credentials.data), 3000)
  //   .then(ui.onSignInSuccess)
  //   .catch(ui.onSignInFailure)
}
const onSignUpFailure = function () {
  $('#sign-up-success').hide()
  $('#sign-up-failure').show()
}

// Handles API response to sign in
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-success').show()
  $('#sign-in-success').delay(2500).fadeOut('slow')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#signUp').hide()
  $('#signIn').hide()
  $('#sign-up-failure').hide()
  $('#manage-hikes').show()
  $('#sign-in-failure').hide()
}
const onSignInFailure = function () {
  $('#sign-in-failure').show()
  $('#sign-in-failure').delay(2500).fadeOut('slow')
}

// Handles API response to password change requests
const onChangePasswordSuccess = function () {
  $('#changepw_success_message').show()
  $('#changepw_success_message').delay(2500).fadeOut('slow')
  $('#changepw_failed_message').hide()
  $('#change-password-form').trigger('reset')
  $('#search-result-failed-container').hide()
}
const onChangePasswordFailure = function () {
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').show()
  $('#changepw_failed_message').delay(2500).fadeOut('slow')
  $('#change-password-form').trigger('reset')
  $('#search-result-failed-container').hide()
}

// Handles API response to sign out request
const onSignOutSuccess = function (response) {
  $('#signIn').show()
  $('#sign-out').hide()
  $('#change-password-form').hide()
  $('.alert-failure').hide()
  $('#newHike').hide()
  $('#index-container').hide()
  $('#search-container').hide()
  $('#search-result-container').hide()
  $('#search-result-failed-container').hide()
  $('#manage-hikes').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#signout_failed_message').hide()
  $('#signout_success_message').show()
  $('#signout_success_message').delay(2500).fadeOut('slow')
  $('#create_hike').trigger('reset')
  $('#search-by-id').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-in-success').hide()
}
const onSignOutFailure = function () {
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#signout_failed_message').show()
  $('#signout_failed_message').delay(2500).fadeOut('slow')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
