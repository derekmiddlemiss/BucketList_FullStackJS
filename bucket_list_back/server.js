var express = require( 'express' );
var server = express();
var bodyParser = require( 'body-parser' );

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


server.use( bodyParser.json() );
server.use( require( './controllers' ) );
server.use( express.static( 'public' ) );

server.listen( 3000, function(){
  console.log( "Server running on port 3000" );
})



