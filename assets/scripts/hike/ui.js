'use strict'
const config = require('./../config')
const store = require('./../store')

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
}

const onShowByIdFailure = function () {
  $('index-container').text('Could not find hike by ID.  Please try again.')
}

const onEditBtnSuccess = function (response) {
  $('#edit-form-div')
  const hikeHTML = (`<div>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Date:</label></p>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.date}" name="hike[date]" class="form-control"  type="text">
          </div>
        </div>
      </div>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Trail(s):</label>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.trails}" name="hike[trails]" class="form-control"  type="text">
          </div>
        </div>
      </div></p>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Distance:</label>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.distance}" name="hike[distance]" class="form-control"  type="text">
          </div>
        </div>
      </div></p>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Elevation:</label>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.elevation}" name="hike[elevation]" class="form-control"  type="text">
          </div>
        </div>
      </div></p>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Mountain(s):</label>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.mountainsClimbed}" name="hike[mountainsClimbed]" class="form-control"  type="text">
          </div>
        </div>
      </div></p>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Did you hike with someone?</label>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.hikedWith}" name="hike[hikedWith]" class="form-control"  type="text">
          </div>
        </div>
      </div></p>
      <p><div class="form-group">
        <label class="col-md-8 control-label">Trail notes:</label>
        <div class="col-md-8 inputGroupContainer">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-calendar-day"></i></span>
            <input value="${store.hike.trailNotes}" name="hike[trailNotes]" class="form-control"  type="text">
          </div>
        </div>
      </div></p>
      <p>ID: ${store.hike._id}</p>
      </div>
  `)
  $('#edit-form-div').append(hikeHTML)
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
  onEditBtnSuccess,
  onSubmitDeleteSuccess,
  onSubmitDeleteFailure
}
