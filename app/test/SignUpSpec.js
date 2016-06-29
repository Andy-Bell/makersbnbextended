var expect = require('chai').expect;
var request = require('request');
var chai = require('chai');
var chaiHTTP = require('chai-http');
var app = require('../app');
var chaiDOM = require('chai-dom');

chai.use(chaiHTTP);
chai.use(chaiDOM);


describe("Sign Up Functionality", function(){

  describe("Page Exists", function(){
    it("returns a successful status code", function(done){
      chai.request(app).get('/users/new').end(function(err, res){
        expect(res).to.have.status(200);
        done();
      });
    });
    it("expects welcome message", function(done){
      chai.request(app).get('/users/new').end(function(err, res, body){
        console.log("===========================")
        console.log(err);
        console.log("===========================")
        console.log(res);
        console.log("===========================")
        console.log(body);
        console.log("===========================")
        var document = res;
        expect(document).to.have.html('Please enter your details below');
        done();
      });
    });
  });
});
