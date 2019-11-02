var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:username/signin', function(req, res, next) {
  res.render('pages/users/signin', { title: 'Sign In Successfully' });
});
router.get('/:username/signup', function(req, res, next) {
  res.render('pages/users/signin', { title: 'Sign Up Successfully' });
});
router.get('/:username/cart', function(req, res, next) {
  res.render('pages/users/cart', { title: 'Your cart' });
});
router.get('/:username/update', function(req, res, next) {
  res.render('pages/users/update', { title: 'Update user info' });
});
router.get('/:username/cart/delivery', function(req, res, next) {
  res.render('pages/users/delivery', { title: 'Delivery info' });
});
module.exports = router;
