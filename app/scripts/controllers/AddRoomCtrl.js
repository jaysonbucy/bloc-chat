(function(){
  function AddRoomCtrl($scope, $uibModal){
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    $scope.submit = function(){
      $uibModalInstance.close($scope.name);
    };
  }

  angular
    .module('blocChat')
    .controller('AddRoomCtrl', ['$scope','$uibModal', AddRoomCtrl])
})();
