

describe("Sign Up Functionality", function(){

  before(function(){
    casper.start('http://localhost:8000');
  });

  it("expects welcome message", function(){
    casper.waitForSelector('#form-head', function(){
      casper.thenOpen('http://localhost:8000/users/new');
      '#form-head'.should.be.inDOM;
    });
  });



});
