// Create app
var myApp = angular.module("myApp", ["ui.router"]);

// Configure app
myApp.config(function($stateProvider) {
	$stateProvider
		.state("home", {
			url:'',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state("process7", {
			url:'/process7',
			templateUrl: 'templates/process7.html',
			controller: 'Process7Controller'
		})
		.state("process8", {
			url:'/process8',
			templateUrl: 'templates/process8.html',
			controller: 'Process8Controller'
		})
		.state("process9", {
			url:'/process9',
			templateUrl: 'templates/process9.html',
			controller: 'Process9Controller'
		})
		.state("process10", {
			url:'/process10',
			templateUrl: 'templates/process10.html',
			controller: 'Process10Controller'
		})
})

.controller('Process7Controller', function($scope, $http) {
	$scope.number = 7;
})

.controller('Process8Controller', function($scope, $http) {
	$scope.number = 8;
})

.controller('Process9Controller', function($scope, $http) {
	$scope.number = 9;
})

.controller('Process10Controller', function($scope, $http) {
	$scope.number = 10;
})

// Landing page controller
myApp.controller("HomeController", function ($scope, $http) {
	
})

myApp.controller("MainController", function ($scope, $http) {

})

