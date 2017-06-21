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

  vm.logIn = function(){
    console.log('In logIn controller');
    MessageBoardService.sendLogIn();
  };

  vm.register = function(){
    console.log('In register controller');
    var credentials = {
      username: vm.usernameRegister,
      password: vm.passwordRegister
    };
    MessageBoardService.sendRegister(credentials).then(function(){
      // clear out inputs when returned from register call
      vm.usernameRegister = '';
      vm.passwordRegister = '';
    });
  };

  vm.logOut = function(){
    console.log( 'logging out', vm.name );
    vm.hasName = false;
    vm.name = '';
  };

  vm.sendMessage = function(){
    // used to toggle name input
    if( !vm.hasName ){
      vm.hasName = true;
    }

    if( vm.body === '' ){
      alert( 'do NOT spam us with your empty messages!!!' );
    } // end empty message
    else{
      // create object to send
      var newMessage = {
        name: vm.name,
        body: vm.body
      }; // end newMessage
      console.log( 'in controller sending:', newMessage );
      MessageBoardService.newMessage( newMessage ).then( function(){
        console.log( 'back in controller after post' );
        vm.getMessages();
        vm.body = '';
      });
    } // end message exxists
  };

});
