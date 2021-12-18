const gallery = require('./gallery/gallery.service.js')
const file = require('./file/file.service.js')

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(gallery)
  app.configure(file)
}
