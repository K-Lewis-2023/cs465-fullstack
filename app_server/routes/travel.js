
/* Travel Route */
var express = require('express');
var router = express.Router();

const controller = require('../controllers/travel');

/* Get travel page */
console.log('Inside app_server, routes, travel.js.');
router.get('/', controller.travel);

module.exports = router;