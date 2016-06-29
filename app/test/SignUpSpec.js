const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe("Sign Up Functionality", function(){
  const browser = new Browser();

  before(function(done){
    browser.visit('/users/new', done);
  });

  it("expects welcome message", function(){
    browser.assert.text('#form-head', 'Please enter your details');
  });

  it("expect a form", function(){
    browser.assert.attribute('form', 'method', 'post');
    browser.assert.attribute('form', 'action', '/users/new');
    browser.assert.element('#username');
    browser.assert.element('#full-name');
    browser.assert.element('#email');
    browser.assert.element('button');
    browser.assert.attribute('button', 'value', 'submit');
  });

  describe("expect a successful submission", function(){
    before(function(done){
      browser
        .fill('email', 'test@test.com')
        .fill('full-name', 'Test')
        .fill('username', 'tester')
        .pressButton('submit', done);
    });

    it('is successful', function(){
      browser.assert.success();
    });

    it('presents welcome page', function(){

    });


  });



});
