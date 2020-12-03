// Initializes the `adicionales` service on path `/adicionales`
const { Adicionales } = require('./adicionales.class');
const createModel = require('../../models/adicionales.model');
const hooks = require('./adicionales.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/adicionales', new Adicionales(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('adicionales');

  service.hooks(hooks);
};
