const router=require('express').Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const formidable = require('formidable');
const productModel = require('../../Model/AllProduct')


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});


router.post('/api/upload',(req,res)=>{
    const form =new Formidable.IncomingForm();


    form.parse(req,(error,fields,files)=>
    {
        const {name,owner,email} = fields;
        const{image} =files;
        cloudinary.uploader.upload(image.path,{folder:'/olx'},async(error,result)=>{
            const image_url=result.secure_url;

            const newProduct={
                name:name,
                owner:owner,
                email:email,
                image:image_url,

            };
const product=new productModel(newProduct);

            const savedProduct=await product.save();


            return response.status(201).json({
                msg:'Product Uploaded Successfully',
                product:savedProduct,
            });
        });
});
});
    module.exports=router;