const assert = require('assert');
const app = require('../../src/app');

describe('\'adicionales\' service', () => {
  it('registered the service', () => {
    const service = app.service('adicionales');

    assert.ok(service, 'Registered the service');
  });
});
