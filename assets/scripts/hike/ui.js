'use strict'
const store = require('./../store')
const hikeApi = require('./api')

const onCreateHikeSuccess = function (response) {
  $('#create_hike').trigger('reset')
  $('#success_message').show()
}
const onCreateHikeFailure = function () {
  $('#message').text('Create hike failed.  Please try again')
}

const onIndexSuccess = function (response) {
  // $('#message').text(response.hikes.hike)
  // console.log(response)
  // console.log(response.hikes)
  $('#scrollable-index').html('')
  // loop through API response data
  response.hikes.forEach(hike => {
    // build HTML element with data
    const hikeHTML = (`
      <h4>Date: ${hike.date}</h4>
      <p>Trail: ${hike.trails}</p>
      <p>Distance: ${hike.distance}</p>
      <p>Elevation: ${hike.elevation}</p>
      <p>Mountain: ${hike.mountainsClimbed}</p>
      <p>Hiking partner(s): ${hike.hikedWith}</p>
      <p>Trail Notes: ${hike.trailNotes}</p>
      <p>ID: ${hike._id}</p>
      <br>
    `)
    // append bookHTML to our book-display element
    $('#scrollable-index').append(hikeHTML)
  })
}

const onIndexFailure = function () {
  $('index-container').text('failed to find index')
}

const onShowByIdSuccess = function (response) {
  $('#search-result').html('')
  $('#edit-fn-container').show()
  console.log(response)
  store.hike = response.hike
  const hikeHTML = (`<div>
      <h4>Date: ${response.hike.date}</h4>
      <p>Trail: ${response.hike.trails}</p>
      <p>Distance: ${response.hike.distance}</p>
      <p>Elevation: ${response.hike.elevation}</p>
      <p>Mountain: ${response.hike.mountainsClimbed}</p>
      <p>Hiking partner(s): ${response.hike.hikedWith}</p>
      <p>Trail Notes: ${response.hike.trailNotes}</p>
      <p>ID: ${response.hike._id}</p>
      </div>

  `)
  $('#search-result').append(hikeHTML)
  $('#date-edit').attr('value', store.hike.date)
  $('#trails-edit').attr('value', store.hike.trails)
  $('#distance-edit').attr('value', store.hike.distance)
  $('#elevation-edit').attr('value', store.hike.elevation)
  $('#mountains-edit').attr('value', store.hike.mountainsClimbed)
  $('#partner-edit').attr('value', store.hike.hikedWith)
  $('#notes-edit').attr('value', store.hike.trailNotes)
  $('#edit-id').text(`ID: ${store.hike._id}`)
}

const onShowByIdFailure = function () {
  $('index-container').text('Could not find hike by ID.  Please try again.')
}

const onSubmitEditSuccess = function (response) {
  $('#edit-fn-btns').show()
  $('#editHike').hide()
  const id = store.hike._id
  $('#edit-fn-container').show()
  $('#edit').show()
  $('#delete').show()
  hikeApi.showById(id)
    .then(onShowByIdSuccess)
    .catch(onShowByIdFailure)
}

const onSubmitEditFailure = function () {
  console.log('error')
}

const onSubmitDeleteSuccess = function () {
  $('#search-result').html('<p>Successfully deleted hike</p>')
}

const onSubmitDeleteFailure = function () {
  console.log('error')
}

module.exports = {
  onCreateHikeSuccess,
  onCreateHikeFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowByIdSuccess,
  onShowByIdFailure,
  onSubmitEditSuccess,
  onSubmitDeleteSuccess,
  onSubmitDeleteFailure,
  onSubmitEditFailure
}
