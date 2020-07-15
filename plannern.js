
var express = require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//app.set("view engine","ejs");
//mongodb

/*var mongoose=require("mongoose");
//var list=require("../listmaker.js");S


var l;
var list=require(__dirname + "\\listmaker.js");

//var add=require("./additem_test.js");
//add();
mongoose.Promise=global.Promise;*/


//app.use("/",express.static(__dirname+"/p"));
app.get("/",function(req,res){
  res.sendFile(__dirname +"\\planner.html");
});



//mongodb
//before(function(done){
  /*mongoose.connect("mongodb://localhost/listmakerdb",{useNewUrlParser:true,useUnifiedTopology:true});

  mongoose.connection.once("open",function(){
    console.log("Connection Successful");
   //done();

  }).on("error",function(err){
    console.log(err);
  });

//});

  //beforeEach(function(done){

  //    mongoose.connection.collections.lists.drop();

      //  done();
    //  });

  //});



  function add(){
    l= new list({
       item:"jack"
     });

     l.save();
  };

  add();
*/




module.exports=app;
