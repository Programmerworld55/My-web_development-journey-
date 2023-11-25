const express = require("express");
const app = express();
const path = require("path");
const hbs=require("hbs")
const partial_path=path.join(__dirname,"/views/partials")
const static_path=path.join(__dirname,"/public")

app.use(express.static(static_path))


app.set("view engine", "hbs");

// use partial
hbs.registerPartials(partial_path)

// Define the route for the home page
app.get("/", (req, res) => {
    res.render('index');
});
app.get('/about2', (req, res) => {
    res.render('about2');
});


app.get('/about2/*',(req,res)=>{
    res.render('404',{
        errorcomment:'oops page not foundd'
    })
})


app.listen(5501, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:5501/");
});

app.get('*',(req,res)=>{
    res.render('404',{
        errorcomment:'page not foundd'
    })
})