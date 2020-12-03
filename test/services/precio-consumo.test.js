const assert = require('assert');
const app = require('../../src/app');

describe('\'precio-consumo\' service', () => {
  it('registered the service', () => {
    const service = app.service('precio-consumo');

    assert.ok(service, 'Registered the service');
  });
});
