var express = require('express');
var app= express();

var DB= require('./config/db.config');
var Config=require('./config/app.config');
var UserRouter= require('./routes/user.route');
var ProductRouter=require('./routes/product.route');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

DB.connect();

app.use('/user',UserRouter);
app.use('/admin',ProductRouter);

app.listen(Config.config.PORT, () => {
    console.log("server started on port no  "+Config.config.PORT);
})
