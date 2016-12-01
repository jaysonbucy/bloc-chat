(function(){
  function MainCtrl(){
    this.mainTitle = "/assets/images/bloc-logo-white.png";
  }

  angular
    .module('blocChat')
    .controller('MainCtrl', MainCtrl);
})();
