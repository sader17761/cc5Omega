var myApp = angular.module( 'myApp', [] );

myApp.controller( 'MessageBoardController', function( MessageBoardService ){
  var vm = this;

  vm.getMessages = function(){
    console.log( 'in controller, getMessages');
    MessageBoardService.retrieveMessages().then( function(){
      vm.messages = MessageBoardService.data;
      console.log( 'back in controller with:', vm.messages );
    });
  }; //end getMessages
});
