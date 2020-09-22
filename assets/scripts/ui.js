'use strict'
const store = require('./store')

// Handles response of API to sign up
const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks for signing up ${response.user.email}!`)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#sign-up-failure').show()
}

// Handles API response to sign in
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#signUp').hide()
  $('#signIn').hide()
  $('#manage-hikes').show()
  console.log(store.user.token)
}
const onSignInFailure = function () {
  $('#sign-in-failure').show()
}

// Handles API response to password change requests
const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Failed to change password.  Please try again.')
  $('#change-password-form').trigger('reset')
}

// Handles API response to sign out request
const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  $('#signIn').show()
  $('#sign-out').hide()
  $('#change-password-form').hide()
  $('.alert-failure').hide()
  $('#newHike').hide()
  $('#index-container').hide()
  $('#search-container').hide()
  $('#search-result-container').hide()
  $('#manage-hikes').hide()
}
const onSignOutFailure = function () {
  $('#message').text('You have failed to sign out.  Please try again.')
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
