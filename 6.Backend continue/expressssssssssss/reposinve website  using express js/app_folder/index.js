const express=require('express')
const path=require('path')

const app=express()
const staticpath=path.join(__dirname,'../app_folder/public')
app.use(express.static(staticpath))

app.listen(5500,'127.0.0.1')