var industryMdl = require('../models/industry.model.js');

module.exports = {

	all : function(req, res) {
		industryMdl.find({}, function(err, docs){
			if (err) {
				res.json(err);
			} else {
				res.json(docs);
			}
		});
	},

	get : function(req, res) {
		industryMdl.findOne({'_id' : req.params.id}, function(err, doc){
			if (err) {
				res.json(err);
			} else {
				res.json(doc);
			}
		});
	},

	new : function(req , res) {

		var newIndustry = new industryMdl({
			industry : req.body.industry
		});

		newIndustry.save(function(err){
			if (err) {
				res.json({
					success : false,
					message : err.message
				});
			} else {
				res.json({
					success : true,
					message : 'New industry is created.'
				});
			}
		});

	}
}