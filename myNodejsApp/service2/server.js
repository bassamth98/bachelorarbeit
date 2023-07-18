const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Service 2!');
});

server.listen(3002, () => {
  console.log('Service 2 is running on port 3002');
});

