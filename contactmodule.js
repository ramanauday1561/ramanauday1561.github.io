var myApp = angular.module('ContactModule',[]);
myApp.controller('ContactController',['$scope',function($scope){
	$scope.contact = {
		name : "Ramana Uday",
		email : "ramanauday1561@gmail.com",
		phone : "9832749302"
	};
	$scope.calculate=function(a,b){
		return (a+b)*3;
	}
}]);