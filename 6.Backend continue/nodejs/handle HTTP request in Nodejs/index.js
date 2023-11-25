const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/')
    {
        res.end("HelooOO from home page")
    }
    else if(req.url==='/about')
    {
        res.end("HelooOO from about page")
    }
    else if(req.url==='/contact')
    {
        res.end("HelooOO from contact page")
    }
    else{
        res.writeHead(404,{"Content_type":"text/html"})
        res.end("Error 404")
    }
    
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is running at port 8000")
})