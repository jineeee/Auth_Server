var express = require('express');
var router = express.Router();
const adminController = require('../Controller/AdminController');
const checkToken = require('../middelware/checkToken').checkToken;

router.get('/', checkToken, adminController.readUsers);

module.exports = router;
