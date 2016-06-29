process.env.NODE_ENV = 'test';
const Browser = require('zombie');
const app = require('../app');
const http = require('http');

describe("Sign Up Functionality", function(){

  before(function(){
    this.server = http.createServer(app).listen(3000);
    this.browser= new Browser({site: 'http://localhost:3000'});
  });
  
  describe("checks the page",function(){
    before(function(done){
      this.browser.visit('/users/new', done);
    });
    it("expects welcome message", function(){
      this.browser.assert.text('#form-head', 'Please enter your details');
    });

    it("expect a form", function(){
      this.browser.assert.attribute('form', 'method', 'post');
      this.browser.assert.attribute('form', 'action', '/users/new');
      this.browser.assert.element('#username');
      this.browser.assert.element('#full-name');
      this.browser.assert.element('#email');
      this.browser.assert.element('button');
      this.browser.assert.attribute('button', 'value', 'submit');
    });
  });

  describe("expect a successful submission", function(){
    before(function(done){
      this.browser.visit('/users/new', done);
    });

    before(function(done){
      this.browser
        .fill('email', 'test@test.com')
        .fill('full-name', 'Test')
        .fill('username', 'tester')
        .pressButton('submit', done);
    });

    it('is successful', function(){
      this.browser.assert.success();
    });

    it('presents welcome page', function(){

    });


  });


  after(function(done){
    this.server.close(done);
  });
});
