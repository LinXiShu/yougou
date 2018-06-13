


var express = require("express");

var db = require("./mysql.js");

var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(function(req,res,next){

    res.append("Access-Control-Allow-Origin","*");

    next();

});

app.get("/", (req, res) => {

    res.send("hello LinXiShu");

});

function RndNum(n){
    var rnd="";
    for(var i=0;i<n;i++)
        rnd+=Math.floor(Math.random()*10);

        return rnd;
}

var id;

// 会员 注册
app.post("/signin", (req, res) => {
    res.append("Access-Control-Allow-Origin","*");
    var params = {
        phone : req.body.phone,
        password : req.body.password
    }

    var signin_sql = db.query("select * from users where phone='"+params.phone+"'", null , function(ZC){
        id = RndNum(5);
        if(ZC == ''){
            var signin_sql2 = db.query("insert into users( id, phone, password ) values("+ id + ",'"+ params.phone + "'," + params.password + ')', null , function(CR){
                res.send('yesSignin');
            });
        };
            if(ZC != ''){
                console.log(123);
                res.send('yesUser');
            }
    })
});

// 会员 登录
app.post("/login", (req, res) => {

    let params = {
        phone : req.body.phone,
        password : req.body.password
    };
    var login_sql = db.query("select * from users where phone='"+ params.phone +"' and password='"+ params.password +"'" , null, function(FH){
        if(FH == ''){
            console.log(FH);
            res.send('failLogin');
        };
        if(FH != ''){
            console.log(FH);
            res.send(FH);
        };
    })
});

// 获取 所有 商品

app.get("/products", ( req, res) => {

    var products_sql = db.query("select * from products ", null , function(SP){

        console.log(SP);

        // let obj = new Object();

        // for(let x in SP){

        //     obj[x] = SP[x]

        // };

        res.send(JSON.stringify(SP));

    })

});

// 购物车 获取数据      X

// app.get("/car", ( req, res) => {

//     var car_select = db.query("select * from ");

// })



//  购物车 加入数据
//  传 id  

// 谢谢你 ，一直保佑我的人 。

app.get("/car_cr", (req, res) => {

    var params = {

        id : req.query.id,
        ip : "'" + req.query.ip + "'"
    };

    var car_sql3 = db.query( " select * from car where id = "+ params.id +" and ip = "+ params.ip  , null , function(car_CC){

        // if(car_CC == ''){

        //     res.send('noCarProducts');
        // }
        // if(car_CC != ''){

        //     res.send('yesCarProducts');
        // }

        console.log(car_CC);

        res.send('yesCar');

    });

    //     var car_sql = db.query("select * from products where id="+ params.id, null , function(car_fh){

    //         if(car_fh == ''){
    //             res.send('都没有这个商品，你是来搞笑的吗?');
    //         };
    //         if( car_fh != '' ){
    //                    let id         = params.id;
    //                    let name       = '"'+ car_fh[0].name +'"';
    //                    let price      = '"'+ car_fh[0].price +'"';
    //                    let qty        = car_fh[0].qty;
    //                    let classes    = car_fh[0].classes;
    //                    let photo      = '"'+ car_fh[0].photo +'"';
    //                    let ip         = '"'+ params.ip +'"';

    //                     console.log( id, name, photo , price , qty , classes , ip );
    //                     var car_sql2 = db.query( "insert into car( id, name, photo , price , qty , classes , ip ) values("+id+","+name+","+photo+","+price+","+qty+","+classes+","+ip+")" , null , function(car_fh2){
    //                         console.log(car_fh2,123);
    //                         res.send('yesCar_cr');

    //                    });

    //                     // res.send(JSON.stringify(car_fh));
    //         };
    // })
    
})



var server = app.listen(1898, function(){

    console.log(123)
    
    var host = server.address().address;
    
    var port = server.address().port;

});

