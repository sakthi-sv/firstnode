//Require module
const express = require('express');
const bodyParser =require("body-parser");
// Express Initialize
const app = express();

const SignUpcontroller=require("./controller/SignUpController")();

let SignUpRouter=require("./routes/SignUpRouter")(SignUpcontroller);


// parse requests of content-type: application/json
app.use(bodyParser.json());
//const connect=require("./models/db.js");

//create Api
app.get('/',(req,res)=>{
   res.send("Get Started with Express"); 
})
app.use('/signup',SignUpRouter.getRouter());
//app.use('/login',SignUpRouter.getRouter());
//server
const port = 8000;
app.listen(port,()=> {
console.log('listen port 8000');
})
