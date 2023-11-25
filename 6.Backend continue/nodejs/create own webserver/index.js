const http=require('http')
const server=http.createServer((req,res)=>{
    res.end('Hello From the other side')
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is runing at port 8000")
});
