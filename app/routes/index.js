var express = require('express');
var router = express.Router();

router.get('/spaces/new', function(req, res, next) {
  res.render('new-space');
});

router.get('/spaces', function(req, res, next) {
  var db = req.db;
  var spaces = db.get('spacecollection');
  spaces.find({}).then((docs) => {console.log(docs);});
  res.render('spaces');
});

router.post('/spaces/new', function(req, res, next) {
//some shit with db
  res.redirect('/spaces');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
