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

const showById = function (hikeId) {
  return $.ajax({
    url: config.apiUrl + '/hikes/' + hikeId,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const editHike = function (data) {
  return $.ajax({
    url: config.apiUrl + '/hikes/' + store.hike._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteHike = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hikes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createHike,
  getIndex,
  showById,
  editHike,
  deleteHike
}
