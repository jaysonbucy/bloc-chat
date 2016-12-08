(function(){
  function Message($firebaseArray){
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    debugger;

    return {
      getByRoomId: function(roomId){
        debugger;
        messages.orderByChild("roomId").equalTo(roomId);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})();
