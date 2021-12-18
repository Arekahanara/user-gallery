// Initializes the `gallery` service on path `/gallery`
const { Gallery } = require('./gallery.class');
const createModel = require('../../models/gallery.model');
const hooks = require('./gallery.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/gallery', new Gallery(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('gallery');

  service.hooks(hooks);
};
