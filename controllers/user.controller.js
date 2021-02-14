var JWT=require('jsonwebtoken');

var UserModel=require('../models/user.model');
var Config=require('../config/app.config');
const { request, response } = require('express');
const userModel = require('../models/user.model');

exports.registerUser=(request,response)=>{

    console.log(request.body);
    var userData=request.body;
    var UserCollection=new UserModel(userData);
    UserCollection.save(function(err,doc){
        if(err){
            response.send({result:err.message});
        }
        if(doc._id){

            var payload={id:doc._id};
            var token=JWT.sign(payload,Config.config.JWT_SECRET);
            response.send({result:"success",token:token});
        }
    });
}

exports.loginUser=(request,response)=>{

    var userData=request.body;

    UserModel.findOne({emailId:userData.emailId},(err,doc)=>{

        if(err){
            console.log(err);
            response.send({status:false,err:err.message});
        }
        if(doc){
            if(doc.password == userData.password){
                var payload=({id:doc._id});
                var token=JWT.sign(payload,Config.config.JWT_SECRET);
                response.send({status:true,token:token});
            }
        }
       
    })

}

exports.changePassword=(request,response)=>{

    var userData=request.body;

    UserModel.findOne({emailId:userData.emailId},(err,doc)=>{

        if(err){
            console.log(err);
            response.send({status:false,err:err.message});
        }
        if(doc){
            if(doc.password==userData.currentPassword){

                UserModel.updateOne({emailId:userData.emailId},{password:userData.newPassword},(err,res)=>{

                    if(err){
                        console.log(err);
                        response.send({status:false,err:err.message});
                    }
                    if(res){
                        response.send({status:true, message:"updated"});
                    }
                    
                });
            }
            else{
                response.send({status:false,message:"current password incorrect"});
            }

        }
    });
}