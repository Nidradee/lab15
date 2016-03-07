/*var = app angular.module("shimmy")

app.controller("externalData", function ($scope,$http){
	$http.get("data.json").success(function (response){
		$scope.myData = response;
	});

});







/*var app = angular.module('httpExample', []);
	.controller('display', [ 'reddit', function (reddit, $http){
		var display =this;

		console.log(reddit);
	}]);*/


/*angular.module("httpExample")
	.factory( 'reddit', ["$http", function ($http){		
		var redditData

	$http({
		url:'http://reddit.com/r/aww/.json'
		method: "GET"
	}) 

	 .then( function success(response) {
	 	redditData = response.data;
	}, function failure (response) {

	});

	 return  redditData;

	}]);*/