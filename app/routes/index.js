var express = require('express');
var router = express.Router();

router.get('/spaces/new', function(req, res, next) {
  res.render('new');
});

// router.post('/spaces/new', function(req, res, next) {
//   res.send('hi');
//   redirect('/spaces')
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
