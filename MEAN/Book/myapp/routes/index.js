var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');

var mongoclient=mongodb.MongoClient;

var url="mongodb://127.0.0.1:27017/mydb";

router.get('/', function(req, res, next) {
  res.render('index')
})

/* GET home page. */
router.get('/viewbuk', function(req, res, next) {
  mongoclient.connect(url,function(err,database){
    if(err){console.log(err);}
    else
    {
        var dtb=database.db('mydb');
        var empcol=dtb.collection('book');
        empcol.find().toArray(function(err,tbdata){
            if(err){console.log(err);}
            else
            {
               
                res.render("ViewBuk",{data:tbdata});
            }
        })
    }
})
});

router.get('/addbuk',function(req,res){
  res.render("Addbuk")
})


router.post('/insert',function(req,res){
  mongoclient.connect(url,function(err,database){
    var dtb=database.db('mydb');
    var col=dtb.collection('book');
    col.insert({Bukid:parseInt(req.body.bukid),Bukname:req.body.bukname,Author:req.body.author,Price:parseInt(req.body.price)},function(err,result){
      res.send("Inserted Successfully");
    })

  })
})

router.get("/editbuk",function(req,res){
  mongoclient.connect(url,function(err,database){
    var dtb=database.db('mydb');
    var col=dtb.collection('book');
    col.find({},{Bukname:1,Bukid:1}).toArray(function(err,result){
      res.render("selectbuk",{data:result});
    })
  })
  
})

router.post("/edit",function(req,res){
  console.log(req.body.selebukid);
  mongoclient.connect(url,function(err,database){
    var dtb=database.db('mydb');
    var col=dtb.collection('book');
    col.find({Bukid:parseInt(req.body.selebukid)}).toArray(function(err,result){
      res.render("EditBuk",{data:result});
    })
  })
  
})

router.post("/update",function(req,res){
  
  mongoclient.connect(url,function(err,database){
    var dtb=database.db('mydb');
    var col=dtb.collection('book');
    col.update({Bukid:parseInt(req.body.bukid)},{$set:{Bukname:req.body.bukname}},function(err,result){
      res.send("Updated Sucessfully")
    })
      
  })
  
})

module.exports = router;
