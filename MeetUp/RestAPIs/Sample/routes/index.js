var express = require('express');
var books = require('../Data/books.js');
var route = express.Router();

route.get("/books",function(req,res){
  // res.send("Welcome to RESTful APIs");

  var obj={
    books,
    statusCode:200
  };
  res.send(obj);
});


route.post("/books", (req, res) => { 
   // var book = req.body; 

  // books.push(book); 

  var book = req.body; 
  
  books.push(book); 

  res.send(books); 

  // if success , status code : 201  

});

route.delete("/books/:id", (req, res) => { 
  var id = req.params.id; 

  // find the book by id
 books = books.filter(book => book.id !== parseInt(id, 10)); 

  res.send(books); 

}); 


route.patch("/books/:id", (req, res)=> { 
  var id = req.params.id; 
  var requestBody = req.body; 

  var bookToUpdate = books.find(book => book.id === parseInt(id, 10));
  
  bookToUpdate.read = requestBody.read;
  
  return res.send(bookToUpdate);
}); 


 

module.exports = route;
