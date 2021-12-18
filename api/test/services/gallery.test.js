const assert = require('assert');
const app = require('../../src/app');

describe('\'gallery\' service', () => {
  it('registered the service', () => {
    const service = app.service('gallery');

    assert.ok(service, 'Registered the service');
  });
});
