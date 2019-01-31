var express=require('express') // include library files

const app=express();

app.get("/",function(req,res){
    res.sendfile("./login.html");
    console.log(__dirname);
})

app.get("/home/employee",function(req,res){
    res.sendFile(__dirname+"/employee.html");
})

app.get("/home",function(req,res){
    res.sendfile("./home.html");
})

app.get("/home/products",function(req,res){
    res.sendFile(__dirname+"/products.html")
})

app.get("/home/employee/newemp",function(req,res){
    res.sendFile(__dirname+"/newemp.html")
})

app.get("/home/employee/rememp",function(req,res){
    res.sendFile(__dirname+"/rememp.html")
})

app.get("/home/products/newpro",function(req,res){
    res.sendFile(__dirname+"/newproduct.html")
})

app.get("/home/products/rempro",function(req,res){
    res.sendFile(__dirname+"/removeproduct.html")
})

app.listen(8000,function(req,res){
    console.log("Server started listening");
})