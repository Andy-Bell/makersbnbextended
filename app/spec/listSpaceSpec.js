process.env.NODE_ENV = "test";

const Browser = require('zombie');

Browser.localhost('makersbnb', 3000);


describe('Listing Spaces', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/spaces/new', done);
  });

  describe('New Space', function() {

    before(function(done) {
      browser
        .fill('spacename', 'Cozy loft')
        .fill('description', 'So cozy!')
        .fill('price_per_night', '3000')
        .fill('available_from', '01/01/17')
        .fill('available_to', '01/01/18')
        .pressButton('List my Space', done);
    });

    it('after submit redirects to -book a space- page', function() {
      browser.assert.url({ pathname: '/spaces' });
    });

    it('displays the newly entered space', function(){
      browser.assert.text('ul li:nth-child(1)', 'Cozy loft');
    });

  });
});
