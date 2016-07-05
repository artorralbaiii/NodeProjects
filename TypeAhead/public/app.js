var app = angular.module('myApp', ['ui.bootstrap','ui.select', 'ngSanitize']);

app.controller('MainCtrl', function(DataService, $scope) {
	var vm = this;
	vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

	vm.getEmployees = function(val) {
		return DataService.employees(val)
		.then(function(response){
			return response.data.map(function(item){
				return item.emp_name;
			});
		});
	}
});

app.factory('DataService',function($http){
	var dataServiceFactory = {};

	dataServiceFactory.employees = function(val) {
		return $http.get('/data/' + val);
	};

	return dataServiceFactory;
});

