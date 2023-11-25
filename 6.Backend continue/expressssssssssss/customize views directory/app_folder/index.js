const express=require('express')
const path=require('path')

const app=express()
app.set('view engine','hbs');
app.get("",(req,res)=>{
    res.render('index',{
    user_name:"and_dev"
    })
})

const staticpath=path.join(__dirname,'../app_folder/public')
// app.use(express.static(staticpath))

app.listen(5500,'127.0.0.1')