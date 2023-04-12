const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile('./pages/home.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('Fichier non trouvé !');
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
        }
        res.end();
      });
    } else {
      res.writeHead(404);
      res.write('Page non trouvée !');
      res.end();
    }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080...');
});