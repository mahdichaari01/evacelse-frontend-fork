// create a basic node server than listens on port 3000 and logs requests to the console and returns a simple response
const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req);
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(3010);
