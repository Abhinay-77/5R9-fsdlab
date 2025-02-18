const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url===`/home`){
        res.write('welcome to home page')
        res.end()
     
    }else if(req.url===`/aboutus`){
        res.write('About us')
        res.end()
    }else if(req.url==='/contact'){
        res.write(`Conatc us`)
        res.end()
    }

})

server.listen(9000,()=>{
    console.log(`server listening on 9000`)

})                     