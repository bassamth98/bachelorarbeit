const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Hello form Service 1');
});

server.listen(3001, () => {
	console.log('Service 1 is running on port 3001');
});

