var express=require('express');
var userRouter=express.Router();
var jwt=require('jsonwebtoken');

var UserController=require('../controllers/user.controller');
var Config=require('../config/app.config');
const { request } = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');

var authMiddleware=(request,response,next)=>{
    console.log(request.headers);

    if(request.headers.authorization==null || request.headers.authorization==""){
        response.status(401).send("unauthorized access");
    }

    var token=request.headers.authorization.split(' ')[1];
    console.log('token',token);

    jwt.verify(token,Config.config.JWT_SECRET,function(err,payload){
        if(err){
            console.log({error:err.message});
        }
        if(payload){
            console.log(payload);
            next();
        }
    });
}

userRouter.post('/register',UserController.registerUser);
userRouter.post('/login',UserController.loginUser);
userRouter.post('/changePassword',authMiddleware,UserController.changePassword);


module.exports=userRouter;