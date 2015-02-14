var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();
var SECRET_KEY = 'thereisnospoon';

function onRequest(req, res) {
    var rs;

    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, 'OK', {
            'Content-Type': 'text/html'
        });
        rs = fs.createReadStream('static/build.html');
        rs.pipe(res);
    }
    else if (req.url.indexOf('/api/secret') !== -1) {
        var data = '',
            json;


        req.on('data', function (chunk) {
            data += chunk;
        });
        req.on('end', function(){
            json = JSON.parse(data);
            if (json.secretKey === SECRET_KEY) {
                res.writeHead(200, 'OK', {
                    'Content-Type': 'text/plain'
                });
                res.end();
            }
            else {
                res.writeHead(400, 'Wrong secret key', {
                    'Content-Type': 'text/plain'
                });
                res.end();
            }
        });
    }
    else {
        res.end();
    }
}

server.on('request', onRequest);
server.listen(4000);