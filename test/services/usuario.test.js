const assert = require('assert');
const app = require('../../src/app');

describe('\'usuario\' service', () => {
  it('registered the service', () => {
    const service = app.service('usuario');

    assert.ok(service, 'Registered the service');
  });
});
