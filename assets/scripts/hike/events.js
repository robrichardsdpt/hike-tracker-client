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
  $('#hikeIndex').show()
  hikeApi.getIndex()
    .then(hikeUi.onIndexSuccess)
    .catch(hikeUi.onIndexFailure)
}

const onCreateBtn = function (event) {
  event.preventDefault()
  $('#newHike').show()
  $('#hikeIndex').hide()
}

const onShowBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#hikeIndex').hide()
}

const onEditBtn = function (event) {
  event.preventDefault()
  $('#newHike').hide()
  $('#hikeIndex').hide()
}

module.exports = {
  onCreateHike,
  onIndexBtn,
  onCreateBtn,
  onShowBtn,
  onEditBtn
}
