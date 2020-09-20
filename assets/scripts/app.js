'use strict'
const authEvents = require('./events')
const hikeEvents = require('./hike/events')

// Receive clicks from user
$(() => {
  $('#signUp').hide()
  $('#sign-up-btn').on('click', onSignUpBtnClick)
  $('#log-in-btn').on('click', onLoginBtnClick)
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create_hike').on('submit', hikeEvents.onCreateHike)
  $('#index-btn').on('click', hikeEvents.onIndexBtn)
  $('#create-btn').on('click', hikeEvents.onCreateBtn)
  $('#show-btn').on('click', hikeEvents.onShowBtn)
  $('#edit-btn').on('click', hikeEvents.onEditBtn)
  $('#search-container').hide()
  $('#newHike').hide()
  $('#index-container').hide()
  $('search-result-container').hide()
  // search functionality
  $('#search-by-id').on('submit', hikeEvents.onShowById)
  $('#mountain-search-btn').on('submit', hikeEvents.onShowByMountain)
  $('#trail-search-btn').on('submit', hikeEvents.onShowByTrail)
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
