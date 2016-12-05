(function(){
  function MainCtrl(Room, $scope){
    this.mainTitle = "/assets/images/bloc-logo-white.png";
    this.roomArray = Room;
    $scope.rooms = this.roomArray.all;
  }

  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', '$scope', MainCtrl]);
})();
;
