const router = require('express').Router();
const productModel = require('../../Model/AllProduct');



router.get('/api/products',async (request, response)=>{
    const data=await productModel
    .find()
    .exec()
    .then((res)=>{
        return response.status(200).json(res);
    })
    .catch((error)=>{
        return response.status(500).json({
            message:"server down"
        }) 
})
});


module.exports=router;