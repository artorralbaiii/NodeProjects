var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/data/:name', function(req, res){

	console.log('Parameter: ' + req.params.name);

	var products = [
			{'emp_name' : 'Jong' , 'emp_id' : '0001', 'Position' : 'Application Developer' },
			{'emp_name' : 'Czarlyn' , 'emp_id' : '0002', 'Position' : 'Salesforce Developer' },
			{'emp_name' : 'Andelyn' , 'emp_id' : '0003', 'Position' : 'Flight Attendant' }
	];



	res.json(products);
});

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
	console.log('Server on 3000');
});

