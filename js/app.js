var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/post/:id', {
			controller: 'PostController',
			templateUrl: 'views/posts.html'
		})
		.otherwise('/', {
			redirectTo: '/'
		});
});