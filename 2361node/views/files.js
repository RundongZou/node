var fs = require("fs");
module.exports = {
	readFile: function (url, response) {
		fs.readFile(url, function (err, data) {
			response.write(data);
			response.end();
		})
	},
	readFileSync: function (response) {
		var data = fs.readFileSync("./template/login.html");
		response.write(data);
		response.end();
	},
	writeFile: function (response) {
		fs.writeFile("./write/test.txt", "zzz", function (err) {
			response.write("写入成功");
			response.end();
		})
	},
	readImgFile: function (url, res) {
		res.writeHead("200", {'Content-Type': 'image/jpeg'});
		fs.readFile('./img/me.jpg', 'binary', function (err, data) {
			if (err) throw err;
			res.write(data, 'binary');
			res.end();
		})
	}
}