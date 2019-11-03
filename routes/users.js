var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/reset', function(req, res, next) {
  res.render('pages/users/forgotpass', { title: 'Reset password' });
});
router.get('/signin', function(req, res, next) {
  res.render('pages/users/signin', { title: 'Sign In' });
});
router.get('/signup', function(req, res, next) {
  res.render('pages/users/signup', { title: 'Sign Up' });
});
router.get('/cart', function(req, res, next) {
  res.render('pages/users/cart', { title: 'Your cart' });
});
router.get('/update', function(req, res, next) {
  res.render('pages/users/update', { title: 'Update user info' });
});
router.get('/cart/delivery', function(req, res, next) {
  res.render('pages/users/delivery', { title: 'Delivery info' });
});
module.exports = router;
