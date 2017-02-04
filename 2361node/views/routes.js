var files = require("./files");
module.exports = {
	// home: function (response) {
	// 	files.readFile("./template/index.html", response)
	// },
	// login: function (response) {
	// 	files.readFile("./template/login.html", response)
	// },
	// jpg: function (response) {
	// 	files.readImgFile("./img/me.jpg", response)
	// }

	img: function (url, response) {
		files.readImgFile("./img/"+url, response)
	},
	//所有的html请求
	html: function (url, response) {
		response.writeHead("200", {'Content-Type': 'text/html;charset=utf-8'});
		files.readFile("./template/"+url, response)
	}
};