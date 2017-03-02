var express = require('express')
var router = express.Router()
var request = require('request')

var config = require('./config')
var couch_url = config.couch_url

/*** Utils ***/
var logError = function(err) { console.log(err) }

/*** REST ***/
/* GET */
router.get('/', function(req, res, next) {
  res.send('get ok!')
})

/* PUT */

/* POST */
/*
 * Request params
 *   dbname: string
 * Response
 *   result body
 */
router.post('/db/_all_docs', function(req, res){
  let dbname = req.body.dbname
  let url = couch_url + '/' + dbname + '/_all_docs'
  request(url, (error, result) => {
    if(error){
      logError(error);
      res.send(error)
    }else{
      res.send(result.body)
    }
  })
})

/* DELETE */

module.exports = router