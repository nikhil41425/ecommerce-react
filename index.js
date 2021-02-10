var express=require('express');

var app=express();

var DB=require('./config/db.config');
DB.connect();

app.listen(9011,()=>{
    console.log("server started");
})
