'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const hikeApi = require('./api')
const hikeUi = require('./ui')

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
}

const onEditBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#hikeIndex').hide()
}

const onShowById = function (event) {
  event.preventDefault()
  $('#search-result-container').show()
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
  hikeUi.onEditBtnSuccess()
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
  onEdit
}
