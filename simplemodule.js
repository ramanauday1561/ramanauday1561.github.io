var myApp = angular.module('simpleModule',[]);
myApp.controller('MyController', ['$scope', function($scope) { 
	$scope.title = 'Simple Module';
	$scope.result = 0;
	
	$scope.add = function(a, b) { 
		$scope.result = a + b; };
		
	$scope.multiple = function(a, b) { 
		$scope.result = a* b; }; 
}]);
