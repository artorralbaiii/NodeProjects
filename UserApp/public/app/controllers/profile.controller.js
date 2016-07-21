angular.module('profileController', [])
	.controller('profileController', function($location, $routeParams, userService) {

		var vm = this;
		vm.user = {};

		if($routeParams.id) {
			userService.getById($routeParams.id)
				.success(function(data){
					if (data.success) {
						console.log(data.user)
						vm.user = data.user;
					}
				});
		} else {
			$location.path('/');
		}

	});