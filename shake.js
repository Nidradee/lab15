 var app=angular.module("shimmy")

app.controller("shimmyShake",function ($scope,inputService){

	$scope.display= inputService.getInput();
	$scope.display= inputService.getNoun();
	/*$scope.display= inputService.getVerb();
	$scope.display= inputService.getAdj();
	$scope.display= inputService.getPhase();
	$scope.display= inputService.getWord();
	*/


})