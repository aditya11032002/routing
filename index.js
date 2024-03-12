/*
const express = require("express");
const app = express();

app.use(function(req, res, next){
    console.log("Middleware working");//this is called middleware
 next();
});

app.get('/', function (req,res){
    res.send("Hello World");
});

app.get('/profile', function(req,res){
    res.send("Welcome to profile");
});

app.get('/profile/:username', function(req,res){
    res.send(`Hello from ${req.params.username}`);
});

//url mein jab bhi aisa patter ho

// /profile/:username 
app.get('/about', function(req,res){
    res.send("I am Aditya Borkute I am studying from abasaheb garware college");
});
app.listen(8000); 

*/



const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get("/", function(req, res){
    res.render("index", {age:69});
});

app.get("/contact", function(req, res){
    res.render("contact", {name: 'Aditya'});
});

app.get("/error", function(req,res){
    throw new Error("Something went wrong");
})

app.get("/contact/error"), function(req,res){
    throw new Error("Someyhing went wrong");
}


app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  });

app.listen(3000);