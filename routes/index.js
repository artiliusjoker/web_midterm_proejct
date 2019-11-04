var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});
router.get('/search', function(req, res, next) {
  res.render('pages/web/search', { title: 'Searched' });
});
router.get('/blog', function(req, res, next) {
  res.render('pages/web/blog', { title: 'Blog' });
});
router.get('/regular', function(req, res, next) {
  res.render('pages/web/regular', { title: 'Reviews' });
});
router.get('/shop', function(req, res, next) {
  res.render('pages/web/shop', { title: 'Shop' });
});
router.get('/contact', function(req, res, next) {
  res.render('pages/web/contact', { title: 'Contact' });
});
router.get('/product', function(req, res, next) {
  res.render('pages/web/product', { title: 'Contact' });
});
module.exports = router;
