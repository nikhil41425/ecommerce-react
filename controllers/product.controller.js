var  productModel=require('../models/product.model');

exports.addProduct=function(request,response){

    var product=request.body;
    var newProduct=new productModel(product);

    newProduct.save(function(err,doc){
        if(err){
            response.send({status:false,err:err.message});
        }
        if(doc._id){
            response.send({status:true,message:"product added successfully"});
        }
    })

}

exports.allProducts=function(request,response){

    productModel.find({},(err,docs)=>{
        if(err){
            response.send({status:false,err:err.message});
            return;
        }
        if(docs){
            response.send(docs);
        }
    })

}

exports.getProductById=function(request,response){
    var pid=request.params.id;

    productModel.findOne({pid:pid},(err,docs)=>{
        if(err){
            response.send(err.message);
        }
        if(docs){
            response.send(docs);
        }
    })
}

exports.updateProduct=function(request,response){

    var pid=request.params.id;
    var updatedProduct=request.body;

    productModel.updateOne({pid:pid},updatedProduct,(err,res)=>{
        if(err){
            response.send(err.message);
        }
        if(res){
            response.send(res);
            
        }
    })
}

exports.deleteProduct=function(request,response){

    var pid=request.params.id;
    var deletedItem=request.body;

    productModel.deleteOne({pid:pid},deletedItem,(err,res)=>{
        if(err){
            response.send(err.message);
        }
        if(res){
            response.send(res);
        }
    })
}