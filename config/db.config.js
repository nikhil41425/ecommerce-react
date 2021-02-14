var mongoose=require('mongoose');
var Config=require('../config/app.config');

//url : mongodb+srv://nikhil:<password>@ecommerce.ihbgn.mongodb.net/<dbname>?retryWrites=true&w=majority

exports.connect=() => {

    mongoose.connect(Config.config.MONGO_URL,{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("connected to database");
        }
    })
}