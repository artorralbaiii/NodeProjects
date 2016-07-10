angular.module('loginController', [])
	.controller('loginController', function(){
		var vm = this;

		vm.submitted = false;

		vm.login = function(isValid) {
			vm.submitted = true;

			if (isValid) {
				console.log('Login Service');
			}

		}
	});