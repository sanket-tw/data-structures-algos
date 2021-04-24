const express = require('express');
const path= require('path');
const bodyParser = require('body-parser');
require('dotenv').config();


const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

// router.post();
router.all('*',(_,res)=>{
  return (res.json({ message: "This is an invalid path, please try home path." }));
});

router.post('/stripe/charge/',postCharge);

app.use((_,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers',
            'Origin','X-Requested-With','Content-Type','Accept');
  next();
});


app.get('/', function (req, res) {
  console.log(process.env.SECRET_API_KEY);
 res.send(JSON.stringify({ Hello: 'World'}));
});

app.use(bodyParser.json());
app.use('/api',router);
app.use(express.static(path.join(__dirname,'../build')));

app.get('/*',(_,res)=>{
  res.sendFile(path.resolve(__dirname,'../build/index.html'));
});

app.listen(port, function () {
 console.log('Example app listening on port !'+port);
});

app.get('/welcome',function(request,response){
   response.send("<h1>Welcome to express js</h1>");
 });

app.get('/about',(req,res)=>res.send("Hello I am sanket and I am a musical fan of coding."));
