// Create web server
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if(req.url === '/comments.json') {
    fs.readFile('comments.json', function(err, data) {
      if(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    });
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Resource not found'}));
  }
}).listen(3000);

console.log('Server listening on port 3000');