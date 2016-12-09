(function(){
  function Message($firebaseArray){
    function getMessagesByRoomId(roomId){
          var messages = firebase.database().ref().child("messages");
          return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
        }
    return{
      getMessagesByRoomId: getMessagesByRoomId
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message])
})();
