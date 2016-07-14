angular.module('userService', [])
	.factory('userService', function($http){
		var userFactory = {

			authenticate : function(user) {
				return $http.post('/api/user/authenticate', {
					email : user.email,
					password : user.password
				});
			},

			getAll : function() {
				return $http.get('/api/user');
			},

			getById : function(id) {
				return $http.get('/api/user/' + id);
			},

			register : function(user){
				return $http.post('/api/user', user);
			},

			update : function(id) {
				return $http.post('/api/user/' + id);
			},

			changepassword : function(id, password) {
				return $http.post('/api/user/cp/' + id, {
					password : password
				});
			},

			remove : function(id) {
				return $http.post('/api/user/rm/' + id);
			}
		};

		return userFactory;

	});