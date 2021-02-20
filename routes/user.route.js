var express= require('express');
var jwt= require('jsonwebtoken');
var userRouter=express.Router();



var UserController = require('../controllers/user.controller');

var Config= require('../config/app.config');


var authMiddleware= function(request,response,next){    
    console.log(request.headers);

    if(request.headers.authorization == null || request.headers.authorization == "" ){
        response.status(401).send("Unauthorized access!");
    }

    var token= request.headers.authorization.split(' ')[1];

    console.log('token',token);

     jwt.verify(token,Config.config.JWT_SECRET,function(error, payload){
         if(error){
             response.send({error:error.message})
         }
         if(payload){
             console.log(payload);
             next();
         }
     })

    // send response or call next()
}

userRouter.post('/register',UserController.registerUser);

userRouter.post('/login',UserController.loginUser);

userRouter.post('/changePassword',authMiddleware,UserController.changePassword);

module.exports=userRouter;