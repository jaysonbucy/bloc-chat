(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
        .state('main', {
          url: '/',
          controller: 'MainCtrl as main',
          templateUrl: '/templates/main.html'
        })
        .state('room', {
          url: '/room',
          controller: 'MainCtrl as main',
          templateUrl: '/templates/chat_room.html'
        });

  }

  angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'ngCookies', 'firebase'])
    .config(config)
})();
