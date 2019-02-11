var express=require('express')
const app=express()
var path=require('path')
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")


var mongoose=require('mongoose')

var db="mongodb://localhost/Bukdb"
mongoose.connect(db,function(err){  //opening conection to database
    console.log(err);
})


app.use("/images",express.static(path.join(__dirname, 'images')));


var book=require("./model/Book.js")

const fileupload=require('express-fileupload');
app.use(fileupload());



app.get("/",function(req,res){
    book.find({},function(err,result){
        if(err){res.send(err)}
        else{
            res.render("Bukhome",{data:result});
           //res.render("Addbuk")
        }
    })
})

app.post("/insert",function(req,res){
   
    var b1=new book();
    b1.bookid=req.body.bukid;
    b1.bname=req.body.bukname;
    b1.author=req.body.author;
    let samplefile=req.files.bukimg;
    console.log(samplefile.name);
    b1.image=samplefile.name;
    
    samplefile.mv(__dirname+"/images/"+samplefile.name)
    
    b1.save(function(err,result){
        if(err){res.send(err)}
        else{
            res.send("Data inserted");
        }
    })
})

app.listen(8000,function(req,res){
    console.log("Server started");
})