var express=require('express');
var jwt=require('jsonwebtoken');
var productRouter=express.Router();

var productController=require('../controllers/product.controller');

var AuthConfig=require('../middlewares/auth.middleware');

productRouter.post('/addProduct',AuthConfig.authMiddleware,productController.addProduct);
productRouter.get('/allProducts',AuthConfig.authMiddleware,productController.allProducts);
productRouter.get('/product/:id',productController.getProductById);
productRouter.put('/updateProduct/:id',AuthConfig.authMiddleware,productController.updateProduct);
productRouter.delete('/delete/:id',productController.deleteProduct);
productRouter.get('/getProductsByChoice',productController.getProductsByChoice);



module.exports=productRouter;