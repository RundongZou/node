var http = require("http");
var m1 = require("./commonjs/module1");
http.createServer(function (request, response) {
	if (request.url != "/favicon.ico") {
		//console.log(m1);
		response.writeHead("200", {
			'Content-Type': 'text/html;charset=utf-8'
		});
		response.write("hellaaao zou");
		console.log(request.url);
		response.write("hello nodejs");
		response.end();
	}
	
}).listen("8000");
console.log("server run at http://localhost:8000. By zou");

