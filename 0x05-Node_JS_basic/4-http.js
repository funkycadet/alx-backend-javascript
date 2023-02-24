const http = require('http');

const host = 'localhost';
const port = 1245;

function server(req, res) {
  res.writeHead(200);
  res.end('Hello Holberton School!');
}

const app = http.createServer(server);
app.listen(port, host, () => {
  console.log(`App is running on http://${host}:${port}`);
});
