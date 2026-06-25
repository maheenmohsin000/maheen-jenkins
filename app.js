res.end('Hello from Jenkins Pipeline! v3');const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Jenkins Pipeline! v3\n');
}).listen(3000, () => console.log('Running on port 3000'));
