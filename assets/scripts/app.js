'use strict'
const authEvents = require('./events')

// Receive clicks from user
$(() => {
  $('#signUp').hide()
  $('#sign-up-btn').on('click', onSignUpBtnClick)
  $('#log-in-btn').on('click', onLoginBtnClick)
  $('#change-password-form').hide()
  $('#sign-out').hide()
})

const onSignUpBtnClick = function () {
  $('#signUp').show()
  $('#signIn').hide()
}

const onLoginBtnClick = function () {
  $('#signIn').show()
  $('#signUp').hide()
}
// $(()=> {
//   $('#change-password-form').hide()
//   $('#sign-out').hide()
//   $('#sign-up-form').hide()
//   $('#sign-up-btn').on('click', authEvents.onBtnForSignUpClick)
//   // $('#sign-up-form').on('submit', authEvents.onSignUp)
//   // $('#sign-in-form').on('submit', authEvents.onSignIn)
//   // $('#change-password-form').on('submit', authEvents.onChangePassword)
//   // $('#sign-out').on('submit', authEvents.onSignOut) // do I refresh the site?
//   // $('#new-game').on('submit', authEvents.onNewGame)
//   // $('.box').on('click', authEvents.onCellClick)
// })
