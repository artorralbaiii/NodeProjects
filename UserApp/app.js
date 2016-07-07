// Vendor Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo/es5')(session);

// Custom Modules
var config = require('./config.js');

mongoose.connect(config.dbUri, function(err) {
	if(err) {
		console.log(err);
		return;
	} else {
		console.log('Connected to database');
	}
});

var app = express();

app.use(bodyParser.urlencoded({extended : false, keepExtensions: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var sessionMiddleware = session({
	secret : config.secretKey,
	cookie : {maxAge : 60*60*1000},
	saveUninitialized : true,
	resave : true,
	store : new mongoStore({
		mongooseConnection: mongoose.connection
	})
});

var api = require('./app/routes/api.js')(app, express);
app.use('/api', api);

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});

app.use(sessionMiddleware);

app.listen(config.port, '0.0.0.0', function(){
	console.log('Application Server on port : ' + config.port );
});
