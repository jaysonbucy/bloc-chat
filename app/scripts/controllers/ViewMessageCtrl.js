(function(){
  function ViewMessageCtrl(Message, $scope){
    this.message = Message.getByRoomId($scope.room_title);
  }

  angular
    .module('blocChat')
    .controller('ViewMessageCtrl', ['Message', '$scope',  ViewMessageCtrl])
})();
