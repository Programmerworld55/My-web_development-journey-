const express=require('express')
const path=require('path')

const app=express()

app.set('view engine','hbs')
app.get("",(req,res)=>{
    res.render('index')
})

app.listen(5500,'127.0.0.1')