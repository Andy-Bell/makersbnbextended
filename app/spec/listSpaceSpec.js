var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var chaiDom = require('chai-dom');
var app  = require('../app');

chai.use(chaiHttp);
chai.use(chaiDom);

describe ('List a new space', function() {

  it('Page has correct title', function(done) {
    chai.request(app).get('/spaces/new').end(function(err, res) {
      // expect(document.querySelector('h1')).not.to.be.empty
      console.log(res);
      expect(res.text.querySelector('#title')).to.contain.text('List');
      done();
    });
  });

//  it('Navigate to spaces/new, fill in details, submit redirects to spaces', function(done) {
//    chai.request(app).get('/spaces/new').end(function() {
//      chai.request(app).post('/spaces/new').send({ name: 'testname'  })
//      .end(function(err, res) {
//        expect(res).to.have.status(200);
//        done();
//      })
//    })
//  });
});
