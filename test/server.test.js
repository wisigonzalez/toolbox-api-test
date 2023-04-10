import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index.js';

chai.use(chaiHttp);

describe('API test', () => {
  it('GET /toolbox-api/v2/docs | should return 200', (done) => {
    chai
      .request(app)
      .get('/toolbox-api/v2/docs')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });

});

