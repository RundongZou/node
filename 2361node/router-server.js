var http = require("http");
var routes = require("./views/routes");
http.createServer(function (request, response) {
	// if (request.url != "/favicon.ico") {
	// 	console.log(request.url);
	// 	if (request.url == "/index.html") {
	// 		routes.home(response)
	// 	} else if (request.url == "/login.html") {
	// 		routes.login(response)
	// 	} else if (request.url == "/img/me.jpg") {
	// 		routes.jpg(response)
	// 	}
	// }

	if (request.url != "/favicon.ico") {
		console.log(request.url);
		var urlArr = request.url.split("/");
		// 把url拆分成数组
		console.log(urlArr);
		console.log(urlArr[1].indexOf(".html"));
		if (urlArr[1].indexOf(".html") != (-1)) {
			//要请求的是html文件
			routes.html(urlArr[1], response)
		}else if (urlArr[1] == "img") {
			//要请求的是图片文件
			routes.img(urlArr[2], response)
		}else {
			response.write("不是有效的路径");
			//response.html("index.html", response);
			response.end();
		}
	}
	
}).listen("8000");
console.log("server run at http://localhost:8000. By zou");

