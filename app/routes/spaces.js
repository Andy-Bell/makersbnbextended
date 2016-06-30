environment = process.env.NODE_ENV || 'development';
var monk = require('monk');
var db = monk('localhost:27017/makersbnb' + environment);
var express = require('express');
var router = express.Router();
var spaces = db.get('spaces');

router.get('/new', function(req, res, next) {
  res.render('spaces/new');
});

router.get('/', function(req, res, next) {
  var data = spaces.find({}); 
  data.on('success', function(docs) {
    res.render('spaces/index', {
      "spacesList" : docs
    });
  });
});

router.post('/new', function(req, res, next) {
  var space = {
    spacename: req.body.spacename,
    // owner_id: need to add this when 
    description: req.body.description,
    price_per_night: req.body.price_per_night,
    available_from: req.body.available_from,
    available_to: req.body.available_to
  };
  spaces.insert(space);
  res.redirect('/spaces');
});

module.exports = router;
