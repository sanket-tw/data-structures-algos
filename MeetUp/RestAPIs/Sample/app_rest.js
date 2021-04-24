var express = require('express');
var bodyParser = require('body-parser'); 


// import {express} from 'express';
var indexRoute = require('./routes/index.js');
var app = express();
var port = process.env.POST || 3000;

// body-parser boiler plate
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",function(req,res, next){
  res.send("Welcome to express");
});

app.use("/",indexRoute);


app.get("/contact",function(req,res){
  res.send("Reach us out to example@gmail.com");
  console.log("Reach us out to example@gmail.com");
});

app.listen(port,function(){
  console.log("I am listening to "+port+" and we are live..");
  console.log(`This is node server live and listening to port number ${port}.`);
});

