var app = angular.module('dance');
	app.factory('inputService', function(){
		var input = [];
		//var	 noun= "";
		

		return {
			setInput:function(viewInput) {
			    input.push(viewInput);
			    //noun = viewNoun;
				console.log(input);
				//console.log(noun);

			},

			getInput:function(){
				return input;

			},
			/*getNoun:function(){
				return noun;

			},
			/*getVerb:function(){
				return verb;

			},
			getAdj:function(){
				return adj;

			},
			getInput:function(){
				return phase;

			},
			getInput:function(){
				return word;

			}*/

			
		

			
		}

});
