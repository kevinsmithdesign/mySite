//Get http 
var http = require('http');


//Port 
var PORT = 8080;

function handleRequest(request,response){

	response.end('It works! I looked up ' + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('listening on http://localhost: ' + PORT);
});