(function(){
  function AddRoomCtrl($uibModal){
    this.name = '';
    this.open = function(){
      var modalOpen = $uibModal.open({
        templateUrl: 'new_room.html',
        controller: function($scope, $uibModalInstance){
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
          $scope.submit = function(){
            $uibModalInstance.close($scope.name);
          };
        }
      });
    };
    modalInstance.result.then(function (name) {
      var newRoom = firebase.database().ref().child("rooms");
      newRoom.push({"name":name});
    });
  }
  angular
    .module('blocChat')
    .factory('AddRoomCtrl', ['$uibModal', AddRoomCtrl]);
})();
