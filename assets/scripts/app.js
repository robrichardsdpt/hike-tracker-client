'use strict'
const authEvents = require('./events')
const hikeEvents = require('./hike/events')

// Receive clicks from user
$(() => {
  $('#signUp').hide()
  $('#sign-up-btn').on('click', onSignUpBtnClick)
  $('#log-in-btn').on('click', onLoginBtnClick)
  $('#change-password-form').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#signout_success_message').hide()
  $('#signout_failed_message').hide()
  $('#sign-out').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-in-failure').hide()
  $('#sign-up-failure').hide()
  $('#sign-up-success').hide()
  $('#sign-in-success').hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create_hike').on('submit', hikeEvents.onCreateHike)
  $('#index-btn').on('click', hikeEvents.onIndexBtn)
  $('#create-btn').on('click', hikeEvents.onCreateBtn)
  $('#show-btn').on('click', hikeEvents.onShowBtn)
  $('#search-container').hide()
  $('#newHike').hide()
  $('#index-container').hide()
  $('#search-result-container').hide()
  $('#editHike').hide()
  $('#manage-hikes').hide()
  $('#edit_success_message').hide()
  // search functionality
  $('#search-by-id').on('submit', hikeEvents.onShowById)
  // edit functionality
  $('#delete').on('click', hikeEvents.onDelete)
  $('#edit').on('click', hikeEvents.onEdit)
  $('#edit_success_message').hide()
  $('#submit-edit-btn').hide()
  $('#cancel-edit-btn').hide()
  $('#edit_hike').on('submit', hikeEvents.onSubmitEdit)
  $('#cancel-edit-btn').on('click', hikeEvents.onCancelEdit)
  $('#submit-delete-btn').hide()
  $('#cancel-delete-btn').hide()
  $('#submit-delete-btn').on('click', hikeEvents.onSubmitDelete)
  $('#cancel-delete-btn').on('click', hikeEvents.onCancelDelete)
})

const onSignUpBtnClick = function () {
  $('#signUp').show()
  $('#signIn').hide()
}

const onLoginBtnClick = function () {
  $('#signIn').show()
  $('#signUp').hide()
  $('#sign-up-success').hide()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-failure').hide()
}
