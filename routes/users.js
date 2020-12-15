var express = require('express');
var router = express.Router();
const userController = require('../Controller/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

module.exports = router;
