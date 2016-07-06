var app = angular.module('myApp',['ui.bootstrap','ui.select','ngSanitize']);

app.controller('MainCtrl', function(DataService, $http) {
	var vm = this;
	vm.states	 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
	vm.disabled = undefined;


	vm.disable = function() {
    	vm.disabled = true;
  	};

	vm.getEmployees = function(val) {
		return DataService.employees(val)
		.then(function(response){
			return response.data.map(function(item){
				return item.emp_name;
			});
		});
	}


  vm.address = {};
  vm.refreshAddresses = function(address) {
  	vm.addresses = [
  	{'id' : 1, 'empname' : 'Andres'},
  	{'id' : 2, 'empname' : 'Czarlyn'}
  	];
  }

});

app.factory('DataService',function($http){
	var dataServiceFactory = {};

	dataServiceFactory.employees = function(val) {
		return $http.get('/data/' + val);
	};

	return dataServiceFactory;
});

