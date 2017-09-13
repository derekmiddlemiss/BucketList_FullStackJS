var express = require('express');
var router = express.Router();
var path = require('path');

router.use( '/api/bucket-list', require( './bucket_list' ) );
router.use( '/api/countries', require( './countries' ) );

module.exports = router;