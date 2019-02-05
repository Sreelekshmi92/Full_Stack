var express=require('express');
const app=express();
var mongodb=require('mongodb');
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

var mongoclient=mongodb.MongoClient;

var url="mongodb://127.0.0.1:27017/empdb";


app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("Emphome");
})

app.get("/newemp",function(req,res){
    res.render("Home");
})

app.get("/viewemp",function(req,res){
   mongoclient.connect(url,function(err,database){
       if(err){console.log(err);}
       else
       {
           var dtb=database.db('Empdb');
           var empcol=dtb.collection('employee');
           empcol.find().toArray(function(err,tbdata){
               if(err){console.log(err);}
               else
               {
                  
                   res.render("empview",{data:tbdata});
               }
           })
       }
   })
})

app.get("/removeemp",function(req,res){
    mongoclient.connect(url,function(err,database){
        if(err){console.log(err);}
        else
        {
            var dtb=database.db('Empdb');
            var empcol=dtb.collection('employee');
            empcol.find({},{"Name":1}).toArray(function(err,tbdata){
                if(err){console.log(err);}
                else
                {
                  //console.log(tbdata);
                    res.render("empremove",{data:tbdata});

                      //  console.log(tbdata)
                }
            })
        }
    })
})


app.post("/insert",function(req,res){

    mongoclient.connect(url,function(err,database){

        var dtb=database.db('Empdb'); //connecting to db
        var collections=dtb.collection('employee'); //connecting to table
       // var data={"Eid" : "2001", "Ename" : "Sanju", "Dept" : "hr", "Salary" : 12000, "location" : "tcr", "Dob" : "29-01-1992"}
        var data1={"id":parseInt(req.body.empid),"Name":req.body.empname,"Age":parseInt(req.body.age)}
        collections.insert(data1,function(err,result){
            if(err){res.send("Error");}
            else{res.send("Data inserted successfully");}
        });

    })
    
})

app.post("/delete",function(req,res){
   // console.log(req.body.empsel);
   
    mongoclient.connect(url,function(err,database){

        var dtb=database.db('Empdb'); //connecting to db
        var collections=dtb.collection('employee'); //connecting to table       
        collections.deleteOne({id:parseInt(req.body.empsel)},function(err,result){
            if(err){res.send("Error");}
            else{res.send("Data removed successfully");}
        });

    })
})

app.get("/editemp",function(req,res){
    mongoclient.connect(url,function(err,database){
        if(err){console.log(err);}
        else
        {
            var dtb=database.db('Empdb');
            var empcol=dtb.collection('employee');
            empcol.find({},{"id":1}).toArray(function(err,tbdata){
                if(err){console.log(err);}
                else
                {
                  //console.log(tbdata);
                    res.render("empedit",{data:tbdata});
                }
            })
        }
    })
})

app.post("/update",function(req,res){
  //  console.log(req.body.empsel);
    mongoclient.connect(url,function(err,database){
        if(err){console.log(err);}
        else
        {
            var dtb=database.db('Empdb');
            var empcol=dtb.collection('employee');
            empcol.find({id:parseInt(req.body.empsel)}).toArray(function(err,tbdata){
                if(err){console.log(err);}
                else
                {
                  //console.log(tbdata);
                    res.render("editdetails",{data:tbdata});                  
                }
            })
        }
    })
})

app.post("/updateemp",function(req,res){
    mongoclient.connect(url,function(err,database){

        var dtb=database.db('Empdb'); //connecting to db
        var collections=dtb.collection('employee'); //connecting to table       
        collections.update({id:parseInt(req.body.txtid)},{$set:{Name:req.body.txtnme,Age:parseInt(req.body.txtage)}},function(err,result){
            if(err){res.send("Error");}
            else{res.send("Data updated successfully");}
        });

    })
})

app.listen(8000,function(req,res0){
    console.log("Server started listening");
})