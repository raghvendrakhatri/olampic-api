const express=require('express');
const app=express();
const Athletic=require("./models/model");
require("./db/conn");
const router=require('./route');
const port=3667;

app.use(express.json({
    type: ['application/json', 'text/plain']
  }));


app.use(router);

app.listen(port,()=>
{
    console.log("Running on port ",port);
})