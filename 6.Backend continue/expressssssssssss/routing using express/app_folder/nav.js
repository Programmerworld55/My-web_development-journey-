const express=require("express")
const app=express()

app.get("/",(res,req)=>{
    req.send("helo from home page using express")

})
app.get("/about",(req,res)=>{
    res.status(200).send("helo from about page using express")
})
app.listen(5500,"127.0.0.1",()=>{
    console.log("server  is running")
})