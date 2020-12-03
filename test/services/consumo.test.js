const assert = require('assert');
const app = require('../../src/app');

describe('\'consumo\' service', () => {
  it('registered the service', () => {
    const service = app.service('consumo');

    assert.ok(service, 'Registered the service');
  });
});
