angular.module('loginController', [])
	.controller('loginController', function(userService, $location){
		var vm = this;

		vm.showError = false;
		vm.errorMsgs = [];

		vm.login = function(frm) {
			vm.showError = false;
			vm.errorMsgs =  [];

			if (frm.$valid) {
				userService.authenticate(vm.user)
					.success(function(data){

						if (data.success) {
							$location.path('/user_profile').search({id : data.id});
						} else {
							vm.errorMsgs.push(data.message);
							vm.showError = true;
						}

					});
			} else {
				getValidations(frm);
				vm.showError = true;
			}
		}

		function getValidations(frm) {

			if (frm.email.$error.required) {
				vm.errorMsgs.push('Email is required.');				
			}

			if (frm.email.$invalid && !frm.email.$error.required ) {
				vm.errorMsgs.push('Enter a valid Email');				
			}

			if (frm.password.$error.required) {
				vm.errorMsgs.push('Password is required');				
			}

		}

	});