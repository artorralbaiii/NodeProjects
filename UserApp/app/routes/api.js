module.exports = function(app, express) {

	var userController = require('../controllers/user.controller.js');
	var buController = require('../controllers/businessunit.controller.js');
	var industryController = require('../controllers/industry.controller.js');

	var api = express.Router();

	// Business Unit API's
	api.get('/businessunit', buController.all);
	api.get('/businessunit/:id', buController.get);
	api.post('/businessunit', buController.new);

	// Industry API's
	api.get('/industry', industryController.all);
	api.get('/industry/:id', industryController.get);
	api.post('/industry', industryController.new);

	// User API's
	api.get('/user/logout', userController.logout);
	api.get('/user', userController.all);
	api.get('/user/:id', userController.get);
	api.post('/user/authenticate', userController.authenticate);
	api.post('/user', userController.new);
	api.post('/user/:id', userController.edit);
	api.post('/user/cp/:id', userController.changePassword);
	api.post('/user/rm/:id', userController.remove);

	return api;
}