var express=require('express')
const app=express()
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
var s=require('./sample');

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("login");
    s.getweb();
    console.log(s.name);
})

app.post("/login",function(req,res)
{
    res.render("home",{data:Books});
    
})

app.get("/sign",function(req,res){
    res.render("signup");
})

app.post("/signup",function(req,res){
    res.render("signupdetails",{name:req.body.name,email:req.body.email,user:req.body.uname});
})

app.get("/homepage",function(req,res){
    res.render("login");
})

//json array
var Books=[{Bid:"B1",Bname:"Book1",Author:"Akshay",Price:100},{Bid:"B2",Bname:"Book2",Author:"Akshay",Price:100},{Bid:"B3",Bname:"Book3",Author:"Akshay",Price:100}];



app.listen(8000,function(req,res){
    console.log("Sever started listening");
})