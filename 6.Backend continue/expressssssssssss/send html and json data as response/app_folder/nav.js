const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.write("<h1>helo from home page using express</h1>");
    res.write("<h1>helo from home page using express</h1>");
    res.send();

})
app.get("/about",(req,res)=>{
    res.status(200).send("<h1>helo from about page using express</h1>")
})
// app.get("/about_product",(req,res)=>{
//     res.send({
//         id:1,
//         "product_name" :"body spray",
//         "price":"24$",
//         "manufacture.date":"18,09,2023\n",
//         "description":"best body spray in low price base on customer choice"
//     })
// })
// same like uppper function
app.get("/about_product",(req,res)=>{
    res.json({
        id:1,
        "product_name" :"body spray",
        "price":"24$",
        "manufacture.date":"18,09,2023\n",
        "description":"best body spray in low price base on customer choice"
    })
})
app.listen(5500,"127.0.0.1",()=>{
    console.log("server  is running")
})