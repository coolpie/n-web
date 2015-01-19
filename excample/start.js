var static = require('static-file-serving');

var http = require('http');
//
// Create a node-static server instance to serve the './public' folder
//
var fileServer = new static.Server('./public');

http.createServer(function (request, response) {
	/*
	   @callback(err, res)		'res' is an object which maked up by response.
	*/
    fileServer.serve(request, response, function (err, res) {
        if (err) { // An error as occured
            console.error("> Error serving " + request.url + " - " + err.message);
            res.error(err);
        } else { // The file was served successfully
            console.log("> " + request.url + " - " + res.message);
        }
    });
}).listen(8080);

console.log("> node-static is listening on http://127.0.0.1:8080");