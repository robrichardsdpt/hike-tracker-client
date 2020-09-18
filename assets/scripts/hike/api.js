'use strict'
const config = require('./../config')
const store = require('./../store')

const createHike = function (data) {
  return $.ajax({
    url: config.apiUrl + '/hikes',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const getIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/hikes',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createHike,
  getIndex
}
