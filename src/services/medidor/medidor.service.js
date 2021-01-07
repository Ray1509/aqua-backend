// Initializes the `medidor` service on path `/medidor`
const { Medidor } = require('./medidor.class');
const createModel = require('../../models/medidor.model');
const hooks = require('./medidor.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/medidor', new Medidor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medidor');

  service.hooks(hooks);
};
