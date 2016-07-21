var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new schema({
	email : {type : String, required : true, index : {unique : true}},
	fullname : {type : String, required : true},
	employeeNum : {type : String, required : true},
	projectName : {type : String, required : true},
	industryId : {type : schema.Types.ObjectId, ref : 'Industry', required : true},
	businessUnitId : {type : schema.Types.ObjectId, ref : 'BusinessUnit', required : true},
	password : {type : String, required : true, select : false}
});

// Encrypt Password
UserSchema.pre('save', function(next){
	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.hash(user.password, null, null, function(err, hash){
		if(err) return next(err);

		user.password = hash;
		next();
	});
});

UserSchema.methods. comparePassword = function(password){
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);

