const fs=require('fs')

function C_F_U_Async()
{
    let content="File creation using asycrhonus"
    fs.writeFile('textfile.txt',content,(err)=>
    {
        console.log("file is created ")
    })
}
function appendfileusingAsync()
{
    let content="\ttext appended by me"
    fs.appendFile('textfile.txt',content,(err)=>
    {
        console.log("Content Appended")
    })
}

function readfile()
{
    
    fs.readFile('textfile.txt','utf-8',(err,data)=>
    {
        console.log("file is rad successfully")
        console.log("content is : ",data)
    })
}
readfile()
// C_F_U_Async()
// appendfileusingAsync()