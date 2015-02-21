
// Importing modules
var http = require("http");
var fs = require("fs");

//Creating http server
http.createServer(serverCallback).listen(3000);

// helper function called on client request
function serverCallback(request,response){

	response.writeHead(200,{"Content-Type":"text/html"});
	// Fetching data from file
	fs.readFile("test.txt",readFileCallback);
	
	// Defining reading of file
	function readFileCallback(err,contents){
		response.write(contents);
		response.end();
	}
}

console.log("Running server at port 3000....");
