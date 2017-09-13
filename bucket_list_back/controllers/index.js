var express = require('express');
var router = express.Router();
var path = require('path');

router.use( '/api/bucket-list', require( './bucket_list' ) );
router.use( '/api/countries', require( './countries' ) );

router.get( '/', function( req, res ){
  res.sendFile( path.join( __dirname + '/../public/index.html' ) );
})

module.exports = router;