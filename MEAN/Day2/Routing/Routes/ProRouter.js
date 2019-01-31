var express=require('express');
var router=express.Router(); //creating instance of router

router.get("/",function(req,res){
    res.render("PrdHome");
})

router.get("/scan",function(req,res){
    res.render("ScnrHome")
})

router.get("/prd/scan/add",function(req,res){
    res.render("AddScnr")
})

router.get("/prd/scan/edit",function(req,res){
    res.render("EditScnr")
})

router.get("/prd/scan/view",function(req,res){
    res.render("ViewScnr")
})

router.get("/prd/scan/del",function(req,res){
    res.render("DelScnr")
})

router.get("/printer",function(req,res){
    res.render("PrintHome")
})

router.get("/prd/printer/add_prntr",function(req,res){
    res.render("AddPrint")
})

router.get("/prd/printer/edit_prntr",function(req,res){
    res.render("EditPrint")
})

router.get("/prd/printer/view_prntr",function(req,res){
    res.render("ViewPrint")
})

router.get("/prd/printer/del_prntr",function(req,res){
    res.render("DelPrint")
})

module.exports=router;   //exporting router
