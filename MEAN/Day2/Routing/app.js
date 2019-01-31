var express=require('express');
var emprouter=require('./Routes/EmpRouter')
var prdrouter=require('./Routes/ProRouter')
const app=express();

app.set("view engine","ejs");

app.get("/",function(req,res)
{
    res.render("home");
})

app.use("/emp",emprouter)

app.use("/prd",prdrouter)


app.listen(8000,function(req,res){
    console.log("Server started");
})