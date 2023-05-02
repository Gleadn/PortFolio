const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile('./pages/home.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('Fichier non trouvé !');
        } else {
          fs.readFile('./css/home.css', (err, css) => {
            if (err) {
              res.writeHead(404);
              res.write('Fichier CSS non trouvé !');
            } else {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              res.write('<style>');
              res.write(css);
              res.write('</style>');
            }
            res.end();
          });
        }
      });
    } else if (req.url === '/profile') {
      fs.readFile('./pages/profile.html', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write('Fichier non trouvé !');
        } else {
          fs.readFile('./css/profile.css', (err, css) => {
            if (err) {
              res.writeHead(404);
              res.write('Fichier CSS non trouvé !');
            } else {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              res.write('<style>');
              res.write(css);
              res.write('</style>');
            }
            res.end();
          });
        }
      });
    } else {
      res.writeHead(404);
      res.write('Page non trouvée !');
      res.end();
    }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080...');
  console.log("sur l'adresse http://localhost:8080");
});