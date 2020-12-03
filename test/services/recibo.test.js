const assert = require('assert');
const app = require('../../src/app');

describe('\'recibo\' service', () => {
  it('registered the service', () => {
    const service = app.service('recibo');

    assert.ok(service, 'Registered the service');
  });
});
