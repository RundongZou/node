var http = require('http');
var mysql = require("mysql");
module.exports = {
    getList:function(res,params){
    	//链接数据库配置
        var connection = mysql.createConnection({
            host: 'localhost',
            user:'root',
            password:'root',
            database:'zou',
            port:'3306'
        });
        connection.connect(function (err) {
            if(err) {
                console.log('log: '+err)
            }else{
                console.log('[connection connect] success')
            }
        });
        connection.query('select * from product',function (err,results) {
            console.log(results);
            var data = JSON.stringify(results);
            console.log(data);
            res.write(data);
            res.end();
            connection.end(function (err) {
                if(err) {
                    console.log('log: ' + err)
                    return;
                }else{
                    console.log('[connection end] success');
                }
            })

        });
    },
    getDetail:function (res,pid) {
        //链接数据库配置
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'zou',
            port:'3306'
        });
        connection.connect(function (err) {
            if(err){
                console.log('log: '+err)
            }else {
                console.log("[connection connect] success");
            }
        });
        //查询指定商品的数据（商品详情）
        connection.query('select * from product where pid='+pid,function (err,results) {
            var data = JSON.stringify(results);
            console.log(data);
            res.write(data);
            res.end();
            connection.end(function (err) {
                if(err){
                    console.log('log: '+err)
                }else {
                    console.log("[connection end] success");
                }
            });
        });
    }
}

// var http = require('http');
// var mysql = require("mysql");
// module.exports = {
// 	getList: function (res, params) {
// 		//链接数据库配置
// 		var connection = mysql.createConnection({
// 			host: 'localhost',
// 			user: 'root',
// 			password: 'root',
// 			database: 'zou',
// 			port: '3306'
// 		});
// 		//连接数据库
// 		connection.connect(function (err) {
// 			if (err) {
// 				console.log('log:' + err)
// 				return
// 			}else {
// 				console.log('[connection connect] success')
// 			}
// 		});

// 		connection.query('select * from product', function (err, results) {
// 			var data = JSON.stringify(results);
// 			console.log(data);
// 			res.write(data);
// 			res.end();
// 			 connection.end(function (err) {
//                 if(err) {
//                     console.log('log'+err)
//                     return;
//                 }else{
//                     console.log('[connection end] success')
//                 }
//             })

// 		});
// 	}
// }