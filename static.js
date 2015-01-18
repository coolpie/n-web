var PORT = 9000;

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	var realPath = "app"+pathname;

	fs.exists(realPath,function(exists){
		if(!exists){
			res.writeHead(404,{'Content':'text/html'});
			res.write('<h1>Error 404</h1>');
			res.end('<p>This request URL :'+pathname+' dosen\'t exists.</p>');
		}else{
			fs.readFile(realPath,"binary",function(err,data){
				if(err){
					res.writeHead(500,{'Content':'text/html'});
					res.write('<h1>Error 500</h1>');
					res.end('<p>It is something happened in server.</p>');
				}else{
					res.writeHead(200,{'Content':'text/html'});
					res.write(file,"binary");
					res.end();
				};
			});
		}
	});

}).listen(PORT);



console.log('Server are listening on port: ' + PORT + '.');