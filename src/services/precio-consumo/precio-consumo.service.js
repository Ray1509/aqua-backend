// Initializes the `precio-consumo` service on path `/precio-consumo`
const { PrecioConsumo } = require('./precio-consumo.class');
const createModel = require('../../models/precio-consumo.model');
const hooks = require('./precio-consumo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/precio-consumo', new PrecioConsumo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('precio-consumo');

  service.hooks(hooks);
};
