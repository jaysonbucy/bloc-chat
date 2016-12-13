(function(){
  function MainCtrl(Room, Message, $rootScope, $scope){
    this.mainTitle = "/assets/images/bloc-logo-white.png";

    this.roomArray = Room;
    $scope.rooms = this.roomArray.all;

    this.messageService = Message;

    this.setCurrentRoom = function(room){
      $rootScope.currentRoom = room.name;
      $rootScope.currentRoomId = room.$id;
      var roomId = room.$id;
      $rootScope.messages = Message.getMessagesByRoomId(roomId);
    }

  }

  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', 'Message', '$rootScope', '$scope', MainCtrl]);
})();
