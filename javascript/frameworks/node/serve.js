const http = require('node:http')

const port = 4000
const hostname = '127.0.0.1'

const server = http.createServer()

server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HELLO WORLD.\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
