// Initializes the `consumo` service on path `/consumo`
const { Consumo } = require('./consumo.class');
const createModel = require('../../models/consumo.model');
const hooks = require('./consumo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/consumo', new Consumo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('consumo');

  service.hooks(hooks);
};
