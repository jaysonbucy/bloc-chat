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
        .state('side-bar', {
          url: '/side-bar',
          controller: 'SideBarCtrl as sideBar',
          templateUrl: '/templates/side_bar.html'
        })
        .state('chat-window', {
          url: '/chat-window',
          controller: 'ChatWindowCtrl as chatWindow',
          templateUrl: '/templates/chat_window.html'
        });

  }

  angular
    .module('blocChat', ['ui.router'])
    .config(config);
})();
