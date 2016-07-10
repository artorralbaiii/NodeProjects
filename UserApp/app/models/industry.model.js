var mongoose = require('mongoose');
var schema = mongoose.Schema;

var IndustrySchema = new schema({
	industry : String
});

module.exports = mongoose.model('Industry', IndustrySchema)