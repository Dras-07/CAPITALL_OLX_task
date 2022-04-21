const mongoose = require('mongoose');


const  productShema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    image:{
        type:File,
        required:true,
    }
});    




const productModel = mongoose.model('Product',productShema);
module.exports=productModel;