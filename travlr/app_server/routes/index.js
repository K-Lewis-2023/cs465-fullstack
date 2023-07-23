var express = require('express');
var router = express.Router();

//Controller object w/ location
const ctrlMain = require('../controllers/main');

/* GET home page. */
console.log('Inside app_server, routes, index.js'); //Output to Console
router.get('/', ctrlMain.index); //Get Index

module.exports = router;
