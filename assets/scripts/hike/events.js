'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const hikeApi = require('./api')
const hikeUi = require('./ui')
const store = require('../store')

const onCreateHike = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  hikeApi.createHike(data)
    .then(hikeUi.onCreateHikeSuccess)
    .catch(hikeUi.onCreateHikeFailure)
}

const onIndexBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#index-container').show()
  $('#search-container').hide()
  $('#search-result-container').hide()
  hikeApi.getIndex()
    .then(hikeUi.onIndexSuccess)
    .catch(hikeUi.onIndexFailure)
}

const onCreateBtn = function (event) {
  event.preventDefault()
  $('#newHike').show()
  $('#index-container').hide()
  $('#search-container').hide()
  $('#success_message').hide()
}

const onShowBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#index-container').hide()
  $('#search-container').show()
  $('#search-result-container').hide()
  $('#edit-fn-container').hide()
}

const onEditBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#hikeIndex').hide()
}

const onShowById = function (event) {
  event.preventDefault()
  $('#search-container').show()
  $('#search-result-container').show()
  $('#edit-fn-container').show()
  const form = event.target
  const data = getFormFields(form)
  const id = data.hike.id
  hikeApi.showById(id)
    .then(hikeUi.onShowByIdSuccess)
    .catch(hikeUi.onShowByIdFailure)
}

const onShowByTrail = function (event) {
  event.preventDefault()
}

const onShowByMountain = function (event) {
  event.preventDefault()
}

const onEdit = function (event) {
  event.preventDefault()
  console.log('hello')
  $('#edit').hide()
  $('#submit-edit-btn').show()
  $('#cancel-edit-btn').show()
  $('#delete').hide()
  hikeUi.onEditBtnSuccess()
  $('#edit-form-div').show()
}

const onSubmitEdit = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log(store.hike._id)
  hikeApi.editHike(data)
    .then(hikeUi.onSubmitEditSuccess)
    .catch(hikeUi.onSubmitEditFailure)
}

const onCancelEdit = function (event) {
  event.preventDefault()
  $('#edit').show()
  $('#submit-edit-btn').hide()
  $('#cancel-edit-btn').hide()
  $('#delete').show()
  $('#edit-form-div').hide()
}

const onDelete = function () {
  event.preventDefault()
  console.log('hello')
  $('#submit-delete-btn').show()
  $('#cancel-delete-btn').show()
}

const onSubmitDelete = function () {
  event.preventDefault()
  hikeApi.deleteHike(store.hike._id)
    .then(hikeUi.onSubmitDeleteSuccess)
    .catch(hikeUi.onSubmitDeleteFailure)
}

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
  onEditBtn,
  onShowById,
  onShowByTrail,
  onShowByMountain,
  onEdit,
  onSubmitEdit,
  onDelete,
  onSubmitDelete,
  onCancelDelete,
  onCancelEdit
}
