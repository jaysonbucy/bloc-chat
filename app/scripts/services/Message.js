(function(){
  function Message($firebaseArray){
    function getMessagesByRoomId(roomId){
          var messages = firebase.database().ref().child("messages").orderByChild("roomId");
          return $firebaseArray(messages.equalTo(roomId));
        }
    return{
      getMessagesByRoomId: getMessagesByRoomId
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})();
