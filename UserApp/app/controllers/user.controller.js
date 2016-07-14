var userMdl = require('../models/user.model.js');

module.exports = {

	all : function(req, res) {
		if (req.session.user) {
			userMdl.find({}, function(err, docs){
				if (err) {
					res.json(err);
				} else {
					res.json(docs);
				}
			});

		} else {
			res.json({
				success : false,
				message : 'Not authorized.'
			});
		}
	},

	get : function(req, res) {
		if (!req.session.user) {
			res.json({
				success : false,
				message : 'Not authorized.'
			});
		}

		userMdl.findOne({_id : req.params.id}, function(err, doc){
			if (err) {
				res.json(err);
			} else {
				res.json(doc);
			}
		});
	},

	authenticate : function(req, res) {
		userMdl.findOne({email : req.body.email})
			.select('password')
			.exec(function(err, user){
				if(err) {
					res.json({
						success : false,
						errorType : 'GENERIC_ERR',
						message : err.message
					});
				} else {

					if (user) {
						var isValidPassword = user.comparePassword(req.body.password);

						if (isValidPassword) {
							req.session.regenerate(function(){
								req.session.user = user;
								res.json({
									success: true,
									message : 'Authenticated.',
									id : user._id
								});
							});
						} else {
							res.json({
								sucess : false,
								errorType : 'INVALID_PWD',
								message : 'Invalid password!'
							});
						}
					} else {
						res.json({
							success : false,
							errorType : 'INVALID_USR',
							message : 'User doesn\'t exists!'
						});
					}
				}
			});
	},

	new : function(req, res) {
		var newUser = new userMdl({
			email : req.body.email,
			fullname : req.body.fullname,
			employeeNum : req.body.employeeNum,
			projectName : req.body.projectName,
			industryId : req.body.industryId,
			businessUnitId : req.body.businessUnitId,
			password : req.body.password
		});

		newUser.save(function(err){
			if(err){
				res.json({
					success : false,
					message : err.message
				});
			} else {
				res.json({
					success : true,
					message : 'New user is created.'
				});
			}
		});
	},

	edit : function(req, res) {

		if (!req.session.user) {
			res.json({
				success : false,
				message : 'Not authorized.'
			});
		}

		userMdl.findOne({_id : req.params.id}, function(err, user){
			if (err) {
				res.json({
					success : true,
					message: err.message
				});
			} else {			
				user.email = req.body.email,
				user.fullname = req.body.fullname,
				user.employeeNum = req.body.employeeNum,
				user.projectName = req.body.projectName,
				user.industryId = req.body.industryId,
				user.businessUnitId = req.body.businessUnitId
			}

			user.save(function(err){
				if(err){
					res.json({
						success : false,
						message : err.message
					});
				} else {
					res.json({
						success : true,
						message : 'User is updated.'
					})
				}
			});
		});
	},

	changePassword : function(req, res) {

		if (!req.session.user) {
			res.json({
				success : false,
				message : 'Not authorized.'
			})
		}

		userMdl.findOne({_id : req.params.id}, function(err, user){
			
			if (err) {
				res.json({
					success : false,
					message : err.message
				});
			} else {

				if (user) {
					user.password = req.body.password;
					
					user.save(function(err) {
						if (err) {
							res.json({
								success : false,
								message : err.message
							})
						} else {
							res.json({
								success : true,
								message : 'Password changed.'
							});
						}
					});				
				} else {
					res.json({
						success : false,
						message : 'User not found'
					});
				}
			}
		});
	},

	remove : function(req, res) {
		userMdl.findOne({_id : req.params.id}, function(err, user){
			if (err) {
				res.json({
					success : false,
					message : err.message
				});				
			} else {
				if (user) {
					user.remove(function(err){
						if (err) {
							res
							.json({
								success : false,
								message : err.message
							});
						} else {
							res.json({
								success : true,
								message : 'User successfully removed.'
							});
						}
					});
				} else {
					res.json({
						success : false,
						message : 'User not found!'
					});
				}
			}
		});
	},

	logout : function(req, res){
		req.session.destroy(function(err){
			if (err) throw err;
			res.json({
				success : true,
				message : 'Logged out!'
			});
		});
	}
}