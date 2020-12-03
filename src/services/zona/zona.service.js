// Initializes the `zona` service on path `/zona`
const { Zona } = require('./zona.class');
const createModel = require('../../models/zona.model');
const hooks = require('./zona.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/zona', new Zona(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('zona');

  service.hooks(hooks);
};
