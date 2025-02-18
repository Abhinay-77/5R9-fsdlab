const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === 'lab6/index.html') {


        fs.readFile(filePath, (err, data) => {
            if (err) {
          
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});


const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
