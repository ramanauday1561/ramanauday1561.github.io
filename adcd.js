var myApp = angular.module('simpleModule',[]);

myApp.controller('MyController',['$scope',function ($scope){
	$scope.title = 'Fucking Change';
}]);