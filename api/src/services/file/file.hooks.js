const { paramsFromClient } = require('feathers-hooks-common')
const fileUpload = require('./hooks/file-upload')
const fileDownload = require('./hooks/file-download')
const setDownloadUrl = require('./hooks/setDownloadUrl')
const setUploadUrl = require('./hooks/setUploadUrl')
const setUploadKey = require('./hooks/setUploadKey')
const setUserId = require('./hooks/setUserId')

module.exports = {
  before: {
    all: [paramsFromClient('$getSignedLinks')],
    find: [],
    get: [],
    create: [setUserId(), setUploadKey(), fileUpload()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [fileDownload(), setDownloadUrl()],
    get: [fileDownload(), setDownloadUrl()],
    create: [setUploadUrl(), setDownloadUrl()],
    update: [],
    patch: [setDownloadUrl()],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
