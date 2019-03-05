'use strict';

const mock = require('egg-mock');

describe('test/speak-sdk.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/speak-sdk-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, speakSdk')
      .expect(200);
  });
});
