myApp.service( 'MessageBoardService', function( $http ){
  var sv = this;

  sv.retrieveMessages = function(){
    console.log( 'in service, retrieveMessages' );
    return $http({
      method: 'GET',
      url: '/messages'
    }).then( function( response ){
      console.log( 'in service back from server with:', response );
      sv.data = response.data;
    }); // end http
  }; //end retrieveMessages
}); //end service
