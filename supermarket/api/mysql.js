


var mysql = require('mysql');

function query(sql, params, callback) {
	var connection = mysql.createConnection({

		host: 'localhost',
		user: 'root',
		password: '',
		database: 'pro4'

	});

	connection.connect();

	var query = connection.query(sql, params, function(error, results, fields) {

		if(error) throw error;

		//console.log(results);
		
		callback(results);

	});

	console.log(query.sql);
	     
	connection.end();
}

module.exports = {
	query
}


