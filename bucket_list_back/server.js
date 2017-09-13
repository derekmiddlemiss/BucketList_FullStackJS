var express = require( 'express' );
var server = express();
var bodyParser = require( 'body-parser' );

server.use( bodyParser.json() );
server.use( require( './controllers' ) );
server.use( express.static( 'public' ) );

server.listen( 3000, function(){
  console.log( "Server running on port 3000" );
})

