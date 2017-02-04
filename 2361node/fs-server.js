var http = require("http");
var files = require("./views/files");
http.createServer(function (request, response) {
	if (request.url != "/favicon.ico") {
		//console.log(m1);
		response.writeHead("200", {
			'Content-Type': 'text/html;charset=utf-8'
		});
		files.writeFile(response);
	}
	
}).listen("8000");
console.log("server run at http://localhost:8000. By zou");

