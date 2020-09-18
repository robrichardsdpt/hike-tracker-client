'use strict'
const config = require('./../config')
const store = require('./../store')

const onCreateHikeSuccess = function (response) {
  $('#message').text('Thanks for creating a hike')
  $('#create_hike').trigger('reset')
}
const onCreateHikeFailure = function () {
  $('#message').text('Create hike failed.  Please try again')
}

const onIndexSuccess = function (response) {
  // $('#message').text(response.hikes.hike)
  // console.log(response)
  // console.log(response.hikes)
  $('#message').html('')
  // loop through API response data
  response.hikes.forEach(hike => {
    // build HTML element with data
    const hikeHTML = (`
      <h4>Date: ${hike.date}</h4>
      <p>Trail: ${hike.trails}</p>
      <p>Mountain: ${hike.mountains}</p>
      <p>ID: ${hike._id}</p>
      <br>
    `)
    // append bookHTML to our book-display element
    $('#index-container').append(hikeHTML)
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
