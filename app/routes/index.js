var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Sign Up page. */
router.get('/users/new/', function(req, res) {
  res.render('users/new', { title: 'Sign Up' });
});

module.exports = router;
