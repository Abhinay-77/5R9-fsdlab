
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
 
    const parsedUrl = url.parse(req.url, true);
    

    if (req.method === 'GET' && parsedUrl.pathname === '/greet') {
     
        const name = parsedUrl.query.name || 'Guest';
        res.write(`Hello, ${name}!`);
        res.end();
    } else {
     
        res.write('Not Found');
        res.end();
    }
});


const port = 9000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
