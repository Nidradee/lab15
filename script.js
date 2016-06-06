var app = angular.module('dance', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider.when("/shimmySparkle",
		{
			controller: "shimmySparkle",
			templateUrl:"shimmySparkle.html",
		})

		.when("/shimmyShake",
		{
			controller: "shimmyShake",
			templateUrl:"shimmyShake.html",
		})

		.when("/externalData",
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

