angular.module('appRoutes', ['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'app/views/pages/login.page.html',
				controller : 'loginController',
				controllerAs : 'scope'				
			});

		$locationProvider.html5Mode({
			enabled : true,
			requireBase : false
		});
	});