var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BusinessUnitSchema = new schema({
	businessUnit : String
});

module.exports = mongoose.model('BusinessUnit', BusinessUnitSchema);