var appControllers = angular.module('CodeForGoodApp.controllers', []);

/* I'm creating two arrays of JS objects only to mimic the future app behaviour  */

appControllers.controller('mainController', function($scope, $http) {

	var url = 'http://ec2-54-170-122-68.eu-west-1.compute.amazonws.com:8000/allusers/';
	$http.get(url).
		success(function(data)) {
			$scope.users = data;
			console.log(data);
		});



    $scope.chooseUser = function($index) {
    	var username = $scope.users[$index].name;
    	alert(username);
    }

});

appControllers.controller('messageController', function($scope, $http) {



    $scope.messages = [
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Hello blabla", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Yoyo blabla yo", timestamp: "00:12", type: 1},
    {text: "Yoyo yo", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Hello blabla", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Yoyo blabla yo", timestamp: "00:12", type: 1},
    {text: "Yoyo yo", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Hello blabla", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Yoyo blabla yo", timestamp: "00:12", type: 1},
    {text: "Yoyo yo", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Hello blabla", timestamp: "00:12", type: 1},
    {text: "Hi blabla", timestamp: "00:12", type: 0},
    {text: "Yoyo blabla yo", timestamp: "00:12", type: 1}
    ];

    $scope.btnSend = function() {
    	var msg = $("#sendId").val();
    	if (msg != "") {
    		$scope.messages.push({text: $("#sendId").val(), timestamp: "00:12", type: 0});
    	}
    	$("#sendId").val("");
    }

});
