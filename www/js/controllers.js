var appControllers = angular.module('CodeForGoodApp.controllers', []);

/* I'm creating two arrays of JS objects only to mimic the future app behaviour  */

appControllers.controller('mainController', function($scope, $http) {
    $scope.users = [
    {name: "user1", country: "Africa"},
    {name: "user2", country: "Africa"},
    {name: "user3", country: "Africa"},
    ];
});

appControllers.controller('messageController', function($scope, $http) {
    $scope.messages = [
    {text: "Hi blabla", timestamp: "00:12"},
    {text: "Hello blabla", timestamp: "00:12"}
    ];

    $scope.btnSend = function() {
    	var msg = $("#sendId").val();
    	if (msg != "") {
    		$scope.messages.push({text: $("#sendId").val(), timestamp: "00:12"});
    		$("#sendId").val("");
    	}
    }

});

appControllers.controller('btnSendController', function($scope) {
    alert('clicked!');
});