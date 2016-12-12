(function(){
  function Message($firebaseArray, $cookies){
    return{
      getMessagesByRoomId: function(roomId){
        var messages = firebase.database().ref().child("messages").orderByChild("roomId");
        return $firebaseArray(messages.equalTo(roomId));
      }
      send: function(roomId, message){
        var currentUser = $cookies.get('blocChatCurrentUser');
        var time = new Date();
        time = time.getHours() + ':' + time.getMinutes();
        var newMessage = {
          content: message,
          roomId: roomId,
          sentAt: time,
          username: currentUser
        };
        messages.$add(newMessage);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message])
})();
