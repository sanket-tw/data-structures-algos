//jshint esversion:6
const express=require('express');
const app=express();
const port=3000;

app.get('/',function(req,res){
// res.send(./index.html);
console.log(__dirname);
res.sendFile(__dirname+"/index.html");
});

app.listen(port,function(){
  console.log("I am listening to poer ${port}!");
});

app.post('/sum',(req,res) =>{
  console.log(req);
  res.send("Sum returned is");
});

