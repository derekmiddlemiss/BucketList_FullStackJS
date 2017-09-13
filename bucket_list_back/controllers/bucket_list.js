var express = require( 'express' );
var BucketListEntry = require( '../models/bucket_list_entry.js' );
var bucketListRouter = express.Router();
var MongoClient = require( 'mongodb' ).MongoClient;
var ObjectId = require( 'mongodb' ).ObjectId;
var db;

MongoClient.connect( 'mongodb://localhost:27017/bucket_list', function( err, database ){
  if ( err ) return;
  db = database;
});

// INDEX
bucketListRouter.get( '/', function( req, res ){
  db.collection( 'entries' ).find().toArray( function( err, results ){
    if ( err ) console.log( "Error: " + err.toString() );
    res.json( results );
  });
});

// CREATE
bucketListRouter.post( '/', function( req, res ){

  var entryParams = {
    'countryId': ObjectId(req.body.countryID),
    'date': req.body.date,
    'completed': false
  };

  var bucketListEntry = new BucketListEntry( entryParams );

  console.log( bucketListEntry );
  
  db.collection( 'entries' ).find( { "countryId": bucketListEntry.countryId }, {} ).
  toArray( function( err, results ) { 
  
    console.log( results );
    if ( err ) console.log( "Error: " + err.toString() );
    if ( results.length === 0 ) {
      db.collection( 'entries' ).insert( bucketListEntry );
      res.json( bucketListEntry );
    } else {
      res.json( null );
    }
 
  })

})

// UPDATE
bucketListRouter.put( '/:id', function( req, res) {

  console.log( "req.params.id", ObjectId(req.params.id) )

  var entryParams = {
    '_id': ObjectId( req.params.id ),
    'countryId': ObjectId(req.body.countryID),
    'date': req.body.date,
    'completed': req.body.completed
  }

  var bucketListEntry = new BucketListEntry( entryParams );

  console.log( bucketListEntry );

  db.collection( 'entries' ).replaceOne( { "_id": bucketListEntry._id }, bucketListEntry )

  res.json( bucketListEntry );

})

// U

module.exports = bucketListRouter;


