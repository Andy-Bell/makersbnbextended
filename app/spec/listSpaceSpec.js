process.env.NODE_ENV = "test";

const Browser = require('zombie');
const http = require('http');
const app = require('../app');

describe('Listing Spaces', function() {

  before(function(done) {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({site: 'http://localhost:3000'});
    this.browser.visit('/spaces/new', done);
  });

  describe('New Space', function() {

    before(function(done) {
      this.browser
        .fill('spacename', 'Cozy loft')
        .fill('description', 'So cozy!')
        .fill('price_per_night', '3000')
        .fill('available_from', '01/01/17')
        .fill('available_to', '01/01/18')
        .pressButton('List my Space', done);
    });

    it('after submit redirects to -book a space- page', function() {
      this.browser.assert.url({ pathname: '/spaces' });
    });

    it('displays the newly entered space', function(){
      this.browser.assert.text('ul li:nth-child(1)', 'Cozy loft');
    });

  });

  after(function(done){
      this.server.close(done);
    });
});
