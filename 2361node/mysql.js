var mysql = require("mysql");
var http = require("http");
var url = require("url");
var product = require("./api/product");
var cart = require("./api/cart");

http.createServer(function (req, res) {
	if (req.url != "/favicon.ico") {
		//res.write("mysql");
		//res.end();
		var urlArr = req.url.split('/');
		if (urlArr[1] == 'api') {
			var pathObj = url.parse(urlArr[2], true);
			var params = pathObj.query; //get方式的参数
			//console.log(pathObj.query);
			switch (pathObj.pathname) {
				case 'product':
					if (params.pid) {
						//如果有pid，说明前端想要请求商品的详情信息
						product.getDetail(res,params.pid);
						//把res和商品id传给商品模块
					}else {
						//调用列表方法，把res和参数传给商品模块
						product.getList(res, params);
						console.log(params);
						//res, params={page: 1, linenumber: 10, pid: 2}
					}
					//res.write('商品数据');
					//res.end();
					break;
				case 'cart':
					//res.write('购物车数据');
					//res.end();
					cart[params.type](res, params);
					break;
				case 'user':
					res.write('用户数据');
					res.end();
					break;
				default:
					res.write('无效的api接口');
					res.end();
					break;
			}
		}

		// connection.connect(function (err) {
		// 	if (err) {
		// 		console.log('log:' + err)
		// 		return
		// 	}else {
		// 		console.log('[connection connect] success')
		// 	}
		// });
		// connection.query("select * from product", function (err, results) {
		// 		console.log(results);
		// 		var data = JSON.stringify(results);
		// 		//把请求到的数据输出给前端
		// 		res.write(data);
		// 		res.end();
		// 	});
		//关闭数据库连接
  //       connection.end(function (err) {
		// 	if (err) {
		// 		console.log('log: ' + err);
		// 	}else {
		// 		console.log("[connection end] success");
		// 	}
		// });

	}	
}).listen('8000');
console.log("server run at 8000")
//console.log(mysql);

//创建连接
// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'zou',
// 	port: '3306'
// });

//连接数据库
// connection.connect(function (err) {
// 	if (err) {
// 		console.log('log:' + err)
// 		return
// 	}else {
// 		console.log('[connection connect] success')
// 	}
// });
// connection.query("select * from user", function (err, results) {
// 	console.log(results);
// });

//关闭连接
// connection.end(function (err) {
// 	if (err) {
// 		console.log('log: ' + err);
// 	}else {
// 		console.log("[connection end] success");
// 	}
// });
