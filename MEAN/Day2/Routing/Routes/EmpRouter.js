var express=require('express');
var router=express.Router(); //creating instance of router

router.get("/",function(req,res){
    res.render("EmpHome");
})

router.get("/new",function(req,res){
    res.render("NewEmp");
})

router.get("/edit",function(req,res){
    res.render("EditEmp");
})

router.get("/view",function(req,res){
    res.render("ViewEmp");
})

router.get("/delete",function(req,res){
    res.render("DeleteEmp");
})

router.get("/new/perm",function(req,res){
    res.render("PermEmp");
})

router.get("/new/temp",function(req,res){
    res.render("TempEmp");
})


module.exports=router;   //exporting router

