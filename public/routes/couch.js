var express = require('express');
var router = express.Router();

/*** Utils ***/
var logError = function(err) { console.log(err); }

/*** REST ***/
/* GET */
router.get('/', function(req, res, next) {
  res.send('get ok!')
});

/* PUT */

/* POST */

/* DELETE */

module.exports = router;