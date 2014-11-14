angular.module('CodeForGoodApp', [
  'CodeForGoodApp.controllers',
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/main", {templateUrl: "partials/main.html", controller: "mainController"}).
	when("/message", {templateUrl: "partials/message.html", controller: "messageController"}).
	otherwise({redirectTo: '/main'});
}]);

