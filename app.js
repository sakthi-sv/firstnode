//Require module
const express = require('express');
const bodyParser =require("body-parser");
// Express Initialize
const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());
const sql=require("./models/db.js");
//server
const port = 8000;
app.listen(port,()=> {
console.log('listen port 8000');
})
//create Api
app.get('/node',(req,res)=>{
   res.send("Learn express"); 
})