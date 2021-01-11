'use strict'
const store = require('./../store')
const hikeApi = require('./api')

// Handles successful and failed hike creations
const onCreateHikeSuccess = function (response) {
  $('#create_hike').trigger('reset')
  $('#success_message').show()
  $('#success_message').delay(2500).fadeOut('slow')
  $('#failure_message').hide()
}
const onCreateHikeFailure = function () {
  $('#success_message').hide()
  $('#failure_message').show()
  $('#failure_message').delay(2500).fadeOut('slow')
}

// Handles index success and failure
const onIndexSuccess = function (response) {
  $('#scrollable-index').html('')
  // loop through API response data
  response.hikes.forEach(hike => {
    // build HTML element with data
    // <span class="input-group-text" id=${hike._id}><i class="fas fa-edit"></i></span>
    const hikeHTML = (`
      <div class='header'><h4>Date: ${hike.date}</h4></div>
      <p>Trail: ${hike.trails}</p>
      <p>Distance: ${hike.distance}</p>
      <p>Elevation: ${hike.elevation}</p>
      <p>Time taken: ${hike.timeTaken}</p>
      <p>Mountain: ${hike.mountainsClimbed}</p>
      <p>Hiking partner(s): ${hike.hikedWith}</p>
      <p>Trail Notes: ${hike.trailNotes}</p>
      <p>ID: ${hike._id}</p>
      <br>
    `)
    const hikeTotalDistance = response.hikes.reduce((accumulator, hike) => {
      return accumulator += hike.distance
    }, 0)
    const hikeTotalDistanceHTML = `<div class='stats'><h3>Total Distance:  ${hikeTotalDistance} miles.</h3></div>`
    // append hikeHTML to hike-display element
    $('#scrollable-index').append(hikeTotalDistanceHTML)
    $('#scrollable-index').append(hikeHTML)
    $('#search-result-failed-container').hide()
    $('#failure_message').hide()
  })
}
const onIndexFailure = function () {
  $('index-container').text('failed to find index')
}

// Handles ShowById success
const onShowByIdSuccess = function (response) {
  $('#search-result-failed-container').hide()
  $('#search-by-id').trigger('reset')
  $('#search-result-delete').hide()
  $('#search-result').html('')
  $('#search-container').show()
  $('#search-result-container').show()
  $('#edit-fn-container').show()
  // Stores the response for later use for update and delete purposes
  store.hike = response.hike
  const hikeHTML = (`<div>
      <h4>Date: ${response.hike.date}</h4>
      <p>Trails: ${response.hike.trails}</p>
      <p>Distance (in miles): ${response.hike.distance}</p>
      <p>Elevation (in feet): ${response.hike.elevation}</p>
      <p>Time taken: ${response.hike.timeTaken}</p>
      <p>Mountain: ${response.hike.mountainsClimbed}</p>
      <p>Hiking partner(s): ${response.hike.hikedWith}</p>
      <p>Trail Notes: ${response.hike.trailNotes}</p>
      <p>ID: ${response.hike._id}</p>
      </div>
  `)
  $('#search-result').append(hikeHTML)
  $('#search-result').show()
  // Uses stored value to populate hidden edit form so that the user does not have to type it in again to edit
  // This allows the user to not have to retype information if they do not want to change a certain value
  $('#date-edit').attr('value', store.hike.date)
  $('#trails-edit').attr('value', store.hike.trails)
  $('#distance-edit').attr('value', store.hike.distance)
  $('#elevation-edit').attr('value', store.hike.elevation)
  $('#time-edit').attr('value', store.hike.timeTaken)
  $('#mountains-edit').attr('value', store.hike.mountainsClimbed)
  $('#partner-edit').attr('value', store.hike.hikedWith)
  $('#notes-edit').attr('value', store.hike.trailNotes)
  $('#edit-id').text(`ID: ${store.hike._id}`)
  $('#edit').show()
  $('#delete').show()
  $('#search-result-failed-container').hide()
}

// Handles failed showById requests
const onShowByIdFailure = function () {
  $('#search-container').show()
  $('#search-result-container').hide()
  $('#edit-fn-container').hide()
  $('#search-result').hide()
  $('#search-by-id').trigger('reset')
  $('#search-result-failed-container').show()
  $('#search-result-failed-container').html('<div class="alert alert-failure" id="sign-up-failure">Unable to find hike. Please check if the id is correct!<i class="far fa-thumbs-down"></i></div>')
  $('#search-result-failed-container').delay(2500).fadeOut('slow')
}

// Handles succesful edit requests
const onSubmitEditSuccess = function (response) {
  $('#edit-fn-btns').show()
  $('#editHike').hide()
  // uses stored id from showById request
  // Possible because the only way to access edit is following recent showById
  const id = store.hike._id
  $('#edit-fn-container').show()
  $('#edit').show()
  $('#delete').show()
  $('#edit_success_message').show()
  $('#edit_success_message').delay(2500).fadeOut('slow')
  // updates the previous search based on updates made in real time
  hikeApi.showById(id)
    .then(onShowByIdSuccess)
    .catch(onShowByIdFailure)
}

// Handles edit submission failures
const onSubmitEditFailure = function () {
  $('#edit-result-failed').html('<p>Unable to edit hike.  Check required fields and data.</p>')
  $('#edit-result-failed').delay(2500).fadeOut('slow')
}

// Handles successful deletion a log entry
const onSubmitDeleteSuccess = function () {
  $('#search-result-delete').html('<p>Successfully deleted hike</p>')
  $('#search-result-delete').show()
  $('#search-result-delete').delay(2500).fadeOut('slow')
  $('#search-result').hide()
  $('#edit').hide()
  $('#delete').hide()
}

// Handles delete failures
const onSubmitDeleteFailure = function () {
  $('#search-result-delete').html('<p>Unable to delete hike</p>')
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
