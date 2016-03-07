var app =angular.module("shimmy")

app.controller("shimmySparkle", function ($scope,inputService){
	$scope.clickMe= function(){
		console.log($scope.input)
		inputService.setInput($scope.input)
		inputService.setInput($scope.noun)
		/*inputService.setInput($scope.verb)
		inputService.setInput($scope.adj)
		inputService.setInput($scope.phase)
		inputService.setInput($scope.word)
		*/

		
}
    
})