angular.module('shimmy', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when("/shimmySparkle",
		{
			controller: "shimmySparkle",
			templateUrl:"shimmySparkle.html",
		});

		$routeProvider.when("/shimmyShake",
		{
			controller: "shimmyShake",
			templateUrl:"shimmyShake.html",
		});

		$routeProvider.when("/externalData",
		{
			controller: "externalData",
			templateUrl:"externalData.html",
		});

	})


/*var app = angular.module('bellyDance', ['ngRoute']);
app.config(function($routeProvider) {
$routeProvider
.when('/',
{
controller: 'shimmySparkle',
templateUrl: 'view1.html'
})
.when('/view2',
{
controller: 'shimmyShake',
templateUrl: 'view2.html'
})*/

