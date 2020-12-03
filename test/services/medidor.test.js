const assert = require('assert');
const app = require('../../src/app');

describe('\'medidor\' service', () => {
  it('registered the service', () => {
    const service = app.service('medidor');

    assert.ok(service, 'Registered the service');
  });
});
