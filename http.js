const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the server first page - Achuthan');
  } else if (req.url === '/about') {
    res.end('Welcome to the server About page');
  }
  res.end(
    `<h1>Oopss</h1>
    <p>The page is not available</p>`
  );
});

server.listen(4000);
