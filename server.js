var http = require('http'),
	express = require('express');

app = express();

http.createServer(app).listen(8080, '45.55.220.106'); 

app.use(express.static(__dirname + "/client"));

app.get('/404', function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('404 Error oh no!\n');
})

console.log('Sever is running at frankie7413.me');
