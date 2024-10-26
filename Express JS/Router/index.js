import express  from "express";

const app = express();

app.get('/student', (req, res)=>{
    res.send("<h1>Hello Students!</h1>")
})
app.get('/about', (req, res)=>{
    res.send("<h1>Learn more about us!</h1>")
})
app.get('/contact', (req, res)=>{
    res.send("<h1>Contact Us here !</h1>")
})
app.get('/blog', (req, res)=>{
    res.send("<h1>Blog Here!</h1>")
})

app.listen(3000, ()=> console.log("Server Up!"))