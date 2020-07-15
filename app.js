  var mongoose=require("mongoose");
  var app=require("./plannern.js");
  var mongodb=require("mongodb");
  var l;
  var list=require("./listmaker.js");


  app.listen("3000","127.0.0.1");
  console.log('listening');

  mongoose.Promise=global.Promise;

    mongoose.connect("mongodb://localhost/listmakerdb",{useNewUrlParser:true,useUnifiedTopology:true});

    mongoose.connection.once("open",function(){
      console.log("Connection Successful");


    }).on("error",function(err){
      console.log(err);
    });

  //  beforeEach(function(done){

       //mongoose.connection.collections.lists.drop();

        //  done();
        //});

  //  });
  app.post("/del",function(req,res){
    res.set("Access-Control-Allow-Origin","*");
    var items=req.body.item;

    mongoose.connection.collections.lists.findOneAndDelete({item:items});

    res.send();
  });

  app.post("/",function(req,res){
    var listItem=req.body.li;
    console.log(listItem);
    l= new list({
        item:listItem
      });

      l.save();


    res.status(204).send();

  });
