
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



server.listen(9000, () => {
    console.log(`Server is running on http://localhost:9000`);
});
