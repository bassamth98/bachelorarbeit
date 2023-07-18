const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Service 3!');
});

server.listen(3003, () => {
  console.log('Service 3 is running on port 3003');
});


