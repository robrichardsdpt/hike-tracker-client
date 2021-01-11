'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const hikeApi = require('./api')
const hikeUi = require('./ui')
const store = require('../store')

// Handles creation of a hike submit
const onCreateHike = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  hikeApi.createHike(data)
    .then(hikeUi.onCreateHikeSuccess)
    .catch(hikeUi.onCreateHikeFailure)
}

// Handles click for index
const onIndexBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#index-container').show()
  $('#search-container').hide()
  $('#search-result-container').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#sign-in-success').hide()
  $('#search-result-failed-container').hide()
  $('#failure_message').hide()
  $('#search-by-id').trigger('reset')
  hikeApi.getIndex()
    .then(hikeUi.onIndexSuccess)
    .catch(hikeUi.onIndexFailure)
}

// Handles click to bring up create hike form
const onCreateBtn = function (event) {
  event.preventDefault()
  $('#newHike').show()
  $('#index-container').hide()
  $('#search-container').hide()
  $('#success_message').hide()
  $('#failure_message').hide()
  $('#search-result-container').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#sign-in-success').hide()
  $('#search-result-failed-container').hide()
  $('#create_hike').trigger('reset')
  $('#search-by-id').trigger('reset')
}

// Handles click to bring up show by ID form
const onShowBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#index-container').hide()
  $('#search-container').show()
  $('#search-result-container').hide()
  $('#edit-fn-container').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#sign-in-success').hide()
  $('#search-result-failed-container').hide()
  $('#failure_message').hide()
  $('#search-by-id').trigger('reset')
}

const onShowByTrails = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const trails = data.hike.trails
  const filteredHikes = store.hikes.filter(hike => hike.trails.toLowerCase().includes(trails.toLowerCase()))
  const hikeHTML = filteredHikes.map(hike => {
     return (`<div>
      <h4 class='header'>Date: ${hike.date}</h4>
      <p>Trails: ${hike.trails ? hike.trails : 'not reported'}</p>
      <p>Distance (in miles): ${hike.distance ? hike.distance : 'not reported'}</p>
      <p>Elevation (in feet): ${hike.elevation ? hike.elevation : 'not reported'}</p>
      <p>Time taken: ${hike.timeTaken ? hike.timeTaken : 'not reported'}</p>
      <p>Mountain: ${hike.mountainsClimbed ? hike.mountainsClimbed : 'not reported'}</p>
      <p>Hiking partner(s): ${hike.hikedWith ? hike.hikedWith : 'not reported'}</p>
      <p>Trail Notes: ${hike.trailNotes ? hike.trailNotes : 'not reported'}</p>
      <p>ID: ${hike._id}</p>
      </div>
  `)
  })
  console.log(hikeHTML)
  $('#scrollable-index').html(hikeHTML)
}

// Handles show By ID submission of form
const onShowById = function (event) {
  event.preventDefault()
  $('#edit_success_message').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  $('#failure_message').hide()
  const form = event.target
  const data = getFormFields(form)
  const id = data.hike.id
  hikeApi.showById(id)
    .then(hikeUi.onShowByIdSuccess)
    .catch(hikeUi.onShowByIdFailure)
}

// Handles edit button click to bring up options
const onEdit = function (event) {
  event.preventDefault()
  $('#edit').hide()
  $('#submit-edit-btn').show()
  $('#cancel-edit-btn').show()
  $('#delete').hide()
  $('#editHike').show()
  $('#edit_success_message').hide()
  $('#editHikeContainer').show()
  $('#edit-form-div').show()
  $('#search-result-failed-container').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
}

// Handles edit submission
const onSubmitEdit = function (event) {
  event.preventDefault()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  const form = event.target
  const data = getFormFields(form)
  hikeApi.editHike(data)
    .then(hikeUi.onSubmitEditSuccess)
    .catch(hikeUi.onSubmitEditFailure)
}

// Handles cancel edit click
const onCancelEdit = function (event) {
  event.preventDefault()
  $('#edit').show()
  $('#submit-edit-btn').hide()
  $('#cancel-edit-btn').hide()
  $('#delete').show()
  $('#edit-form-div').hide()
  $('#editHike').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
}

// Handles click to bring up delete options
const onDelete = function () {
  event.preventDefault()
  $('#edit_success_message').hide()
  $('#submit-delete-btn').show()
  $('#cancel-delete-btn').show()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
}

// Handles delete request submission
const onSubmitDelete = function () {
  event.preventDefault()
  $('#submit-delete-btn').hide()
  $('#cancel-delete-btn').hide()
  $('#changepw_success_message').hide()
  $('#changepw_failed_message').hide()
  hikeApi.deleteHike(store.hike._id)
    .then(hikeUi.onSubmitDeleteSuccess)
    .catch(hikeUi.onSubmitDeleteFailure)
}

// Handles delete request cancel click
const onCancelDelete = function () {
  event.preventDefault()
  $('#submit-delete-btn').hide()
  $('#cancel-delete-btn').hide()
}

module.exports = {
  onCreateHike,
  onIndexBtn,
  onCreateBtn,
  onShowBtn,
  onShowById,
  onShowByTrails,
  onEdit,
  onSubmitEdit,
  onDelete,
  onSubmitDelete,
  onCancelDelete,
  onCancelEdit
}
