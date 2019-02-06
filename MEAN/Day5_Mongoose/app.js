var express=require('express')
const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs");

const fileupload=require('express-fileupload');
app.use(fileupload());

var mongoose=require('mongoose')

var db="mongodb://localhost/Empdb"
mongoose.connect(db,function(err){  //opening conection to database
    console.log(err);
})

var book=require("./model/Book.js")

app.get("/",function(req,res){
    res.render("login")
})

app.post("/insert",function(req,res){
   
    var b1=new book();
    b1.bookid=req.body.bukid;
    b1.bname=req.body.bukname;
    b1.author=req.body.author;
    b1.save(function(err,result){
        if(err){res.send(err)}
        else{
            res.send("Data inserted");
        }
    })
})

app.post("/delete",function(req,res){
    book.deleteOne({"bookid":req.body.bid},function(err,result){
        if(err){res.send(err)}
        else{
            res.send("Data deleted");
        }
    })
})

app.post("/view",function(req,res){
    book.find({bookid:req.body.bid},function(err,result){
        if(err){res.send(err)}
        else{
            res.render("viewdet",{data:result});
        }
    })
})

app.post("/update",function(req,res){
    book.findOne({bookid:req.body.bukid},function(err,bdata){
        bdata.bname=req.body.bukname;
        bdata.author=req.body.author;
        bdata.save(function(err){
            if(err){res.send(err)}
            else{
                res.send("Updated")
            }
        })
    })
})

app.post("/upload",function(req,res){
    let samplefile=req.files.samplefile;
    samplefile.mv(__dirname+"/images/"+samplefile.name,function(err){
        if(err){res.send(err)}
        else{
            res.send("Uploaded");
        }
    })
})

app.post("/login",function(req,res){
    var name=req.body.txtname;
    res.render("userhome",{data:name})
})

app.listen(8000,function(req,res){
    console.log("Server started listening")
})