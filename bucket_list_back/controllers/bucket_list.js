var express = require( 'express' );
var BucketListEntry = require( '../models/bucket_list_entry.js' );
var bucketListRouter = express.Router();
var MongoClient = require( 'mongodb' ).MongoClient;
var db;

MongoClient.connect( 'mongodb://localhost:27017/bucket_list', function( err, database ){
  if ( err ) return;
  db = database;
});

module.exports = bucketListRouter;


