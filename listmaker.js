var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var lmschema=Schema({
  item: String
});

var list=mongoose.model("list",lmschema);

module.exports=list;
