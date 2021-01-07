const assert = require('assert');
const app = require('../../src/app');

describe('\'pago-medidor\' service', () => {
  it('registered the service', () => {
    const service = app.service('pago-medidor');

    assert.ok(service, 'Registered the service');
  });
});
