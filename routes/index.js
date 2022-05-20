var express = require('express');
var router = express.Router();
 const participantsController = require('../controllers/participantsController')
 const varController = require('../controllers/varController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/variables', varController.list);
router.get('/update', varController.update);
router.post('/participant', participantsController.create);

module.exports = router;
