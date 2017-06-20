myApp.service( 'MessageBoardService', function( $http ){
  var sv = this;

  sv.retrieveMessages = function(){
    console.log( 'in service, retrieveMessages' );
  }; //end retrieveMessages
}); //end service
