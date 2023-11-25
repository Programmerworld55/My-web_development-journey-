const fs=require('fs')
function createfolder()
{
    fs.mkdir('folder_for_file',()=>{
        console.log("folder created")
    })
}
function createfile()
{
    let content="text added by me"
    fs.writeFile('folder_for_file/text.txt',content,(err)=>
    {
        console.log("file created")
        if(err)
        {
            console.log("error is : ",err)
        }
    })
}
function append_file()
{
    let content="\t Appended text by me"
    fs.appendFile('folder_for_file/text.txt',content,(err)=>{
        console.log(" text appended successfully")
    })
}
function renamefile()
{
    fs.rename('folder_for_file/text.txt','renamedbyme',()=>{
        console.log("!!!!!!!!!!!!!!!!.....file rename action done.....!!!!!!!!!!!!!!!!!!")
    })
}
renamefile()
// append_file()
// createfolder()
// createfile()
