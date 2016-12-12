(function() {
  function UserName($cookies, $uibModal, $rootScope) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        var modal = $uibModal.open({
          backdrop: 'static',
          keyboard: false,
          templateUrl: '/templates/create_user.html',
          controller: function($scope, $uibModalInstance){
            $scope.userReuired = true;
            $scope.submit = function(){
              if ($scope.user.$invlaid){
                return false;
              } else {
                $uibModalInstance.close($scope.user);
              }
            };
          }
        });
        modal.result.then(function (user){
          $cookies.put('blocChatCurrentUser', user);
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope', UserName]);
})();
