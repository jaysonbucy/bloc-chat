(function(){
  function MainCtrl(Room, $uibModal, $scope){
    this.mainTitle = "/assets/images/bloc-logo-white.png";
    this.roomArray = Room;
    $scope.rooms = this.roomArray.all;

    this.openModal = function(){
      var modal = $uibModal.open({
        templateUrl: '/templates/new_room.html',
        controller: function($scope, $uibModalInstance){
          $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
          };
          $scope.submit = function(){
            $uibModalInstance.close($scope.name);
          };
        }
      });
        modal.result.then(function (name){
          firebase.database().ref().child("rooms").push({"name": name});
        });
      };
  }

  angular
    .module('blocChat')
    .controller('MainCtrl', ['Room', '$uibModal', '$scope', MainCtrl]);
})();
