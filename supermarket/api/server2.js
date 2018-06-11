


var express = require("express");

var db = require("./mysql.js");

var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(function(req,res,next){

    res.append("Access-Control-Allow-Origin","*");

    next();

})

app.get("/", (req, res) => {

    res.send("hello LinXiShu");

})

app.post("/signins", (req, res) => {
    
    res.append("Access-Control-Allow-Origin","*");

    var params = {
        username: req.body.username,
        password: req.body.password
    }

    console.log(params.username,123)

    var sql3 = db.body('select * FROM users where username ="' + params.username  + '"',null, function(a){

        console.log(a);

        res.send("帐号已经存在");

    });



    var sql2 = db.body("insert into users(username, password) values('" + params.username + "'," + params.password + ')', function(results){

         res.send("帐号注册成功");

    })

});

// 会员 注册
app.post("/signin", (req, res) => {

    res.append("Access-Control-Allow-Origin","*");

    var params = {
        username : req.body.username,
        password : req.body.password
    }



    var signin_sql = db.query("select * from users where username='"+params.username+"'", null , function(ZC){

    if(ZC == ''){

        res.send('noUser');
    };

    if(ZC != ''){

        

        var signin_sql2 = db.query("", null , function(){


        })

    }


    })

})


// 会员 登录
app.post("/login", (req, res) => {

    res.append("Access-Control-Allow-Origin","*");

    let params = {
        username : req.body.username,
        password : req.body.password
    };

    console.log(params);

    var login_sql = db.query("select * from users where username='"+ params.username +"' and password='"+ params.password +"'" , null, function(FH){

        if(FH === ''){
            res.send('failLogin');
        };
        if(FH != ''){
            res.send('successLogin');
        }

    })
    
})

var server = app.listen(1898, function(){

    console.log(123)
    
    var host = server.address().address;
    
    var port = server.address().port;

});


