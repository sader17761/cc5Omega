// requires
var express = require( 'express' );
var app = express();
var index = require( './modules/routes/index' );
var register = require( './modules/routes/register' );
var messages = require( './modules/routes/messages' );


// uses
app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/register', register );
app.use( '/messages', messages );



// globals
var port = process.env.PORT || 8765;


// spin up server (must come after uses)
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end spin up
