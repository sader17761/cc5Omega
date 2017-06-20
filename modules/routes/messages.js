var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );

router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

router.get( '/', function( req, res ){
  console.log( 'messages get call' );
  res.send( 'caCaw!!!' );
}); //end messages get call

module.exports = router;
