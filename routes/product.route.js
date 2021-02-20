var express=require('express');
var jwt=require('jsonwebtoken');
var productRouter=express.Router();

var productController=require('../controllers/product.controller');

productRouter.post('/addProduct',productController.addProduct);
productRouter.get('/allProducts',productController.allProducts);
productRouter.get('/product/:id',productController.getProductById);
productRouter.put('/updateProduct/:id',productController.updateProduct);
productRouter.delete('/delete/:id',productController.deleteProduct);



module.exports=productRouter;