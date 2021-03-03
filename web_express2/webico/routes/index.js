var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FES Arabronx' });
});

router.get('/hola', function(req, res, next) {
  res.send("<h1> HOLA </h1>");
});
module.exports = router;
