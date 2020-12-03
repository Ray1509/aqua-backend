const assert = require('assert');
const app = require('../../src/app');

describe('\'zona\' service', () => {
  it('registered the service', () => {
    const service = app.service('zona');

    assert.ok(service, 'Registered the service');
  });
});
