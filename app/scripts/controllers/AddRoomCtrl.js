(function(){
  function AddRoomCtrl($uibModal){
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
    .controller('AddRoomCtrl', ['$uibModal', AddRoomCtrl])
})();
