(function(){
  function config($stateProvider, $locationProvider, $firebaseObject){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
      .state('room-view', {
        url: '/room-view',
        controller: 'RoomViewCtrl as roomViewCtrl',
        templateUrl: '/templates/room_view.html'
      });
  }

  angular
    .module('blocChat',['ui.router', 'firebase'])
    .config(config);
})();
