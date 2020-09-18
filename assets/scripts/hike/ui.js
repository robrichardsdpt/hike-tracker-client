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

module.exports = {
  onCreateHikeSuccess,
  onCreateHikeFailure,
  onIndexSuccess,
  onIndexFailure
}
