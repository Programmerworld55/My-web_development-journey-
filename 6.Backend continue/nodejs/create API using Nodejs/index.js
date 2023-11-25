const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.end("heloo from homepage")
    }
    else if(req.url=="/about")
    {
        res.end("heloo from about page")
    }
    else if(req.url=="/contact")
    {
        res.end("heloo from contact page")
    }
    else if(req.url=="/userapi")
    {
        fs.readFile('userapi.json','utf-8',(err,data)=>{
            res.end(data)
        })
        
    }
    else if(req.url=="/userapi2")
    {
        fs.readFile('userapi.json','utf-8',(err,data)=>{
            if(err)
            {
                res.end(err)
            }
            else{
                res.setHeader('Content-Type', 'application/json');
                let obj_data=JSON.parse(data)
            const employee1data=obj_data[0]
            console.log("data is : ",employee1data)
            res.end(JSON.stringify(employee1data))
            
            }
            
        })
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("error 404")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log(`server is running at port 8000`)
})
