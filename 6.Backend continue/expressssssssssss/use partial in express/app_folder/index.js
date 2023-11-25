const express = require("express");
const app = express();
const path = require("path");
const hbs=require("hbs")
const static_path=path.join(__dirname,"/public")
const partial_path=path.join(__dirname,"/views/partials")

app.use(express.static(static_path))
app.set("view engine", "hbs");

// use partial
hbs.registerPartials(partial_path)

// Define the route for the home page
app.get("/", (req, res) => {
    res.render('index');
});


app.listen(5500, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:5500/");
});
