angular.module('MyApp',['ui.grid'])
	.controller('MainController', function(){
		var vm = this;

		vm.gridData = [
			{'firstName' : 'Andres', 'lastName' : 'Torralba'},
			{'firstName' : 'Czarlyn', 'lastName' : 'Torralba'}
		];

		vm.gridOptions = {
			'data' : 'main.gridData'
		};

	})