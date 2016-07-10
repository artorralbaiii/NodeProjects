var businessUnitMdl = require('../models/businessunit.model.js');

module.exports = {

	all : function(req, res){
		businessUnitMdl.find({}, function(err, docs){
			if (err) {
				res.json(err);
			} else {
				res.json(docs);
			}
		});
	},

	get : function(req, res){
		businessUnitMdl.findOne({_id : req.params.id}, function(err, doc){
			if (err) {
				res.json(err);
			} else {
				res.json(doc);
			}
		});
	},

	new : function(req , res) {
		var newBu = new businessUnitMdl({
			businessUnit : req.body.businessUnit
		});

		newBu.save(function(err) {
			if (err) {
				res.json({
					success : false,
					message : err.message
				});
			} else {
				res.json({
					success : true,
					message : 'New business unit is created.'
				});
			}
		})
	}
}