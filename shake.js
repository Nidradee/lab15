 var app=angular.module("shimmy")

app.controller("shimmyShake",function ($scope,inputService){
	//var inputSerivce = myService.get();
	$scope.display = inputService.getInput();
	/*$scope.displayNoun= inputService.getNoun();
	/*$scope.display= inputService.getVerb();
	$scope.display= inputService.getAdj();
	$scope.display= inputService.getPhase();
	$scope.display= inputService.getWord();
	*/


})