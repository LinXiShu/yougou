let mysql = require('mysql');
var express = require("express");
var bodyParser = require('body-parser')
var app = express();

function query(sql, params, callback) {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: '1802'
	});

	connection.connect();

	connection.query(sql, params, function(error, results, fields) {
		if(error) throw error;
		//console.log(results);
		callback(results);
	});
	connection.end();
}



app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(function(req,res,next){
	//cors
	res.append("Access-Control-Allow-Origin","*");
	next();
})

app.post("/register", (req, res) => {
	// console.log(req.body);
	query("INSERT INTO yonghu SET ?", {
		username: req.body.username,
		password: req.body.password
	},(results)=>{
		res.send("success")
	})
})

app.listen(54321)