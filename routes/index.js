var express = require('express');
var router = express.Router();
 const participantsController = require('../controllers/participantsController')
 const varController = require('../controllers/varController')

var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
    origin: 'https://lottery.corporacioncapsula.io/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/variables', cors(corsOptions), varController.list);
router.get('/update', cors(corsOptions), varController.update);
router.post('/participant', cors(corsOptions), participantsController.create);

module.exports = router;
