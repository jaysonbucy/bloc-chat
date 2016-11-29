(function(){
	function RoomViewCtrl(){
		this.title = "Bloc Chat";
	}

	angular
		.module('blocChat')
		.controller('RoomViewCtrl', RoomViewCtrl);
})();
