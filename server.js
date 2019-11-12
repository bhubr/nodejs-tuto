const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    response.end('This is the home page!');
  } else if (request.url === '/about') {
    response.end('This demonstrates basic routing with Node.js');
  } else {
    response.end('Default page (URLs other than / and /about)');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error(`Something bad happened: ${err.message}`);
    process.exit();
  }

  console.log(typeof err, `server is listening on ${port}`);
});
