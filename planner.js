//var domino=require("domino");
//var winObj=domino.createWindow();

//global["window"]=winObj;
//global["document"]=winObj.document;

var li;

window.onload=function a()
{


var textArea=document.querySelector("textarea");
var ul=document.querySelector("ul");
var button=document.querySelector("button");
var body=document.querySelector("body");

button.onclick=function buttonClick()
{
  setTimeout(function(){

    li=document.createElement("li");

    li.innerHTML=textArea.value;

    ul.appendChild(li);

    textArea.value=null;
    li.style.color="silver";
    li.style.fontSize="20px";

    li.addEventListener("click",(e)=>{

      console.log(e.target.innerHTML);
      var xhttp=new XMLHttpRequest();
      xhttp.open("POST","http://127.0.0.1:3000/del",true);
      xhttp.setRequestHeader("Content-type","application/json");
      item=e.target.innerHTML;
      xhttp.send(JSON.stringify({item:item}));

    document.querySelector("ul").removeChild(e.target);})

    li.style.width="100%";
    li.style.position="relative";
    li.style.left="20px";
    li.style.height="40px";
    li.style.listStylePosition="outside";

  },500);


};


};
