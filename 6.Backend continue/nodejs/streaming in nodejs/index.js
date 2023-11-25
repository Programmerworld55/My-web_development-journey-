const fs=require('fs')
const http=require('http')

// const server=http.createServer();
// server.on('request',(req,res)=>{
//     fs.readFile('text.txt','utf-8',(err,data)=>{
//         if(err)
//         {
//             console.log(err)
//         }
//         else{
//             res.end(data.toString());
//         }
//     })
// })

// server.listen(8000,'127.0.0.1')

//.............................................. second method  ..........................................
const server=http.createServer()

server.on('request',(req,res)=>{
    const  rstream=fs.createReadStream('text.txt');
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata)
    });
    rstream.on('end',()=>{
        res.end()
    })
    rstream.on('error',(err)=>
    {
        console.log(err)
        res.end("file not found")
    })

})

server.listen(8000,'127.0.0.1',()=>{
    console.log("server is running")
})