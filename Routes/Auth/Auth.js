const userModel = require('../../Model/User');
const Bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const Formidable = require('formidable');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();





//=================USER AUTH===//

router.post('/api/user-signup', (req, res) => {
    const form = new Formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        const{email, password, name, verifiedPassword} = fields;

        console.log(password);
       try {
        if(!email || !password || !name || !verifiedPassword){
            return res
            .status(400)
            .json({msg:"All field have to be entered"});
        }

      
        if(password.length<5)
        {
            return res
            .status(400)
            .json({msg:"Password must be at least 5 characters long"});
        }


        if(password !== verifiedPassword){
            return res
            .status(400)
            .json({msg:"Passwords do not match"});
        }

     const user=await userModel.findOne({email:email});
        if(user){
            return res
            .status(400)
            .json({msg:"User already exists"});
        }

        const salt = await Bcrypt.genSalt(15);
        const hashedPassword = await Bcrypt.hash(password, salt);
        const newUser = new userModel({
            email,
            password:hashedPassword,
            name,
        });
        const savedUser = await newUser.save();

        const token = JWT.sign({id:savedUser._id}, process.env.JWT_SECRET);
        return res
        .status(201)
        .json({
            msg:"Account created successfully",
            token:token,
            name:savedUser.name,
            email:savedUser.email,

        });
       }
       catch(err){
           console.log(err);
           console.log("hello");
           return res
           .status(500)
           .json({
               message: "server down"
           });
       }
    });
});




router.post('/api/user-login', async (req, res) => {
    const form = new Formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        const{email, password} = fields;
         try {
           
            if(!email || !password){
                return res
                .status(400)
                .json({msg:"All field have to be entered"});
            }

            const user = await userModel.findOne({email:email});

            if(!user){
                return res
                .status(400)
                .json({msg:"User does not exist"});
            }


            const isPassword=await Bcrypt.compare(password, user.password);
            if(!isPassword){
                return res
                .status(400)
                .json({msg:"Incorrect password"});
            }
              const token=JWT.sign({id:user._id}, process.env.JWT_SECRET);
              return res
                .status(200)
                .json({
                    msg:"User logged in successfully",
                    token:token,
                    name:user.name,
                    email:user.email,
                });

        } catch (error) {
            return res
            .status(500)
            .json({
                message: "server down"
            });
        }
    });
});

module.exports =router;