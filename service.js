var app =angular.module('shimmy');
	app.factory('inputService', function(){
		var input =  "";
		var	 noun= "";
		

		return {
			setInput:function(viewInput,viewNoun) {
			    input = viewInput;
			    noun = viewNoun;
				console.log(input);
				//console.log(noun);

			},

			getInput:function(){
				return input;

			},
			getNoun:function(){
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
