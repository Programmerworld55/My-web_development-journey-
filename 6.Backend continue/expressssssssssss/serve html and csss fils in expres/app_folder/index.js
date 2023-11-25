const express=require("express")
const app=express()
const path=require("path")

// relative path
// console.log(__dirname)

console.log(path.join(__dirname,'../app_folder/public'))
const staticpath=path.join(__dirname,'../app_folder/public');

// builtin middleware
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.send("helo from home page ")
})
app.listen(5500,"127.0.0.1",()=>{
    console.log("server is runnnning")
})