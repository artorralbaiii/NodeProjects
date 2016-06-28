angular.module('MyApp', [])
	.controller('MainCtrl', function($scope){
		var vm = this;
		console.log(vm);
		vm.submitted = false;

		vm.submitData = function(state) {
			vm.submitted = true;
			console.log(state);
		}

	});