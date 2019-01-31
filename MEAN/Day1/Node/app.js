var express=require('express') 

const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html");
})

app.post("/home",function(req,res){
    var usrnme=req.body.usrnme;
    var pswd=req.body.pswd;
   if(pswd =="1234")
   {
        res.sendFile(__dirname+"/home.html")

   }
   else
   {
        res.redirect("/");
   }
   
})

app.post("/signup",function(req,res){

    res.send("<html><body>Name:"+req.body.name+"<br>Email:"+req.body.email+"<br>Username:"+req.body.uname+"<br>Password:"+req.body.pass+"</body></html>");

})


app.get("/sign",function(req,res){

    res.sendFile(__dirname+"/signup.html")
})

app.get("/homepage",function(req,res){

    res.sendFile(__dirname+"/login.html")
})


app.listen(8000,function(req,res){
    console.log("Server started listening");
})