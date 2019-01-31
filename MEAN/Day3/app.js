var express=require('express');
const app=express();
var mongodb=require('mongodb');

var mongoclient=mongodb.MongoClient;

var url="mongodb://127.0.0.1:27017/empdb";


app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("Home");
})

app.get("/insert",function(req,res){

    mongoclient.connect(url,function(err,database){

        var dtb=database.db('Empdb'); //connecting to db
        var collections=dtb.collection('employee'); //connecting to table
        var data={"Eid" : "2001", "Ename" : "Sanju", "Dept" : "hr", "Salary" : 12000, "location" : "tcr", "Dob" : "29-01-1992"}
        collections.insert(data,function(err,result){
            if(err){res.send("Error");}
            else{res.send("Data inserted successfully");}
        });

    })
    
})

app.listen(8000,function(req,res0){
    console.log("Server started listening");
})