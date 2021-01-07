// Initializes the `pago-medidor` service on path `/pago-medidor`
const { PagoMedidor } = require('./pago-medidor.class');
const createModel = require('../../models/pago-medidor.model');
const hooks = require('./pago-medidor.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pago-medidor', new PagoMedidor(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pago-medidor');

  service.hooks(hooks);
};
