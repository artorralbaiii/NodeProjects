angular.module('appRoutes', ['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'app/views/pages/login.page.html',
				controller : 'loginController',
				controllerAs : 'scope'				
			})

			.when('/user_profile', {
				templateUrl : 'app/views/pages/profile.page.html'
			})

			.otherwise({redirectTo : '/'});

		$locationProvider.html5Mode({
			enabled : true,
			requireBase : false
		});
	});