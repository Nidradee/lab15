var app = angular.module("dance", ['ngRoute']);

app.controller("shimmySparkle", function ($scope,inputService){
	$scope.clickMe= function(){
		var inputs= [
			$scope.input,
			$scope.noun,
			$scope.verb,
			$scope.adj,
			$scope.phase,
			$scope.word,
			$scope.name,

		];

		inputs.forEach(function(sparkleElements){
			inputService.setInput(sparkleElements);
		});

		/*inputService.setInput($scope.verb)
		inputService.setInput($scope.adj)
		inputService.setInput($scope.phase)
		inputService.setInput($scope.word)
		*/

		
}
    
})