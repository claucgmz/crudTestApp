const chai = require('chai');
const chaiHttp = require('chai-http');
var server = require('../app');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
  this.timeout(18000);

  it('should update a SINGLE user on api/users/<id> PUT', (done) => {
    chai.request(server)
      .get('/api/users')
      .end((err, res) => {
        chai.request(server)
          .put(`/api/users/${res.body[0].id}`)
          .set('content-type', 'application/x-www-form-urlencoded')
          .send({ first_name: 'Juan', last_name: 'Perez', city: 'Hermosillo', state: 'SON'} )
          .end((error, response) => {
            expect(response).to.have.status(200);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('first_name');
            response.body.should.have.property('last_name');
            response.body.should.have.property('id');
            response.body.should.have.property('stateCityId');
            setTimeout(done, 7000);
          });
      });
  });

  it('should return 404 error on api/users/<id> PUT', (done) => {
    chai.request(server)
      .get('/api/users')
      .end((err, res) => {
        chai.request(server)
          .put(`/api/users/${res.body[0].id}`)
          .set('content-type', 'application/x-www-form-urlencoded')
          .send({ first_name: 'Juan', last_name: 'Perez', city: 'Oaxaca', state: 'Oax'} )
          .end((error, response) => {
            expect(response).to.have.status(404);
            setTimeout(done, 7000);
          });
      });
  });
});
