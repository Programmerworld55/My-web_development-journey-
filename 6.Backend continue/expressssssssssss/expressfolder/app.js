const express=require("express");

const app=express();
// app.get(route,callback)/
app.get("/",(req,res)=>{
    res.send("helo using express")
})
app.get("/about",(req,res)=>{
    res.send("helo from about page using express")
})
app.listen(8000,()=>{
    console.log("server is running")
})
// most used keywords
// API 
// get   read
// post  create
// put   update
// delete 
