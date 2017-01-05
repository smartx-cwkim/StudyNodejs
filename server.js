/*
// Read http module include Node.js, then can access using http variable.
var http = require('http');

// Call createServer function. It return object -> it has listen function.
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('hello World');
	res.end();
}).listen(34666);

exports.start = start;
*/

/* Refactoring
 var http = require('http');

 function onRequest(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('hello world');
	res.end();
 }

 http.createServer(onRequest).listen(34666);
 */

var http = require('http');

function start() {
	function onRequest(req, res) {
		console.log('Request received');
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.write('Hello World');
		res.end();
	}

	http.createServer(onRequest).listen(34666);
	console.log('Server has started');
}

exports.start = start;
