// requires
var express = require( 'express' );
var app = express();
var index = require( './modules/routes/index' );
var messages = require( './modules/routes/messages' );
// uses
app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/messages', messages );

// globals
var port = process.env.PORT || 8765;

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end spin up
