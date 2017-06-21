var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );
var bodyParser = require('body-parser'); //need if doing a .post, but not for a .get
var user = require('../user');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

router.post('/', function(req, res){
  console.log('In base url post hit.', req.body);
  res.send('whatever from post');
});

module.exports = router;
