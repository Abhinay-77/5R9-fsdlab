const http = require('http');

const server= http.createServer((req,res)=>{
    if(req.method==='GET'){
        if(req.url==='/fsd'){
            res.writeHead(200,{"content-type":`text/palin`});
            res.end(`this is valid url`)
        }else{
            res.writeHead(404,{"content-type":`text/palin`});
            res.end(`this is invalid url`)
        }
    }else{
        res.writeHead(500,{"content-type":`text/palin`});
        res.end(`internal server error`)
    }
})


server.listen(9000,()=>{
    console.log('server is running on port 9000')
})