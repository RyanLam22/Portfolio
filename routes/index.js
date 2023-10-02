var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


module.exports = router;
