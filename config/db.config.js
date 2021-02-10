var mongoose=require('mongoose');

//url : mongodb+srv://nikhil:<password>@ecommerce.ihbgn.mongodb.net/<dbname>?retryWrites=true&w=majority

exports.connect=() => {

    mongoose.connect('mongodb+srv://nikhil:nikhil123@ecommerce.ihbgn.mongodb.net/reactecommerce?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("connected to database");
        }
    })
}