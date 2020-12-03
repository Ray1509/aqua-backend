const assert = require('assert');
const app = require('../../src/app');

describe('\'pago\' service', () => {
  it('registered the service', () => {
    const service = app.service('pago');

    assert.ok(service, 'Registered the service');
  });
});
